<template>
  <section id="services" class="scroll-mt-24 border-t border-blue-500/10 bg-panel/30 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <SectionHeading v-reveal tag="services" title="Services that I Offer" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(service, index) in servicesList"
          :key="service.key"
          v-reveal="{ type: 'up', delay: (index % 3) * 100 }"
          class="group flex flex-col overflow-hidden rounded-lg border border-blue-500/20 bg-panel/60 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-glow"
        >
          <div class="h-48 shrink-0 overflow-hidden border-b border-blue-500/10 bg-night/60">
            <img
              :src="service.image"
              :alt="service.title"
              class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
              {{ service.title }}
            </h3>
            <p class="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{{ service.description }}</p>
            <button
              @click="openModal(service.key)"
              class="self-start font-mono text-sm text-blue-400 transition-colors hover:text-cyan-300"
            >
              Learn More →
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>

  <CapstoneModal :show="activeModal === 'capstone'" @close="closeModal" />
  <startupMvp :show="activeModal === 'startup'" @close="closeModal" />
  <WebMockup :show="activeModal === 'webmockup'" @close="closeModal" />
  <Consultancy :show="activeModal === 'consultancy'" @close="closeModal" />
  <Gamedev :show="activeModal === 'gamedev'" @close="closeModal" />
  <Blogposts :show="activeModal === 'blogposts'" @close="closeModal" />
</template>

<script setup>
import { ref } from 'vue'
import SectionHeading from './sectionHeading.vue'
import CapstoneModal from './capstoneModal.vue'
import startupMvp from './startupMvp.vue'
import WebMockup from './webMockup.vue'
import Consultancy from './consultancy.vue'
import Gamedev from './gamedev.vue'
import Blogposts from './blogposts.vue'

import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
import service5 from '../assets/service5.png'
import service6 from '../assets/service6.png'

const servicesList = [
  {
    key: 'capstone',
    image: service1,
    title: 'Capstone Project Systems',
    description: 'I design and develop complete systems tailored for academic capstone projects, ensuring robust functionality, proper documentation, and presentation-ready quality.',
  },
  {
    key: 'startup',
    image: service2,
    title: 'Startup MVP Development',
    description: 'I build minimum viable products (MVPs) that help startups validate ideas quickly, focusing on core features, user experience, and scalable, cost-efficient prototypes.',
  },
  {
    key: 'webmockup',
    image: service3,
    title: 'Website & App Mockups',
    description: 'I create clean, user-friendly mockups and UI concepts for web and mobile apps, providing a solid visual foundation for development and user testing.',
  },
  {
    key: 'consultancy',
    image: service4,
    title: 'Startup & Project Consultancy',
    description: 'I offer guidance on system design, tech stack choices, and project direction to help students and founders align their goals with practical solutions.',
  },
  {
    key: 'gamedev',
    image: service5,
    title: 'Game Development',
    description: 'I develop engaging 2D games and interactive experiences, from concept to prototype, blending creativity with technical execution.',
  },
  {
    key: 'blogposts',
    image: service6,
    title: 'Websites for Blogs, Portfolios & Landing Pages',
    description: 'I design and build modern, responsive websites for personal blogs, professional portfolios, and startup landing pages, tailored to highlight your brand or project.',
  },
]

const activeModal = ref(null)

function openModal(name) {
  activeModal.value = name
}

function closeModal() {
  activeModal.value = null
}
</script>
