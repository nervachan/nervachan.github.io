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
      <h2 class="text-sky-400 text-2xl mb-4">What I Offer (Capstone Project Systems)</h2>
      <ul class="list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>End-to-end system development (web or mobile) tailored to academic capstone requirements.</li>
        <li>Clean, functional UI/UX design using modern frameworks.</li>
        <li>Integration of core features like authentication, dashboards, data management, and reporting.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Students</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Save time with a structured, working prototype.</li>
        <li>Ensure your project meets academic standards.</li>
        <li>Get support with documentation, diagrams, and presentation prep.</li>
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
        <h3 class="text-sky-400 text-lg pt-8"> Embedded Systems:</h3>
        <li><strong>Platforms:</strong> Arduino, Raspberry Pi</li>
        <li><strong>Languages:</strong> C/C++, Python</li>
        <li><strong>Frameworks:</strong>PyTorch, TensorFlow, OpenCV</li>
        <h3 class="text-sky-400 text-lg pt-8">Other Options:</h3>
        <li>Custom stacks based on project needs</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Deliverables</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>A working prototype/system</li>
        <li>Source code and documentation</li>
        <li>Optional walkthrough/demo session</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>