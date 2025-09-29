<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
     @click="$emit('close')"
  >
    <div class="bg-gray-900 rounded-lg shadow-lg max-w-5xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
      <!-- Close button -->
      <button 
        @click="$emit('close')" 
        class="absolute top-3 right-3 text-white hover:text-sky-400 text-xl"
      >
        ✕
      </button>

      <!-- Modal content -->
      <h2 class="text-sky-400 text-2xl mb-4">What I Offer (Game Development)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Quickly build playable game prototypes and Minimum Viable Products to test core mechanics and validate concepts.</li>
        <li>Develop games/game servers that perform seamlessly across web or desktop platforms.</li>
        <li>Optimized game performance, asset pipelines, and backend solutions.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Game Owners</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Transform Ideas or Features into Playable Games</li>
        <li>Cost-efficient Development Pathways</li>
        <li>Better community Appeal</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Students (Capstone/Thesis/Projects)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Elevate Project Game Demos.</li>
        <li>Master Industry Standard and Legacy Game Engines and Emulators.</li>
        <li>Building a Strong Portfolio by playable game modules or levels.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Tech Stack Options</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li><strong>Game Engines:</strong> Unity, Godot</li>
        <li><strong>Game Engine Emulators:</strong> rAthena</li>
        <li><strong>Languages:</strong> Kotlin, Lua, C++</li>
        <li><strong>Design Tools:</strong> Figma, Adobe Photoshop, Krita</li>
        
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Deliverables</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Playable Game Prototype/ MVP</li>
        <li>Clean Source Code & Assets</li>
        <li>Technical Design Document</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>