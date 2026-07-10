<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Lenis from 'lenis';
import services from './components/services.vue';
import certificates from './components/certificates.vue';
import SectionHeading from './components/sectionHeading.vue';
import TheLoader from './components/TheLoader.vue';

import profileImg from './assets/profile_img.jpg';
import projectGaia from './assets/projectgaia.png';
import retasify from './assets/retasify.png';
import oldPortfolio from './assets/oldportfolio.png';
import crms from './assets/crms.png';
import techDocu from './assets/techdocu.png';
import tributePage from './assets/tributepage.png';
import gaiaRedesign from './assets/gaiaredesign.png';
import forensicLens from './assets/forensiclens.png';
import cellShop from './assets/cellshop.png';
import scanner1 from './assets/scanner_1.jpg';
import scanner2 from './assets/scanner_2.jpg';
import scanner3 from './assets/scanner_3.jpg';
import scanner4 from './assets/scanner_4.jpg';
import scanner5 from './assets/scanner_5.jpg';
import scanner6 from './assets/scanner_6.jpg';

// ---------- Preloader ----------
const loading = ref(true);
const splitting = ref(false);
const progress = ref(0);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Smooth scrolling (Lenis) ----------
let lenis = null;
let lenisRafId = null;

const lenisRaf = (time) => {
  lenis.raf(time);
  lenisRafId = requestAnimationFrame(lenisRaf);
};

// Intercept in-page anchor clicks so Lenis animates them (with navbar offset);
// without Lenis (reduced motion), native scroll-margin takes over.
const handleAnchorClick = (event) => {
  if (!lenis) return;
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;
  const hash = anchor.getAttribute('href');
  if (hash.length < 2 || !document.querySelector(hash)) return;
  event.preventDefault();
  lenis.scrollTo(hash, { offset: -72 });
};

const initSmoothScroll = () => {
  if (reducedMotion) return;
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenisRafId = requestAnimationFrame(lenisRaf);
  document.addEventListener('click', handleAnchorClick);
};

// ---------- Navbar ----------
const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'resume', label: 'resume' },
  { id: 'certificates', label: 'certs' },
  { id: 'projects', label: 'projects' },
  { id: 'services', label: 'services' },
  { id: 'contact', label: 'contact' },
];
const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('');

const handleScroll = () => {
  scrolled.value = window.scrollY > 24;
  let current = '';
  for (const link of navLinks) {
    const el = document.getElementById(link.id);
    if (el && el.getBoundingClientRect().top <= 120) current = link.id;
  }
  activeSection.value = current;
};

// ---------- Hero typing effect ----------
const roles = ['IT Specialist', 'Software Developer', 'UI/UX Designer', 'Security Enthusiast'];
const typedText = ref('');
let typingTimer = null;
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typeTick = () => {
  const word = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typedText.value = word.slice(0, charIndex);

  let delay = deleting ? 40 : 90;
  if (!deleting && charIndex === word.length) {
    deleting = true;
    delay = 2200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  typingTimer = setTimeout(typeTick, delay);
};

// ---------- Skills ----------
const skillGroups = [
  {
    title: 'Languages',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'Kotlin', icon: 'fa-solid fa-laptop-code' },
      { name: 'Lua', icon: 'fa-solid fa-laptop-code' },
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: 'fa-solid fa-layer-group',
    skills: [
      { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
      { name: 'TailwindCSS', icon: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Firebase', icon: 'fa-solid fa-fire' },
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'Vaadin', icon: 'fa-brands fa-vaadin' },
      { name: 'WordPress', icon: 'fa-brands fa-wordpress' },
      { name: 'Unity', icon: 'fa-brands fa-unity' },
      { name: 'rAthena', icon: 'fa-solid fa-server' },
    ],
  },
  {
    title: 'Platforms & Hardware',
    icon: 'fa-solid fa-microchip',
    skills: [
      { name: 'Linux', icon: 'fa-brands fa-linux' },
      { name: 'Android Studio', icon: 'fa-brands fa-android' },
      { name: 'Arduino', icon: 'fa-solid fa-microchip' },
      { name: 'Raspberry Pi', icon: 'fa-brands fa-raspberry-pi' },
    ],
  },
  {
    title: 'Design',
    icon: 'fa-solid fa-palette',
    skills: [
      { name: 'Figma', icon: 'fa-brands fa-figma' },
      { name: 'Krita', icon: 'fa-solid fa-pen-nib' },
    ],
  },
];

// ---------- Resume ----------
const education = [
  {
    title: 'Bachelor of Science in Information Technology',
    period: '2022 — 2025',
    org: 'University of the Cordilleras, Baguio City, Philippines',
    note: 'Relevant coursework: Web Development, Database Systems, Software Engineering',
  },
  {
    title: '2-Year Aviation Electronics Technology',
    period: '2014 — 2016',
    org: 'Acatech Aviation College, Baguio City, Philippines',
    note: 'Relevant coursework: Aircraft Maintenance, Aircraft Systems, Avionics Technology',
  },
];

const experience = [
  {
    title: 'Backend / Arduino Developer',
    period: 'Sep 2025 — Present',
    org: 'Inv8 Studios, Baguio City, Philippines',
    points: [
      'Develop and maintain backend logic and database integrations for client web and mobile applications',
      'Design and build Arduino/ESP32-based embedded prototypes, including an LD2410C mmWave bag scanner system',
      'Collaborate on code reviews, testing, and feature planning across ongoing studio projects',
    ],
  },
  {
    title: 'Lead Developer',
    period: 'May — Sep 2025',
    org: 'Retasify, Baguio City, Philippines',
    points: [
      'Developed the backend logic of the web application',
      'Participated in code reviews and team meetings',
      'Optimized application performance and implemented best coding practices',
    ],
  },
  {
    title: 'Software Development Intern',
    period: 'May — Aug 2024',
    org: 'University of the Cordilleras — Innovation and Technology Transfer Office, Baguio City, Philippines',
    points: [
      'Developed and maintained responsive Minimum Viable Products using modern JavaScript frameworks',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Gained experience with version control and agile methodologies',
    ],
  },
  {
    title: 'Technician II — Operations',
    period: '2018 — 2020',
    org: 'Collins Aerospace, Tanauan City, Philippines',
    points: [
      'Prepared panels for painting and galley builds',
      'Participated in manufacturing and quality control of aircraft galleys',
      'Assisted in the maintenance of aircraft galleys',
    ],
  },
];

// ---------- Projects ----------
const projects = [
  {
    title: 'Project: Gaia',
    image: projectGaia,
    link: 'https://nervachan.github.io/project_gaia1',
    description: 'Developed as a capstone project, this platform—built with TailwindCSS and Firebase—served as the predecessor to Retasify. Originally envisioned as both an inventory management system and a rental marketplace for the Maharlika Livelihood Complex, it laid the foundation for a sustainable fashion-sharing community.',
  },
  {
    title: 'Retasify',
    image: retasify,
    link: 'https://retasify.online',
    description: 'Built with TailwindCSS and powered by Firebase, this platform lets Baguio City share fashion sustainably by renting wardrobes, joining upcycling drives, and giving clothing a second life.',
  },
  {
    title: 'Portfolio Website',
    image: oldPortfolio,
    link: 'https://duanegt.github.io',
    description: 'An early portfolio project, designed as a static webpage to showcase my initial work and design approach.',
  },
  {
    title: 'Centralized Request Monitoring System',
    image: crms,
    link: 'https://nervachan.github.io/UC_CRMS',
    description: 'A capstone project for a client aiming for their masters degree, designed as a static webpage to showcase a proof of concept. (Default Login Credentials: user01@uc-crms.com / enter)',
  },
  {
    title: 'Technical Documentation Page',
    image: techDocu,
    link: 'https://nervachan.github.io/techdoc',
    description: 'A technical documentation page developed as a college assignment. Built with TailwindCSS and plain HTML, focusing on clean structure and readable design.',
  },
  {
    title: 'Tribute Page',
    image: tributePage,
    link: 'https://nervachan.github.io/tributePage',
    description: 'A heartfelt tribute page dedicated to my grandmother, crafted using HTML and CSS to create a clean and personal design.',
  },
  {
    title: 'Project: Gaia Landing Page Redesign',
    image: gaiaRedesign,
    link: 'https://nervachan.github.io/gaia-design/',
    description: 'A redesign of Project Gaia’s landing page, featuring a clean white-and-red theme. Built with TailwindCSS, focusing on modern layout and visual clarity.',
  },
  {
    title: 'Forensic Lens',
    image: forensicLens,
    link: 'https://inv8solutions.github.io/ForensicLensApp/',
    contain: true,
    description: 'A mobile app for Android developed for forensics students, designed to teach the principles and fundamentals of crime scene photography. Focused on accessibility and educational value.',
  },
  {
    title: 'BJMP-CAR Shop',
    image: cellShop,
    link: 'https://cellshopbcj.shop',
    description: 'A capstone project created in partnership with BJMP, this website serves as an online marketplace for showcasing and selling the handcrafted products of Persons Deprived of Liberty (PDLs). It supports their livelihood and rehabilitation by giving their crafts a wider reach.',
  },
  {
    title: 'MMWave Bag Scanner System',
    image: scanner1,
    modal: true,
    description: 'A compact prototype using an LD2410C mmWave sensor and an ESP32 to detect objects inside bags as a low-cost, portable alternative to traditional bag scanners. This project demonstrates the potential of compact radar-based scanning as a safer, portable, and more affordable option for security checkpoints.',
  },
];

// ---------- Scanner image modal ----------
const showModal = ref(false);
const currentImageIndex = ref(0);
const scannerImages = [scanner1, scanner2, scanner3, scanner4, scanner5, scanner6];

const openModal = (index = 0) => {
  currentImageIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % scannerImages.length;
};

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? scannerImages.length - 1 : currentImageIndex.value - 1;
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

const year = new Date().getFullYear();

// Wait for every rendered <img> to finish (or error), reporting progress.
const preloadImages = () =>
  new Promise((resolve) => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const total = imgs.length;
    if (!total) {
      progress.value = 100;
      resolve();
      return;
    }
    let loaded = 0;
    const bump = () => {
      loaded += 1;
      progress.value = Math.min(99, Math.round((loaded / total) * 100));
      if (loaded >= total) resolve();
    };
    imgs.forEach((img) => {
      if (img.complete) bump();
      else {
        img.addEventListener('load', bump, { once: true });
        img.addEventListener('error', bump, { once: true });
      }
    });
  });

const revealSite = () => {
  progress.value = 100;
  splitting.value = true;
  document.documentElement.classList.remove('is-loading');
  initSmoothScroll();
  // Remove the overlay once the split animation has finished.
  window.setTimeout(() => {
    loading.value = false;
  }, reducedMotion ? 500 : 950);
};

onMounted(async () => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  typeTick();

  // Lock scroll while the loader is up.
  document.documentElement.classList.add('is-loading');

  await nextTick();

  const tasks = [preloadImages()];
  if (document.fonts && document.fonts.ready) tasks.push(document.fonts.ready);
  // Keep the loader up for at least 5s (so the glitch intro plays), but never
  // hang past the safety cap even if an asset stalls.
  const minDelay = new Promise((r) => window.setTimeout(r, 5000));
  const safetyCap = new Promise((r) => window.setTimeout(r, 15000));

  await minDelay;
  await Promise.race([Promise.all(tasks), safetyCap]);
  revealSite();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('scroll', handleScroll);
  clearTimeout(typingTimer);
  document.removeEventListener('click', handleAnchorClick);
  if (lenisRafId) cancelAnimationFrame(lenisRafId);
  if (lenis) lenis.destroy();
});
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-night text-slate-300">

    <!-- PRELOADER -->
    <TheLoader v-if="loading" :progress="progress" :splitting="splitting" :reduced="reducedMotion" />

    <!-- NAVBAR -->
    <header
      class="fixed inset-x-0 top-0 z-40 transition-colors duration-300"
      :class="scrolled || menuOpen
        ? 'border-b border-blue-500/20 bg-night/90 backdrop-blur'
        : 'border-b border-transparent bg-transparent'"
    >
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" class="font-mono text-lg font-semibold text-white">
          <span class="text-blue-400">~/</span>duane<span class="animate-blink text-cyan-400">_</span>
        </a>

        <!-- Desktop links -->
        <ul class="hidden items-center gap-6 md:flex">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="font-mono text-sm transition-colors"
              :class="activeSection === link.id ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'"
            >
              <span class="text-blue-500/60">/</span>{{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile toggle -->
        <button
          class="text-xl text-slate-300 transition-colors hover:text-blue-400 md:hidden"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen"
        >
          <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </nav>

      <!-- Mobile menu -->
      <div v-if="menuOpen" class="border-t border-blue-500/20 bg-night/95 backdrop-blur md:hidden">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click="menuOpen = false"
          class="block px-6 py-3 font-mono text-sm transition-colors"
          :class="activeSection === link.id ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'"
        >
          <span class="text-blue-500/60">/</span>{{ link.label }}
        </a>
      </div>
    </header>

    <!-- HERO -->
    <section id="hero" class="bg-grid relative flex min-h-screen items-end overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/25 via-blue-900/10 to-transparent"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_55%)]"></div>

      <div class="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-28">
        <p class="mb-6 font-mono text-sm text-blue-400 sm:text-base">
          <span class="text-slate-500">$</span> whoami
        </p>
        <h1 class="font-display uppercase leading-[0.95]">
          <span class="block text-[clamp(3rem,11vw,8rem)] text-slate-100">Hello World,</span>
          <span class="block bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 bg-clip-text text-[clamp(3rem,11vw,8rem)] text-transparent">I'm Duane</span>
        </h1>
        <p class="mt-8 font-mono text-lg text-slate-300 sm:text-2xl">
          <span class="text-blue-400">&gt;</span> {{ typedText }}<span class="animate-blink text-cyan-400">▊</span>
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            class="w-full rounded-md bg-blue-600 px-8 py-3 text-center font-semibold text-white shadow-glow-sm transition hover:bg-blue-500 hover:shadow-glow sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#about"
            class="w-full rounded-md border border-blue-500/40 px-8 py-3 text-center font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 hover:shadow-glow-sm sm:w-auto"
          >
            About Me
          </a>
          <a
            href="#contact"
            class="w-full rounded-md border border-blue-500/40 px-8 py-3 text-center font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 hover:shadow-glow-sm sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a href="#about" class="absolute bottom-8 right-8 hidden text-blue-400/70 transition-colors hover:text-cyan-300 sm:block" aria-label="Scroll to About section">
        <i class="fa-solid fa-chevron-down animate-bounce text-xl"></i>
      </a>
    </section>

    <!-- ABOUT -->
    <section id="about" class="scroll-mt-24 border-t border-blue-500/10 py-20 sm:py-24">
      <div class="mx-auto max-w-5xl px-6">
        <SectionHeading v-reveal tag="about" title="About Me" />
        <div class="flex flex-col items-center gap-10 md:flex-row md:gap-14">
          <img
            v-reveal="{ type: 'left' }"
            :src="profileImg"
            alt="Portrait of Duane Tauli"
            class="h-48 w-48 shrink-0 rounded-full object-cover shadow-glow ring-2 ring-blue-500/50 md:h-64 md:w-64"
          />
          <p v-reveal="{ type: 'right', delay: 120 }" class="text-center text-base leading-relaxed text-slate-300 md:text-left md:text-lg">
            I am a developer with a strong focus on backend development and database management, ensuring the reliability, scalability, and security of the systems I work on. Alongside backend expertise, I also design intuitive and user-friendly UI/UX experiences, bridging functionality with aesthetics. My problem-solving mindset is influenced by my passion for gaming, particularly MMORPGs and FPS, where strategy and adaptability are key — qualities I bring into every project I work on.
          </p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="scroll-mt-24 border-t border-blue-500/10 bg-panel/30 py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <SectionHeading v-reveal tag="skills" title="Technical Skills" />
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(group, index) in skillGroups"
            :key="group.title"
            v-reveal="{ type: 'up', delay: (index % 2) * 120 }"
            class="rounded-lg border border-blue-500/20 bg-panel/60 p-6 transition hover:border-blue-400/40 hover:shadow-glow-sm"
          >
            <h3 class="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-blue-400">
              <i :class="group.icon"></i>
              {{ group.title }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill.name"
                class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:bg-blue-500/15 hover:text-white hover:shadow-glow-sm"
              >
                <i :class="skill.icon" class="text-blue-400"></i>
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESUME -->
    <section id="resume" class="scroll-mt-24 border-t border-blue-500/10 py-20 sm:py-24">
      <div class="mx-auto max-w-5xl px-6">
        <SectionHeading v-reveal tag="resume" title="Resume" />

        <!-- Education -->
        <div class="mb-14">
          <h3 v-reveal class="mb-6 flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl">
            <i class="fa-solid fa-graduation-cap text-blue-400"></i>
            Education
          </h3>
          <div class="space-y-6">
            <div
              v-for="(item, index) in education"
              :key="item.title"
              v-reveal="{ type: 'left', delay: index * 120 }"
              class="rounded-lg border border-blue-500/20 border-l-2 border-l-blue-500/70 bg-panel/60 p-6 transition hover:shadow-glow-sm"
            >
              <div class="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h4 class="text-lg font-semibold text-white">{{ item.title }}</h4>
                <span class="shrink-0 font-mono text-xs text-cyan-400">{{ item.period }}</span>
              </div>
              <p class="text-sm font-medium text-blue-300/90">{{ item.org }}</p>
              <p class="mt-2 text-sm text-slate-400">{{ item.note }}</p>
            </div>
          </div>
        </div>

        <!-- Work Experience -->
        <div>
          <h3 v-reveal class="mb-6 flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl">
            <i class="fa-solid fa-briefcase text-blue-400"></i>
            Work Experience
          </h3>
          <div class="space-y-6">
            <div
              v-for="(item, index) in experience"
              :key="item.title"
              v-reveal="{ type: 'right', delay: index * 120 }"
              class="rounded-lg border border-blue-500/20 border-l-2 border-l-blue-500/70 bg-panel/60 p-6 transition hover:shadow-glow-sm"
            >
              <div class="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h4 class="text-lg font-semibold text-white">{{ item.title }}</h4>
                <span class="shrink-0 font-mono text-xs text-cyan-400">{{ item.period }}</span>
              </div>
              <p class="text-sm font-medium text-blue-300/90">{{ item.org }}</p>
              <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-blue-500">
                <li v-for="point in item.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <certificates />

    <!-- PROJECTS -->
    <section id="projects" class="scroll-mt-24 border-t border-blue-500/10 py-20 sm:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <SectionHeading v-reveal tag="projects" title="My Projects" />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            v-reveal="{ type: 'blur', delay: (index % 3) * 90 }"
            class="group flex flex-col overflow-hidden rounded-lg border border-blue-500/20 bg-panel/60 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-glow"
          >
            <div
              class="h-48 shrink-0 overflow-hidden border-b border-blue-500/10 bg-night/60"
              :class="{ 'cursor-pointer': project.modal }"
              @click="project.modal && openModal(0)"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full transition duration-500 group-hover:scale-105"
                :class="project.contain ? 'object-contain' : 'object-cover'"
              />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
                {{ project.title }}
              </h3>
              <p class="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{{ project.description }}</p>
              <button
                v-if="project.modal"
                @click="openModal(0)"
                class="self-start font-mono text-sm text-blue-400 transition-colors hover:text-cyan-300"
              >
                View All Designs →
              </button>
              <a
                v-else
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="self-start font-mono text-sm text-blue-400 transition-colors hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Scanner image modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      @click="closeModal"
    >
      <div class="relative w-full max-w-4xl" @click.stop>
        <button
          @click="closeModal"
          class="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-night/80 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
          aria-label="Close gallery"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="relative overflow-hidden rounded-lg border border-blue-500/30 bg-night shadow-glow">
          <img
            :src="scannerImages[currentImageIndex]"
            :alt="`Scanner design ${currentImageIndex + 1}`"
            class="h-auto max-h-[75vh] w-full object-contain"
          />

          <button
            @click="prevImage"
            class="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-night/70 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="Previous image"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            @click="nextImage"
            class="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-night/70 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="Next image"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div class="mt-4 flex justify-center gap-2">
          <button
            v-for="(image, index) in scannerImages"
            :key="index"
            @click="currentImageIndex = index"
            :aria-label="`Go to image ${index + 1}`"
            :class="[
              'h-2.5 w-2.5 rounded-full transition-colors',
              currentImageIndex === index ? 'bg-cyan-400 shadow-glow-sm' : 'bg-slate-700 hover:bg-slate-500',
            ]"
          ></button>
        </div>

        <p class="mt-3 text-center font-mono text-xs text-slate-400">
          [ {{ currentImageIndex + 1 }} / {{ scannerImages.length }} ]
        </p>
      </div>
    </div>

    <services />

    <!-- CONTACT -->
    <section id="contact" class="scroll-mt-24 border-t border-blue-500/10 py-20 sm:py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading v-reveal tag="contact" title="Get In Touch" />
        <p v-reveal="{ type: 'up', delay: 100 }" class="mx-auto max-w-xl text-slate-400">
          Have a project in mind, need help with a capstone, or just want to talk tech?
          My inbox is always open — I'll get back to you as soon as I can.
        </p>
        <div v-reveal="{ type: 'up', delay: 200 }" class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <!-- TODO: replace with your real email address -->
          <a
            href="https://www.facebook.com/goldroom01"
            class="w-full rounded-md bg-blue-600 px-8 py-3 font-semibold text-white shadow-glow-sm transition hover:bg-blue-500 hover:shadow-glow sm:w-auto"
          >
            <i class="fa-solid fa-envelope mr-2"></i>Say Hello
          </a>
          <a
            href="https://github.com/nervachan"
            target="_blank"
            rel="noopener"
            class="w-full rounded-md border border-blue-500/40 px-8 py-3 font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 hover:shadow-glow-sm sm:w-auto"
          >
            <i class="fa-brands fa-github mr-2"></i>GitHub
          </a>
        </div>
        <p class="mt-8 font-mono text-xs text-slate-600">// response time: usually within 24 hours</p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-blue-500/20 py-8">
      <p class="text-center font-mono text-xs text-slate-500">
        <span class="text-blue-500">&gt;</span> © {{ year }} NervaChan — built with Vue + TailwindCSS
      </p>
    </footer>

  </div>
</template>
