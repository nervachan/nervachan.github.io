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
      <h2 class="text-sky-400 text-2xl mb-4">What I Offer (Startup MVP Development)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Rapid development of functional MVPs (web or mobile) for startups.</li>
        <li>Core features implementation to help test and validate your idea.</li>
        <li>Scalable and modular design so your project can grow as your startup does.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Startups</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Quickly test your product with real users.</li>
        <li>Save time and costs by focusing only on essential features.</li>
        <li>Attract investors or early adopters with a working prototype.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Tech Stack Options</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <h3 class="text-sky-400 text-lg mb-2">For Web:</h3>
        <li><strong>Frontend:</strong> TailwindCSS, Vue, React, Vaadin, or plain HTML/CSS</li>
        <li><strong>Backend:</strong> Firebase, Node.js, or custom APIs</li>
        <li><strong>Database:</strong> Firestore, MySQL, or alternatives depending on requirements</li>
        <li><strong>Content Management Systems:</strong> Wordpress</li>
        <h3 class="text-sky-400 text-lg pt-8">For Mobile:</h3>
        <li><strong>Frameworks:</strong> Android Studio </li>
        <li><strong>Database:</strong> Firestore </li>
        <h3 class="text-sky-400 text-lg pt-8">Other Options:</h3>
        <li>Custom stacks based on project needs</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Deliverables</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Minimum Viable Product (MVP) with key features</li>
        <li>Source code and deployment-ready files</li>
        <li>Documentation and optional pitch/demo support</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>