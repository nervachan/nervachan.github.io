<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Capstone Project Systems)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>End-to-end system development (web or mobile) tailored to academic capstone requirements.</li>
      <li>Clean, functional UI/UX design using modern frameworks.</li>
      <li>Integration of core features like authentication, dashboards, data management, and reporting.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Students</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Save time with a structured, working prototype.</li>
      <li>Ensure your project meets academic standards.</li>
      <li>Get support with documentation, diagrams, and presentation prep.</li>
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
    <h3 class="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">Embedded Systems</h3>
    <ul class="mb-6 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Platforms:</strong> Arduino, Raspberry Pi</li>
      <li><strong class="text-white">Languages:</strong> C/C++, Python</li>
      <li><strong class="text-white">Frameworks:</strong> PyTorch, TensorFlow, OpenCV</li>
    </ul>
    <h3 class="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">Other Options</h3>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Custom stacks based on project needs</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>A working prototype/system</li>
      <li>Source code and documentation</li>
      <li>Optional walkthrough/demo session</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>
