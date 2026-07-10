<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Website & Mobile Mockups)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Transformation of your startup idea into polished, interactive wireframes or prototypes in 1-2 weeks.</li>
      <li>Develop intuitive layouts, user flows, and visual elements to test usability early across devices.</li>
      <li>Build modular mockups with reusable components that scale easily with your project.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Startups</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Visualize and validate ideas quickly.</li>
      <li>Mockups identify design flaws early, reducing revisions by up to 50% and saving development expenses.</li>
      <li>Professional visuals demonstrate user experience and branding to impress investors or partners.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Students (Capstone/Thesis/Projects)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Enhance capstone project presentations by making ideas visually compelling for faculty and staff.</li>
      <li>Create interactive prototypes to illustrate UI/UX methodologies for your thesis, providing evidence of your design research and analysis.</li>
      <li>Develop scalable mockups for academic projects to demonstrate iterative design processes.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Tech Stack Options</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Design Tools:</strong> Figma</li>
      <li><strong class="text-white">Supporting Tech:</strong> Image manipulation software like Krita or Adobe Photoshop</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>High-fidelity mockups with key screens</li>
      <li>Source files and assets</li>
      <li>Documentation and feedback support</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>
