<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    @click="$emit('close')"
  >
    <div
      class="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-blue-500/30 bg-panel p-6 shadow-glow sm:p-8"
      @click.stop
    >
      <button
        @click="$emit('close')"
        class="absolute right-4 top-4 text-xl text-slate-400 transition-colors hover:text-cyan-300"
        aria-label="Close"
      >
        ✕
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({ show: Boolean })
defineEmits(['close'])
</script>
