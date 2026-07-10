<template>
  <section id="certificates" class="scroll-mt-24 border-t border-blue-500/10 bg-panel/30 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <SectionHeading v-reveal tag="certifications" title="Certificates" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(certificate, index) in certificates"
          :key="certificate.id"
          v-reveal="{ type: 'zoom', delay: (index % 3) * 100 }"
          class="group flex flex-col overflow-hidden rounded-lg border border-blue-500/20 bg-panel/60 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-glow"
        >
          <div
            class="relative h-48 shrink-0 cursor-pointer overflow-hidden border-b border-blue-500/10 bg-night/60"
            @click="openModal(index)"
          >
            <img
              :src="certificate.image"
              :alt="certificate.name"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-night/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg class="h-10 w-10 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
          </div>

          <div class="flex flex-1 flex-col p-6">
            <h3 class="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
              {{ certificate.name }}
            </h3>
            <p class="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{{ certificate.description }}</p>
            <div class="flex items-center justify-between gap-2">
              <span class="font-mono text-xs text-cyan-400">Issued: {{ certificate.dateIssued }}</span>
              <button
                @click="openModal(index)"
                class="font-mono text-sm text-blue-400 transition-colors hover:text-cyan-300"
              >
                Preview →
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Certificate modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      @click="closeModal"
    >
      <div class="relative w-full max-w-5xl" @click.stop>
        <button
          @click="closeModal"
          class="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-night/80 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
          aria-label="Close preview"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="relative overflow-hidden rounded-lg border border-blue-500/30 bg-night shadow-glow">
          <img
            :src="certificates[currentImageIndex].image"
            :alt="certificates[currentImageIndex].name"
            class="h-auto max-h-[75vh] w-full object-contain"
          />

          <button
            @click="prevImage"
            class="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-night/70 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="Previous certificate"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            @click="nextImage"
            class="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-night/70 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="Next certificate"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <p class="mt-3 text-center font-mono text-xs text-slate-400">
          [ {{ currentImageIndex + 1 }} / {{ certificates.length }} ]
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SectionHeading from './sectionHeading.vue';

import gdgimage1 from '../assets/gdgimage1.png';
import gdgimage from '../assets/gdgimage.png';
import impactweekcert from '../assets/impactweekcert.png';

const showModal = ref(false);
const currentImageIndex = ref(0);

const certificates = [
  {
    id: 0,
    image: gdgimage1,
    name: 'Google Developers Group DevFest Baguio 2025',
    description: 'Awarded for attending GDG DevFest Baguio 2025, a community-driven developer event featuring sessions on Google technologies, hands-on workshops, and networking with industry professionals.',
    dateIssued: '2025',
  },
  {
    id: 1,
    image: gdgimage,
    name: 'Google Developers Group Volunteer Staff Member',
    description: 'Awarded for serving as a volunteer staff member at GDG DevFest Baguio 2025, contributing to event operations, assisting participants and speakers, and helping ensure a smooth and successful community-driven developer conference.',
    dateIssued: '2025',
  },
  {
    id: 2,
    image: impactweekcert,
    name: 'Impact Week 2025',
    description: 'Awarded for serving as a volunteer staff member at Impact Week 2025, contributing to event operations, assisting participants and speakers, and helping ensure a smooth and successful conference.',
    dateIssued: '2025',
  },
];

const openModal = (index = 0) => {
  currentImageIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % certificates.length;
};

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? certificates.length - 1 : currentImageIndex.value - 1;
};

const handleKeydown = (event) => {
  if (!showModal.value) return;

  switch (event.key) {
    case 'Escape':
      closeModal();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
    case 'ArrowRight':
      nextImage();
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
