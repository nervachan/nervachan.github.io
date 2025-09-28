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
      <h2 class="text-sky-400 text-2xl mb-4">What I Offer (Website & Mobile Mockups)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Transformation of your startup idea into polished, interactive wireframes or prototypes in 1-2 weeks.</li>
        <li>Develop intuitive layouts, user flows, and visual elements to test usability early accross devices.</li>
        <li>Build modular mockups with reusable components that scale easily with your project.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Startups</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Visualize and Validate ideas quickly.</li>
        <li>Mockups identify design flaws early, reducing revisions by up to 50% and saving development expenses.</li>
        <li>Professional visuals demonstrate user experience and branding to impress investors or partners.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Students(Capstone/Thesis/Projects)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Enhance Capstone Project Presentations by making ideas visually compelling for faculty and staff.</li>
        <li>Create interactive prototypes to illustrate UI/UX methodologies for your thesis providing evidence of your design research and analysis</li>
        <li>Develop scalable mockups for academic projects to demonstrate iterative design processes.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Tech Stack Options</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li><strong>Design Tools:</strong> Figma</li>
        <li><strong>Supporting Tech:</strong> Image manipulation software like Krita or Adobe Photoshop</li>
        
        
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Deliverables</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>High-Fidelity Mockups with Key Screens</li>
        <li>Source Files and Assets</li>
        <li>Documentation and Feedback Support</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>