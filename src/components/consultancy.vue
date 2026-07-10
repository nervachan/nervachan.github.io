<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Startup & Project Consultancy)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Define clear and actionable tech strategies that align with your business and market needs.</li>
      <li>Guidance on selecting scalable strategies and the most suitable tech stacks for your specific project.</li>
      <li>Analyze existing development processes to identify bottlenecks and implement efficiency methodologies.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Startups</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Informed technology decisions</li>
      <li>Accelerated product development</li>
      <li>Risk mitigation and scalability planning</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Students (Capstone/Thesis/Projects)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Receive tailored roadmaps to structure your capstone project's technical foundation in line with academic requirements.</li>
      <li>Get expert advice on stack selection to strengthen your thesis' technical methodology.</li>
      <li>Enhanced project workflow by refining development processes for better time management.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Tech Stack Options</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Cloud Infrastructure:</strong> Firebase, Google Cloud</li>
      <li><strong class="text-white">Fullstack Development Tools:</strong> Vue, TailwindCSS, Vite, Vaadin, Node.js</li>
      <li><strong class="text-white">Mobile Development:</strong> Android Studio</li>
      <li><strong class="text-white">Database Solutions:</strong> Firestore, MySQL</li>
      <li><strong class="text-white">Embedded Systems:</strong> Arduino, Raspberry Pi</li>
      <li><strong class="text-white">Design Tools:</strong> Figma, Adobe Photoshop, Krita</li>
      <li><strong class="text-white">Operating Systems:</strong> Linux</li>
      <li><strong class="text-white">Content Management Systems:</strong> WordPress</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Comprehensive technology strategy report</li>
      <li>Optimized workflow blueprints</li>
      <li>Technical advisory sessions</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>
