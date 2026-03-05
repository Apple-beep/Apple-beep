<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>VIBE.EXE://RUNNING — Musharaf Khan Pathan</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=VT323&family=JetBrains+Mono:wght@300;400;700&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
<style>

/* ═══════════════════════════════════════
   RESET + PAGE
═══════════════════════════════════════ */
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

:root {
  --void:       #08000F;
  --grid-dark:  #120020;
  --grid-mid:   #1E0040;
  --border:     #3D0080;
  --muted:      #8B5FBF;
  --text:       #E8D5FF;
  --bright:     #FFFFFF;
  --pink:       #FF2D78;
  --cyan:       #00F5FF;
  --purple:     #BF00FF;
  --yellow:     #FFE566;
  --green:      #39FF14;
  --orange:     #FF6B35;
}

body {
  background: #0a0010;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 20px;
  min-height: 100vh;
}

/* ═══════════════════════════════════════
   HERO CARD
═══════════════════════════════════════ */
.hero {
  width: 860px;
  background: var(--void);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  font-family: 'JetBrains Mono', monospace;
}

/* ═══════════════════════════════════════
   BACKGROUND: GRID + GLOW ORB
═══════════════════════════════════════ */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,45,120,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,45,120,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}

.bg-orb {
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(191,0,255,0.12) 0%, rgba(255,45,120,0.06) 40%, transparent 70%);
  top: -120px;
  left: -80px;
  pointer-events: none;
  z-index: 0;
  animation: orbDrift 8s ease-in-out infinite alternate;
}
.bg-orb2 {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%);
  bottom: -100px;
  right: -60px;
  pointer-events: none;
  z-index: 0;
  animation: orbDrift 10s ease-in-out infinite alternate-reverse;
}
@keyframes orbDrift {
  from { transform: translate(0,0) scale(1); }
  to   { transform: translate(20px,15px) scale(1.05); }
}

/* ═══════════════════════════════════════
   SCANLINE SWEEP
═══════════════════════════════════════ */
.scanlines {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0,0,0,0.06) 3px,
    rgba(0,0,0,0.06) 4px
  );
}
.scan-sweep {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
}
.scan-sweep::after {
  content: '';
  position: absolute;
  left: 0; right: 0;
  height: 60px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255,45,120,0.04) 40%,
    rgba(255,45,120,0.08) 50%,
    rgba(255,45,120,0.04) 60%,
    transparent 100%
  );
  animation: scanSweep 6s linear infinite;
  top: -60px;
}
@keyframes scanSweep {
  0%   { top: -60px; }
  100% { top: 420px; }
}

/* ═══════════════════════════════════════
   MENU BAR
═══════════════════════════════════════ */
.menu-bar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 18px;
  height: 36px;
  background: rgba(18,0,32,0.95);
  border-bottom: 1px solid var(--border);
}
.mac-dots { display:flex; gap:6px; margin-right:14px; }
.mac-dot { width:11px; height:11px; border-radius:50%; }
.mac-dot.r { background:#FF5F57; box-shadow:0 0 6px rgba(255,95,87,0.5); }
.mac-dot.y { background:#FEBC2E; box-shadow:0 0 6px rgba(254,188,46,0.5); }
.mac-dot.g { background:#28C840; box-shadow:0 0 6px rgba(40,200,64,0.5); }
.menu-title {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 2px;
  font-family: 'JetBrains Mono', monospace;
}
.menu-title span { color: var(--pink); }

.live-badge {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: var(--pink);
  letter-spacing: 2px;
  font-family: 'JetBrains Mono', monospace;
}
.live-ring {
  position: relative;
  width: 12px;
  height: 12px;
}
.live-ring .core {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 6px var(--pink);
}
.live-ring .ring1,
.live-ring .ring2 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid var(--pink);
  animation: ringExpand 2s ease-out infinite;
}
.live-ring .ring2 { animation-delay: 1s; }
@keyframes ringExpand {
  0%   { transform: scale(0.5); opacity: 0.9; }
  100% { transform: scale(2.2); opacity: 0; }
}
.now-shipping {
  font-size: 9px;
  color: var(--green);
  letter-spacing: 3px;
  animation: nowBlink 2s step-end infinite;
}
@keyframes nowBlink {
  0%,100% { opacity:1; }
  50%     { opacity:0.3; }
}

/* ═══════════════════════════════════════
   MAIN BODY LAYOUT
═══════════════════════════════════════ */
.hero-body {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 0;
}

/* ═══════════════════════════════════════
   EQ WAVEFORM SECTION
═══════════════════════════════════════ */
.eq-section {
  padding: 22px 26px 14px;
  position: relative;
}
.eq-label {
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 3px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.eq-label::before {
  content: '';
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 6px var(--pink);
  animation: eqDot 1.5s ease-in-out infinite;
}
@keyframes eqDot {
  0%,100% { opacity:1; box-shadow:0 0 6px var(--pink); }
  50%     { opacity:0.4; box-shadow:none; }
}

.eq-container {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 64px;
}

/* 48 bars, each animated independently */
.eq-bar {
  flex: 1;
  border-radius: 2px 2px 0 0;
  animation: eqBeat ease-in-out infinite alternate;
  transform-origin: bottom;
}

/* Pink bars */
.eq-bar:nth-child(3n)   { background: linear-gradient(180deg, var(--pink) 0%, rgba(255,45,120,0.3) 100%); box-shadow: 0 -2px 6px rgba(255,45,120,0.5); }
/* Cyan bars */
.eq-bar:nth-child(3n+1) { background: linear-gradient(180deg, var(--cyan) 0%, rgba(0,245,255,0.3) 100%); box-shadow: 0 -2px 6px rgba(0,245,255,0.4); }
/* Purple bars */
.eq-bar:nth-child(3n+2) { background: linear-gradient(180deg, var(--purple) 0%, rgba(191,0,255,0.3) 100%); box-shadow: 0 -2px 6px rgba(191,0,255,0.4); }

@keyframes eqBeat {
  from { transform: scaleY(var(--min)); }
  to   { transform: scaleY(var(--max)); }
}

/* ═══════════════════════════════════════
   MAIN CONTENT AREA (Name + Right Panel)
═══════════════════════════════════════ */
.content-row {
  display: flex;
  gap: 0;
  padding: 16px 26px 18px;
  align-items: flex-start;
}

/* LEFT: NAME + TAGLINES */
.name-col {
  flex: 1;
}

.name-main {
  font-family: 'VT323', monospace;
  font-size: 76px;
  line-height: 0.88;
  letter-spacing: 4px;
  position: relative;
  margin-bottom: 10px;
}

.name-line1 {
  display: block;
  background: linear-gradient(90deg, var(--pink) 0%, #FF6BA8 50%, var(--purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: nameGlitch 6s steps(1) infinite;
  filter: drop-shadow(0 0 12px rgba(255,45,120,0.6));
  opacity: 0;
  animation: nameReveal 0.1s ease forwards 0.2s, nameGlitch 6s steps(1) infinite 2s;
}
.name-line2 {
  display: block;
  background: linear-gradient(90deg, var(--purple) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px rgba(0,245,255,0.5));
  opacity: 0;
  animation: nameReveal 0.1s ease forwards 0.5s;
}
.name-line3 {
  display: block;
  background: linear-gradient(90deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px rgba(255,45,120,0.4));
  opacity: 0;
  animation: nameReveal 0.1s ease forwards 0.8s;
}
@keyframes nameReveal {
  to { opacity: 1; }
}
@keyframes nameGlitch {
  0%,91%,100% { transform: none; filter: drop-shadow(0 0 12px rgba(255,45,120,0.6)); }
  92% { transform: skewX(-3deg) translateX(3px); filter: drop-shadow(-3px 0 var(--cyan)) drop-shadow(3px 0 var(--pink)); }
  93% { transform: skewX(2deg) translateX(-2px); }
  94% { transform: none; filter: drop-shadow(0 0 20px rgba(255,45,120,1)); }
  95% { transform: translateX(4px); filter: drop-shadow(-4px 0 var(--cyan)); }
  96% { transform: translateX(-4px); filter: drop-shadow(4px 0 var(--pink)); }
  97% { transform: none; filter: drop-shadow(0 0 12px rgba(255,45,120,0.6)); }
}

/* TYPEWRITER TAGLINES */
.taglines {
  margin-top: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
}
.tl {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  line-height: 2;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
}
.tl .prompt { color: var(--pink); font-size: 14px; }
.tl .text   { color: var(--text); }
.tl .text em { color: var(--cyan); font-style:normal; }
.tl .text strong { color: var(--yellow); font-style:normal; }
.tl .cursor {
  display: inline-block;
  width: 2px; height: 13px;
  background: var(--pink);
  margin-left: 2px;
  vertical-align: middle;
  animation: cursorBlink 0.7s step-end infinite;
}
@keyframes cursorBlink {
  0%,100% { opacity:1; }
  50%     { opacity:0; }
}
.tl:nth-child(1) { animation: tlReveal 0.3s ease forwards 1.1s; }
.tl:nth-child(2) { animation: tlReveal 0.3s ease forwards 1.6s; }
.tl:nth-child(3) { animation: tlReveal 0.3s ease forwards 2.1s; }
.tl:nth-child(4) { animation: tlReveal 0.3s ease forwards 2.6s; }
@keyframes tlReveal {
  to { opacity: 1; }
}

/* RIGHT: SIGNAL STATS */
.stats-col {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  animation: statsReveal 0.5s ease forwards 1.8s;
  padding-left: 20px;
  border-left: 1px solid rgba(61,0,128,0.6);
}
@keyframes statsReveal {
  from { opacity:0; transform: translateX(10px); }
  to   { opacity:1; transform: translateX(0); }
}
.stat-badge {
  background: rgba(30,0,64,0.8);
  border: 1px solid rgba(61,0,128,0.8);
  border-radius: 6px;
  padding: 10px 12px;
  position: relative;
  overflow: hidden;
}
.stat-badge::before {
  content:'';
  position:absolute;
  top:0; left:0; right:0;
  height: 2px;
  animation: topGlow 2s ease-in-out infinite;
}
.stat-badge:nth-child(1)::before { background: var(--pink); box-shadow: 0 0 8px var(--pink); animation-delay:0s; }
.stat-badge:nth-child(2)::before { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); animation-delay:0.4s; }
.stat-badge:nth-child(3)::before { background: var(--purple); box-shadow: 0 0 8px var(--purple); animation-delay:0.8s; }
@keyframes topGlow {
  0%,100% { opacity:0.5; }
  50%     { opacity:1; }
}
.stat-num {
  font-family: 'VT323', monospace;
  font-size: 30px;
  color: var(--bright);
  line-height: 1;
  margin-bottom: 2px;
}
.stat-badge:nth-child(1) .stat-num { color: var(--pink); text-shadow: 0 0 10px rgba(255,45,120,0.7); }
.stat-badge:nth-child(2) .stat-num { color: var(--cyan); text-shadow: 0 0 10px rgba(0,245,255,0.7); }
.stat-badge:nth-child(3) .stat-num { color: var(--purple); text-shadow: 0 0 10px rgba(191,0,255,0.7); }
.stat-label {
  font-size: 8px;
  color: var(--muted);
  letter-spacing: 2px;
  line-height: 1.4;
}

/* ═══════════════════════════════════════
   BADGE ROW
═══════════════════════════════════════ */
.badge-row {
  display: flex;
  gap: 10px;
  padding: 0 26px 16px;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.5s ease forwards 2.8s;
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(6px); }
  to   { opacity:1; transform:translateY(0); }
}
.vbadge {
  padding: 5px 14px;
  border-radius: 4px;
  font-size: 10px;
  letter-spacing: 2px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  animation: badgePing 3s ease-in-out infinite;
}
.vbadge::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
  animation: badgeShimmer 2.5s ease-in-out infinite;
}
@keyframes badgeShimmer {
  0%,100% { transform: translateX(-100%); }
  50%     { transform: translateX(100%); }
}
@keyframes badgePing {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.03); }
}
.vbadge.pink   { border:1px solid rgba(255,45,120,0.6); color:var(--pink);   background:rgba(255,45,120,0.08); animation-delay:2.9s; }
.vbadge.cyan   { border:1px solid rgba(0,245,255,0.5);  color:var(--cyan);   background:rgba(0,245,255,0.06); animation-delay:3.1s; }
.vbadge.purple { border:1px solid rgba(191,0,255,0.5);  color:var(--purple); background:rgba(191,0,255,0.06); animation-delay:3.3s; }
.vbadge.yellow { border:1px solid rgba(255,229,102,0.5);color:var(--yellow); background:rgba(255,229,102,0.06); animation-delay:3.5s; }

/* ═══════════════════════════════════════
   LOFI TICKER
═══════════════════════════════════════ */
.ticker-bar {
  border-top: 1px solid rgba(61,0,128,0.6);
  background: rgba(18,0,32,0.9);
  height: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: fadeIn 0.4s ease forwards 3.5s;
}
.ticker-label {
  flex-shrink: 0;
  padding: 0 14px;
  font-size: 9px;
  color: var(--pink);
  letter-spacing: 3px;
  font-family: 'JetBrains Mono', monospace;
  border-right: 1px solid rgba(61,0,128,0.6);
  height: 100%;
  display: flex;
  align-items: center;
  background: rgba(30,0,64,0.5);
}
.ticker-label .music-note { animation: noteBounce 0.8s ease-in-out infinite alternate; display:inline-block; }
@keyframes noteBounce {
  from { transform: translateY(0); }
  to   { transform: translateY(-2px); }
}
.ticker-track {
  flex: 1;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
}
.ticker-content {
  display: flex;
  align-items: center;
  gap: 0;
  white-space: nowrap;
  animation: tickerScroll 28s linear infinite;
  font-size: 10px;
  color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}
.ticker-content span { color: var(--pink); margin: 0 6px; }
.ticker-content em { color: var(--cyan); font-style:normal; }
.ticker-content strong { color: var(--yellow); }
@keyframes tickerScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-fade-l {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 80px;
  pointer-events: none;
}
.ticker-fade-r {
  position: absolute;
  right: 0; top: 0; bottom: 0;
  width: 60px;
  background: linear-gradient(90deg, transparent, rgba(18,0,32,0.95));
  pointer-events: none;
}

/* ═══════════════════════════════════════
   STATUS BAR
═══════════════════════════════════════ */
.status-bar {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 7px 18px;
  background: rgba(8,0,15,0.95);
  border-top: 1px solid rgba(61,0,128,0.4);
  position: relative;
  z-index: 10;
  opacity: 0;
  animation: fadeIn 0.4s ease forwards 4s;
}
.si {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 1px;
}
.sid {
  width: 5px; height: 5px;
  border-radius: 50%;
  animation: sidPulse 2s ease-in-out infinite;
}
.sid.p { background:var(--pink);   box-shadow:0 0 5px var(--pink); }
.sid.c { background:var(--cyan);   box-shadow:0 0 5px var(--cyan);   animation-delay:0.7s; }
.sid.u { background:var(--purple); box-shadow:0 0 5px var(--purple); animation-delay:1.4s; }
@keyframes sidPulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
.status-right {
  margin-left: auto;
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 2px;
  display: flex; align-items:center; gap:10px;
}
.version-tag {
  padding: 2px 8px;
  border: 1px solid rgba(191,0,255,0.4);
  border-radius: 2px;
  color: var(--purple);
  font-size: 8px;
  letter-spacing: 2px;
}

@keyframes fadeIn { to { opacity:1; } }
</style>
</head>
<body>

<div class="hero">

  <!-- Backgrounds -->
  <div class="bg-grid"></div>
  <div class="bg-orb"></div>
  <div class="bg-orb2"></div>
  <div class="scanlines"></div>
  <div class="scan-sweep"></div>

  <!-- Menu Bar -->
  <div class="menu-bar">
    <div class="mac-dots">
      <div class="mac-dot r"></div>
      <div class="mac-dot y"></div>
      <div class="mac-dot g"></div>
    </div>
    <div class="menu-title">Apple-beep / <span>VIBE.EXE</span> · README.md</div>
    <div class="live-badge">
      <div class="now-shipping">NOW SHIPPING</div>
      &nbsp;
      <div class="live-ring">
        <div class="core"></div>
        <div class="ring1"></div>
        <div class="ring2"></div>
      </div>
      LIVE
    </div>
  </div>

  <!-- Hero Body -->
  <div class="hero-body">

    <!-- EQ Waveform -->
    <div class="eq-section">
      <div class="eq-label">♫ VIBE_SIGNAL://ACTIVE &nbsp; · &nbsp; CODING SESSION IN PROGRESS</div>
      <div class="eq-container" id="eqBars"></div>
    </div>

    <!-- Content Row -->
    <div class="content-row">

      <!-- Name Column -->
      <div class="name-col">
        <div class="name-main">
          <span class="name-line1">MUSHARAF</span>
          <span class="name-line2">KHAN</span>
          <span class="name-line3">PATHAN</span>
        </div>

        <div class="taglines">
          <div class="tl">
            <span class="prompt">›</span>
            <span class="text"><em>vibe coder.</em> ai-native. backend architect.<span class="cursor"></span></span>
          </div>
          <div class="tl">
            <span class="prompt">›</span>
            <span class="text">ships fast. secures everything. <em>breaks nothing.</em></span>
          </div>
          <div class="tl">
            <span class="prompt">›</span>
            <span class="text">describe the vibe → <strong>AI writes boilerplate</strong> → I ship.</span>
          </div>
          <div class="tl">
            <span class="prompt">›</span>
            <span class="text">currently building the future in <em>Chicago</em> 🌆</span>
          </div>
        </div>
      </div>

      <!-- Stats Column -->
      <div class="stats-col">
        <div class="stat-badge">
          <div class="stat-num">4h→15m</div>
          <div class="stat-label">RELEASE CYCLE<br>COMPRESSED</div>
        </div>
        <div class="stat-badge">
          <div class="stat-num">92%</div>
          <div class="stat-label">PHISHING DETECT<br>ACCURACY</div>
        </div>
        <div class="stat-badge">
          <div class="stat-num">100+</div>
          <div class="stat-label">STUDENTS<br>MENTORED</div>
        </div>
      </div>

    </div>

    <!-- Badge Row -->
    <div class="badge-row">
      <div class="vbadge pink">VIBE CODER</div>
      <div class="vbadge cyan">AI × SECURITY</div>
      <div class="vbadge purple">BACKEND SYSTEMS</div>
      <div class="vbadge yellow">OPEN TO FT SWE 2026</div>
    </div>

    <!-- Lofi Ticker -->
    <div class="ticker-bar">
      <div class="ticker-label"><span class="music-note">♪</span>&nbsp; NOW VIBING</div>
      <div class="ticker-track">
        <div class="ticker-content">
          &nbsp;&nbsp;&nbsp; currently shipping: <em>AI-powered backend systems</em> <span>✦</span> IIT Chicago · BS CS May 2026 <span>✦</span> <strong>open to: FT SWE roles 2026</strong> <span>✦</span> Stack: Python · Java · React · Docker · AWS · NLP <span>✦</span> tools: Cursor · GitHub Copilot · Claude <span>✦</span> vibe: lofi beats + terminal green + 2am deploys <span>✦</span> portfolio: musharafportfolio.vercel.app <span>✦</span> currently shipping: <em>AI-powered backend systems</em> <span>✦</span> IIT Chicago · BS CS May 2026 <span>✦</span> <strong>open to: FT SWE roles 2026</strong> <span>✦</span> Stack: Python · Java · React · Docker · AWS · NLP <span>✦</span> tools: Cursor · GitHub Copilot · Claude <span>✦</span> vibe: lofi beats + terminal green + 2am deploys <span>✦</span> portfolio: musharafportfolio.vercel.app <span>✦</span>
        </div>
      </div>
      <div class="ticker-fade-r"></div>
    </div>

  </div>

  <!-- Status Bar -->
  <div class="status-bar">
    <div class="si"><div class="sid p"></div>Chicago, IL</div>
    <div class="si"><div class="sid c"></div>IIT · BS CS · May 2026</div>
    <div class="si"><div class="sid u"></div>Full-Time SWE 2026</div>
    <div class="status-right">
      <span>musharafportfolio.vercel.app</span>
      <div class="version-tag">VIBE.EXE v1.0</div>
    </div>
  </div>

</div>

<script>
// ── Generate EQ bars ──────────────────────────────────────────────
const container = document.getElementById('eqBars');
const barCount = 52;

// Heights vary to simulate a real EQ curve (peaks in mids)
const heightProfile = [
  8,14,20,28,36,44,50,55,58,60,58,56,52,48,52,56,60,58,54,50,
  46,50,54,60,62,64,60,56,52,48,44,48,52,56,60,56,52,48,44,40,
  36,40,44,48,44,40,36,30,24,18,12,8
];

for (let i = 0; i < barCount; i++) {
  const bar = document.createElement('div');
  bar.className = 'eq-bar';
  
  const base = heightProfile[i] || 20;
  const min = Math.max(0.1, (base * 0.3) / 64);
  const max = Math.min(1, (base * 1.1) / 64);
  const dur = (0.4 + Math.random() * 0.9).toFixed(2);
  const delay = (Math.random() * 0.8).toFixed(2);
  
  bar.style.cssText = `
    --min: ${min};
    --max: ${max};
    height: 64px;
    animation-duration: ${dur}s;
    animation-delay: ${delay}s;
  `;
  
  container.appendChild(bar);
}
</script>
</body>
</html>
