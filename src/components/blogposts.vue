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
      <h2 class="text-sky-400 text-2xl mb-4">What I Offer (Blogs, Portfolios, and Landing Pages)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Custom Blog Website Development</li>
        <li>Professional Portfolio Sites</li>
        <li>High Impact Landing Pages</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Startups</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Establish Brand Presence Quickly</li>
        <li>Cost-Effective Content Management</li>
        <li>Enhanced User Engagement</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Students (Capstone/Thesis/Projects)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Showcase Capstone Projects Effectively</li>
        <li>Support Thesis Documentation Online</li>
        <li>Strengthen Project Portfolios for Opportunities</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Tech Stack Options</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li><strong>Frontend:</strong> HTML5, TailwindCSS, Vue.js for interactivity</li>
        <li><strong>Backend and CMS:</strong> WordPress, Node.js</li>
        <li><strong>Database and Hosting:</strong> Firestore, SQL, GoDaddy</li>
        <li><strong>Design Tools:</strong> Figma, Adobe Photoshop, Krita</li>
        
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Deliverables</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Fully Functional Website</li>
        <li>Source Code and Assets</li>
        <li>Documentation and Support</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>