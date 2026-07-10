<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Game Development)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Quickly build playable game prototypes and Minimum Viable Products to test core mechanics and validate concepts.</li>
      <li>Develop games/game servers that perform seamlessly across web or desktop platforms.</li>
      <li>Optimized game performance, asset pipelines, and backend solutions.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Game Owners</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Transform ideas or features into playable games</li>
      <li>Cost-efficient development pathways</li>
      <li>Better community appeal</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Students (Capstone/Thesis/Projects)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Elevate project game demos.</li>
      <li>Master industry-standard and legacy game engines and emulators.</li>
      <li>Build a strong portfolio with playable game modules or levels.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Tech Stack Options</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Game Engines:</strong> Unity, Godot</li>
      <li><strong class="text-white">Game Engine Emulators:</strong> rAthena</li>
      <li><strong class="text-white">Languages:</strong> Kotlin, Lua, C++</li>
      <li><strong class="text-white">Design Tools:</strong> Figma, Adobe Photoshop, Krita</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Playable game prototype/MVP</li>
      <li>Clean source code & assets</li>
      <li>Technical design document</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>
