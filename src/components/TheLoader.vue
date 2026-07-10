<template>
  <div
    class="loader"
    :class="{ 'loader--split': splitting, 'loader--reduced': reduced }"
    role="status"
    aria-live="polite"
    :aria-label="`Loading ${progress}%`"
  >
    <!-- Top half of the wordmark (rides up on reveal) -->
    <div class="loader__panel loader__panel--top">
      <div class="loader__word-wrap">
        <span class="loader__word" data-text="Nerva">Nerva</span>
      </div>
    </div>

    <!-- Bottom half of the wordmark (rides down on reveal) -->
    <div class="loader__panel loader__panel--bottom">
      <div class="loader__word-wrap">
        <span class="loader__word" data-text="Nerva">Nerva</span>
      </div>
    </div>

    <!-- Progress readout -->
    <div class="loader__meta">
      <div class="loader__bar">
        <div class="loader__bar-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="loader__status">
        <span>&gt; loading assets</span>
        <span>{{ progress }}%</span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  progress: { type: Number, default: 0 },
  splitting: { type: Boolean, default: false },
  reduced: { type: Boolean, default: false },
})
</script>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 100;
  transition: opacity 0.45s ease;
}

.loader__panel {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: #0a0a0f;
  display: flex;
  justify-content: center;
  transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);
  will-change: transform;
}

/* Top panel is 1px taller so the two halves overlap instead of leaving a
   sub-pixel gap that would leak the site through the seam. */
.loader__panel--top {
  top: 0;
  height: calc(50% + 1px);
  align-items: flex-end;
}
.loader__panel--bottom {
  bottom: 0;
  height: 50%;
  align-items: flex-start;
}

/* The wrapper pins each copy to the seam and shows only its half; the word
   itself is left free to jitter for the glitch effect. */
.loader__word-wrap {
  will-change: transform;
}
.loader__panel--top .loader__word-wrap {
  transform: translateY(50%);
}
.loader__panel--bottom .loader__word-wrap {
  transform: translateY(-50%);
}

.loader__word {
  position: relative;
  display: inline-block;
  font-family: 'Anton', system-ui, sans-serif;
  font-size: clamp(4rem, 20vw, 15rem);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 32px rgba(59, 130, 246, 0.35));
  animation: loader-shake 3.2s infinite steps(1);
}

/* Two offset colour layers = chromatic-aberration / RGB-split glitch */
.loader__word::before,
.loader__word::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
}
.loader__word::before {
  z-index: 1;
  color: #22d3ee;
  text-shadow: -2px 0 rgba(34, 211, 238, 0.7);
  animation: loader-glitch-a 2.4s infinite linear alternate-reverse;
}
.loader__word::after {
  z-index: -1;
  color: #2563eb;
  text-shadow: 2px 0 rgba(37, 99, 235, 0.7);
  animation: loader-glitch-b 3.1s infinite linear alternate-reverse;
}

/* Periodic whole-word shake + skew (mostly still, quick bursts) */
@keyframes loader-shake {
  0%, 88%, 100% { transform: translate(0, 0) skewX(0deg); }
  90% { transform: translate(-3px, 0) skewX(-8deg); }
  92% { transform: translate(3px, 0) skewX(5deg); }
  94% { transform: translate(-2px, 0) skewX(-3deg); }
  96% { transform: translate(2px, 0) skewX(2deg); }
}

/* Cyan layer: horizontal slices jumping around */
@keyframes loader-glitch-a {
  0%   { clip-path: inset(18% 0 63% 0); transform: translateX(-2px); }
  15%  { clip-path: inset(78% 0 4% 0);  transform: translateX(3px); }
  30%  { clip-path: inset(43% 0 39% 0); transform: translateX(-4px); }
  45%  { clip-path: inset(8% 0 82% 0);  transform: translateX(2px); }
  60%  { clip-path: inset(55% 0 28% 0); transform: translateX(-3px); }
  75%  { clip-path: inset(30% 0 55% 0); transform: translateX(4px); }
  100% { clip-path: inset(68% 0 12% 0); transform: translateX(-2px); }
}

/* Blue layer: different rhythm so the two never line up */
@keyframes loader-glitch-b {
  0%   { clip-path: inset(70% 0 12% 0); transform: translateX(2px); }
  15%  { clip-path: inset(12% 0 74% 0); transform: translateX(-3px); }
  30%  { clip-path: inset(48% 0 30% 0); transform: translateX(4px); }
  45%  { clip-path: inset(85% 0 3% 0);  transform: translateX(-2px); }
  60%  { clip-path: inset(22% 0 62% 0); transform: translateX(3px); }
  75%  { clip-path: inset(60% 0 25% 0); transform: translateX(-4px); }
  100% { clip-path: inset(35% 0 48% 0); transform: translateX(2px); }
}

/* Cyan glow line along the seam */
.loader__panel--top::after,
.loader__panel--bottom::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.55), transparent);
}
.loader__panel--top::after {
  bottom: 0;
}
.loader__panel--bottom::before {
  top: 0;
}

.loader__meta {
  position: absolute;
  left: 50%;
  bottom: 9%;
  z-index: 2;
  width: min(320px, 72vw);
  transform: translateX(-50%);
  transition: opacity 0.3s ease;
}
.loader__bar {
  height: 2px;
  width: 100%;
  overflow: hidden;
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.2);
}
.loader__bar-fill {
  height: 100%;
  border-radius: 9999px;
  background: linear-gradient(90deg, #3b82f6, #22d3ee);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
  transition: width 0.3s ease;
}
.loader__status {
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #60a5fa;
}

/* ---- Reveal: split apart ---- */
.loader--split {
  pointer-events: none;
}
.loader--split:not(.loader--reduced) .loader__panel--top {
  transform: translateY(-100%);
}
.loader--split:not(.loader--reduced) .loader__panel--bottom {
  transform: translateY(100%);
}
.loader--split .loader__meta {
  opacity: 0;
}

/* Reduced motion: no glitch, no split — just a clean fade-out */
@media (prefers-reduced-motion: reduce) {
  .loader__word {
    animation: none;
  }
  .loader__word::before,
  .loader__word::after {
    display: none;
  }
}
.loader--reduced.loader--split {
  opacity: 0;
}
</style>
