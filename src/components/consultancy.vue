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
      <h2 class="text-sky-400 text-2xl mb-4">What I Offer (Startup & Project Consultancy)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Define clear and actionable tech strategies that aligns with your business and market needs.</li>
        <li>Guidance on selecting scalable strategies and the most suitable tech stacks for your specific project.</li>
        <li>Analyze existing development processes to identify bottlenecks and implement efficiency methodologies.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Startups</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Informed Technology Decisions</li>
        <li>Accelerated Product Development</li>
        <li>Risk Mitigation and Scalability Planning</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Benefits for Students (Capstone/Thesis/Projects)</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Recieve tailored roadmaps to structure your capstone project's technical foundation in line with academic requirements.</li>
        <li>Get expert advice on stack selection to strengthen your thesis' technical methodology.</li>
        <li>Enhanced Project Workflow by refining development process for better time management.</li>
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Tech Stack Options</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li><strong>Cloud Infrastructure:</strong> Firebase, Google Cloud</li>
        <li><strong>Fullstack development tools:</strong> Vue, TailwindCSS, Vite, Vaadin, Node.js</li>
        <li><strong>Mobile Development:</strong> Android Studio</li>
        <li><strong>Database Solutions:</strong> Firestore, MySQL</li>
        <li><strong>Embedded Systems:</strong> Arduino, Raspberry Pi</li>
        <li><strong>Design Tools:</strong> Figma, Adobe Photoshop, Krita</li>
        <li><strong>Operating Systems:</strong> Linux</li>
        <li><strong>Content Management Systems:</strong> Wordpress</li>
        
      </ul>

      <h2 class="text-sky-400 text-2xl pt-12 mb-4">Deliverables</h2>
      <ul class=" list-outside text-white mb-6 space-y-2 pl-8 [text-indent:-1rem]">
        <li>Comprehensive Technology Strategy Report</li>
        <li>Optimized Workflow Blueprints</li>
        <li>Technical Advisory Sessions</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
</script>