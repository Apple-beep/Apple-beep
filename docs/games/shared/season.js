(function () {
  const SEASON_KEY = "mkp_season_v2";

  const RANKS = [
    { name: "Rookie Operator", minXp: 0 },
    { name: "Reliability Analyst", minXp: 400 },
    { name: "Incident Specialist", minXp: 900 },
    { name: "Systems Architect", minXp: 1500 },
    { name: "Staff Reliability", minXp: 2300 },
    { name: "Principal Command", minXp: 3300 },
  ];

  const BADGE_CATALOG = [
    { id: "first_run", label: "First Run", desc: "Complete your first tracked game run." },
    { id: "multi_game", label: "Multi-Game Operator", desc: "Play at least 3 distinct games." },
    { id: "all_modes", label: "All Modes Unlocked", desc: "Play all 4 core games at least once." },
    { id: "latency_sniper", label: "Latency Sniper", desc: "Score 700+ in Latency Lab." },
    { id: "incident_lead", label: "Incident Lead", desc: "Score 75+ in Incident Commander." },
    { id: "autoscale_ace", label: "Autoscale Ace", desc: "Score 650+ in Autoscale Arena." },
    { id: "command_chief", label: "Command Chief", desc: "Score 1000+ in Command Center." },
    { id: "triple_stability", label: "Triple Stability", desc: "Win 3 runs in a row." },
    { id: "season_elite", label: "Season Elite", desc: "Reach 2500 season XP." },
  ];

  function rankForXp(xp) {
    let current = RANKS[0];
    for (const rank of RANKS) {
      if (xp >= rank.minXp) current = rank;
    }
    return current;
  }

  function nextRank(xp) {
    return RANKS.find((rank) => xp < rank.minXp) || null;
  }

  function defaultState() {
    return {
      xp: 0,
      runs: 0,
      totalScore: 0,
      bestScores: {},
      playsByGame: {},
      winsByGame: {},
      distinctGames: [],
      badges: {},
      rank: RANKS[0].name,
      lastRuns: [],
      winStreak: 0,
      updatedAt: new Date().toISOString(),
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(SEASON_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        ...defaultState(),
        ...parsed,
        badges: { ...(parsed.badges || {}) },
        bestScores: { ...(parsed.bestScores || {}) },
        playsByGame: { ...(parsed.playsByGame || {}) },
        winsByGame: { ...(parsed.winsByGame || {}) },
        distinctGames: Array.isArray(parsed.distinctGames) ? parsed.distinctGames : [],
        lastRuns: Array.isArray(parsed.lastRuns) ? parsed.lastRuns.slice(0, 20) : [],
      };
    } catch (_) {
      return defaultState();
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(SEASON_KEY, JSON.stringify(state));
    } catch (_) {
      // ignore storage failures
    }
  }

  function unlockBadge(state, id, unlocks) {
    if (!state.badges[id]) {
      state.badges[id] = true;
      const meta = BADGE_CATALOG.find((b) => b.id === id);
      if (meta) unlocks.push(meta.label);
    }
  }

  function updateBadges(state, run, unlocks) {
    unlockBadge(state, "first_run", unlocks);

    if (state.distinctGames.length >= 3) unlockBadge(state, "multi_game", unlocks);

    const allCore = ["latency-lab", "incident-commander", "autoscale-arena", "command-center"];
    if (allCore.every((g) => (state.playsByGame[g] || 0) > 0)) unlockBadge(state, "all_modes", unlocks);

    if ((state.bestScores["latency-lab"] || 0) >= 700) unlockBadge(state, "latency_sniper", unlocks);
    if ((state.bestScores["incident-commander"] || 0) >= 75) unlockBadge(state, "incident_lead", unlocks);
    if ((state.bestScores["autoscale-arena"] || 0) >= 650) unlockBadge(state, "autoscale_ace", unlocks);
    if ((state.bestScores["command-center"] || 0) >= 1000) unlockBadge(state, "command_chief", unlocks);

    if (state.winStreak >= 3) unlockBadge(state, "triple_stability", unlocks);
    if (state.xp >= 2500) unlockBadge(state, "season_elite", unlocks);
  }

  function calcXp(run, state) {
    const base = 70;
    const scorePart = Math.min(240, Math.max(0, run.score * 0.2));
    const winBonus = run.won ? 35 : 0;
    const modeBonus = state.distinctGames.length >= 3 ? 15 : 0;
    const difficultyBonus = run.meta && run.meta.bossLevel ? run.meta.bossLevel * 6 : 0;
    return Math.round(base + scorePart + winBonus + modeBonus + difficultyBonus);
  }

  function recordRun(input) {
    const run = {
      game: input.game || "unknown",
      score: Math.max(0, Math.round(Number(input.score) || 0)),
      won: Boolean(input.won),
      grade: input.grade || "Run",
      meta: input.meta || {},
      timestamp: new Date().toISOString(),
    };

    const state = loadState();
    const beforeRank = rankForXp(state.xp).name;

    state.runs += 1;
    state.totalScore += run.score;
    state.playsByGame[run.game] = (state.playsByGame[run.game] || 0) + 1;

    if (run.won) {
      state.winsByGame[run.game] = (state.winsByGame[run.game] || 0) + 1;
      state.winStreak += 1;
    } else {
      state.winStreak = 0;
    }

    if (!state.distinctGames.includes(run.game)) {
      state.distinctGames.push(run.game);
    }

    state.bestScores[run.game] = Math.max(state.bestScores[run.game] || 0, run.score);

    const xpGain = calcXp(run, state);
    state.xp += xpGain;

    state.lastRuns.unshift(run);
    state.lastRuns = state.lastRuns.slice(0, 20);

    const unlocks = [];
    updateBadges(state, run, unlocks);

    const afterRankObj = rankForXp(state.xp);
    state.rank = afterRankObj.name;
    const rankUp = beforeRank !== state.rank;

    state.updatedAt = new Date().toISOString();
    saveState(state);

    return {
      state,
      xpGain,
      rank: state.rank,
      rankUp,
      unlockedBadges: unlocks,
      nextRank: nextRank(state.xp),
    };
  }

  function getState() {
    const state = loadState();
    return {
      ...state,
      nextRank: nextRank(state.xp),
      badgeCatalog: BADGE_CATALOG,
      ranks: RANKS,
    };
  }

  function resetSeason() {
    const fresh = defaultState();
    saveState(fresh);
    return fresh;
  }

  window.MKPSeason = {
    recordRun,
    getState,
    resetSeason,
  };
})();
