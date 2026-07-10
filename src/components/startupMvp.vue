<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Startup MVP Development)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Rapid development of functional MVPs (web or mobile) for startups.</li>
      <li>Core features implementation to help test and validate your idea.</li>
      <li>Scalable and modular design so your project can grow as your startup does.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Startups</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Quickly test your product with real users.</li>
      <li>Save time and costs by focusing only on essential features.</li>
      <li>Attract investors or early adopters with a working prototype.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Tech Stack Options</h2>
    <h3 class="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">For Web</h3>
    <ul class="mb-6 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Frontend:</strong> TailwindCSS, Vue, React, Vaadin, or plain HTML/CSS</li>
      <li><strong class="text-white">Backend:</strong> Firebase, Node.js, or custom APIs</li>
      <li><strong class="text-white">Database:</strong> Firestore, MySQL, or alternatives depending on requirements</li>
      <li><strong class="text-white">Content Management Systems:</strong> WordPress</li>
    </ul>
    <h3 class="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">For Mobile</h3>
    <ul class="mb-6 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Frameworks:</strong> Android Studio</li>
      <li><strong class="text-white">Database:</strong> Firestore</li>
    </ul>
    <h3 class="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">Other Options</h3>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Custom stacks based on project needs</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Minimum Viable Product (MVP) with key features</li>
      <li>Source code and deployment-ready files</li>
      <li>Documentation and optional pitch/demo support</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>
