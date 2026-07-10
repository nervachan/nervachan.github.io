<template>
  <div class="mb-12 text-center">
    <p class="font-mono text-sm tracking-widest text-cyan-400/80">// {{ tag }}</p>
    <h2 class="mt-2 text-3xl font-bold text-white sm:text-4xl">{{ title }}</h2>
    <div class="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
  </div>
</template>

<script setup>
defineProps({
  tag: String,
  title: String,
})
</script>
