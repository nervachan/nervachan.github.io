<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Blogs, Portfolios, and Landing Pages)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Custom blog website development</li>
      <li>Professional portfolio sites</li>
      <li>High-impact landing pages</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Startups</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Establish brand presence quickly</li>
      <li>Cost-effective content management</li>
      <li>Enhanced user engagement</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Students (Capstone/Thesis/Projects)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Showcase capstone projects effectively</li>
      <li>Support thesis documentation online</li>
      <li>Strengthen project portfolios for opportunities</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Tech Stack Options</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Frontend:</strong> HTML5, TailwindCSS, Vue.js for interactivity</li>
      <li><strong class="text-white">Backend and CMS:</strong> WordPress, Node.js</li>
      <li><strong class="text-white">Database and Hosting:</strong> Firestore, SQL, GoDaddy</li>
      <li><strong class="text-white">Design Tools:</strong> Figma, Adobe Photoshop, Krita</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Fully functional website</li>
      <li>Source code and assets</li>
      <li>Documentation and support</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>
