<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import services from './components/services.vue';
import certificates from './components/certificates.vue';

// Import scanner images
import scanner1 from './assets/scanner_1.jpg';
import scanner2 from './assets/scanner_2.jpg';
import scanner3 from './assets/scanner_3.jpg';
import scanner4 from './assets/scanner_4.jpg';
import scanner5 from './assets/scanner_5.jpg';
import scanner6 from './assets/scanner_6.jpg';

const showModal = ref(false);
const currentImageIndex = ref(0);
const scannerImages = [
  scanner1,
  scanner2,
  scanner3,
  scanner4,
  scanner5,
  scanner6
];

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

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div>
    <div class="bg-gray-800 text-white">

<!-- HERO SECTION -->
<section id="hero" class="relative h-screen w-full flex flex-col items-center justify-center text-center text-white px-6 bg-cover bg-center bg-no-repeat" style="background-image: url('./assets/bg-hero.png');">
    <h1 class="text-8xl font-bold mb-4 text-white">Hello World,</h1>
    <h1 class="text-5xl md:text-7xl font-bold mb-4 text-white"> I'm Duane</h1>
    <p class="text-xl md:text-2xl mb-8 text-white">Gamer, Software Developer, Designer</p>
    <div class="flex flex-col md:flex-row gap-4">
    <a href="#about"
       class="bg-white text-indigo-600 font-semibold px-8 py-3 mt-6 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
        View About Me
    </a>
    
    <a href="#projects"
       class="bg-white text-indigo-600 font-semibold px-8 py-3 mt-6 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
        View My Work
    </a>
    <a href="#services"
       class="bg-white text-indigo-600 font-semibold px-8 py-3 mt-6 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
        View My Services
    </a>
    </div>
</section>


<!-- ABOUT ME SECTION -->
<section id="about" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <!-- Profile Image -->
        <img src="./assets/profile_img.jpg" alt="Profile" class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl">
        <!-- Text -->
        <div class="text-center md:text-left">
            <h2 class="text-4xl font-bold mb-4 text-sky-400">About Me</h2>
            <p class="text-lg text-white leading-relaxed">
                I am a developer with a strong focus on backend development and database management, ensuring the reliability, scalability, and security of the systems I work on. Alongside backend expertise, I also design intuitive and user-friendly UI/UX experiences, bridging functionality with aesthetics. My problem-solving mindset is influenced by my passion for gaming, particularly MMORPGs and FPS, where strategy and adaptability are key — qualities I bring into every project I work on.
            </p>
        </div>
    </div>
</section>

<!-- SKILLS SECTION -->
<section id="skills" class="py-20 bg-gray-900">
  <div class="container mx-auto px-6 max-w-5xl">
    <h2 class="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      <!-- Skill card -->
      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-html5 text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">HTML5</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
         
        </div>
      </div>
      
      <!-- Repeat for other skills -->
      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-css3-alt text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">CSS3</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-js text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">JavaScript</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-wand-magic-sparkles text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">TailwindCSS</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-google text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Firebase</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-git-alt text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Git</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-vuejs text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Vue.js</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-node-js text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Node.js</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-figma text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Figma</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-python text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Python</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-linux text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Linux</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-android text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Android Studio</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-vaadin text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Vaadin</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fab fa-wordpress text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Wordpress</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-pen-nib text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Krita</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-laptop-code text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Lua</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-laptop-code text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">rAthena</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-microchip text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Arduino</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-microchip text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Raspberry Pi</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-brands fa-unity text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Unity</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

      <div class="bg-gray-800 border border-sky-400 p-4 rounded-xl shadow-md">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-laptop-code text-orange-600 text-2xl"></i>
          <span class="text-white font-semibold">Kotlin</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          
        </div>
      </div>

    </div>
  </div>
</section>

<!-- RESUME SECTION -->
<section id="resume" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 max-w-5xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Resume</h2>
        
        <!-- Education -->
        <div class="mb-12">
            <h3 class="text-2xl font-semibold mb-6 text-white flex items-center">
                <i class="fas fa-graduation-cap mr-2 text-sky-400"></i>
                Education
            </h3>
            <div class="space-y-6">
                <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-sky-400">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 class="text-xl font-semibold text-white">Bachelor of Science in Information Technology</h4>
                        <span class="text-sm text-sky-400 font-medium">2022 - 2025</span>
                    </div>
                    <p class="text-white">University of the Cordilleras, Baguio City, Philippines</p>
                    <p class="mt-2 text-white">Relevant coursework: Web Development, Database Systems, Software Engineering</p>
                </div>
                <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-sky-400">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 class="text-xl font-semibold text-white">2-Year Aviation Electronics Technology</h4>
                        <span class="text-sm text-sky-400 font-medium">2014 - 2016</span>
                    </div>
                    <p class="text-white">Acatech Aviation College, Baguio City, Philippines</p>
                    <p class="mt-2 text-white">Relevant coursework: Aircraft Maintenance, Aircraft Systems, Avionics Technology</p>
                </div>
            </div>
        </div>

        <!-- Work Experience -->
        <div>
            <h3 class="text-2xl font-semibold mb-6 text-white flex items-center">
                <i class="fas fa-briefcase mr-2 text-sky-400"></i>
                Work Experience
            </h3>
            <div class="space-y-6">
                <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-sky-400">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 class="text-xl font-semibold text-white">Lead Developer</h4>
                        <span class="text-sm text-sky-400 font-medium">May - September 2025</span>
                    </div>
                    <p class="text-white font-medium">Retasify, Baguio City, Philippines</p>
                    <ul class="mt-3 space-y-2 text-white list-disc list-inside">
                        <li>Developed the Backend Logic of the Web Application</li>
                        <li>Participated in code reviews and team meetings</li>
                        <li>Optimized application performance and implemented best coding practices</li>
                    </ul>
                </div>
                <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-sky-400">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 class="text-xl font-semibold text-white">Software Development Intern</h4>
                        <span class="text-sm text-sky-400 font-medium">May - August 2024</span>
                    </div>
                    <p class="text-white font-medium">University of the Cordilleras - Innovation and Technology Transfer Office, Baguio City, Philippines</p>
                    <ul class="mt-3 space-y-2 text-white list-disc list-inside">
                        <li>Developed and maintained responsive Minimum Viable Products using modern JavaScript frameworks</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                        <li>Gained experience with version control and agile methodologies</li>
                    </ul>
                </div>

                <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-sky-400">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 class="text-xl font-semibold text-white">Technician II - Operations</h4>
                        <span class="text-sm text-sky-400 font-medium">2018 - 2020</span>
                    </div>
                    <p class="text-white font-medium">Collins Aerospace, Tanauan City, Philippines</p>
                    <ul class="mt-3 space-y-2 text-white list-disc list-inside">
                        <li>Prepared panels for painting and galley builds</li>
                        <li>Participated in manufacturing and quality control of aircraft galleys</li>
                        <li>Assisted in the maintenance of aircraft galleys</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<certificates />

<!-- PROJECTS/WORKS SECTION -->
<section id="projects" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 max-w-5xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        <!-- Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/projectgaia.png" alt="Project 1" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Project: Gaia</h3>
                    <p class="text-white text-sm mb-4">Developed as a capstone project, this platform—built with TailwindCSS and Firebase—served as the predecessor to Retasify. Originally envisioned as both an inventory management system and a rental marketplace for the Maharlika Livelihood Complex, it laid the foundation for a sustainable fashion-sharing community.</p>
                    <a href="https://nervachan.github.io/project_gaia1" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/retasify.png" alt="Project 2" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Retasify</h3>
                    <p class="text-white text-sm mb-4">Built with TailwindCSS and powered by Firebase, this platform lets Baguio City share fashion sustainably by renting wardrobes, joining upcycling drives, and giving clothing a second life.</p>
                    <a href="https://retasify.online" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/oldportfolio.png" alt="Project 3" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Portfolio Website</h3>
                    <p class="text-white text-sm mb-4">An early portfolio project, designed as a static webpage to showcase my initial work and design approach.</p>
                    <a href="https://duanegt.github.io" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

             <!-- Project 4 -->
             <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/crms.png" alt="Project 4" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Centralized Request Monitoring System</h3>
                    <p class="text-white text-sm mb-4">A capstone project for a client aiming for their masters degree, designed as a static webpage to showcase a proof of concept. (Default Login Credentials: user01@uc-crms.com / enter)</p>
                    <a href="https://nervachan.github.io/UC_CRMS" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 5 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/techdocu.png" alt="Project 5" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Technical Documentation Page</h3>
                    <p class="text-white text-sm mb-4">A technical documentation page developed as a college assignment. Built with TailwindCSS and plain HTML, focusing on clean structure and readable design.</p>
                    <a href="https://nervachan.github.io/techdoc" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 6 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/tributepage.png" alt="Project 6" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Tribute Page</h3>
                    <p class="text-white text-sm mb-4">A heartfelt tribute page dedicated to my grandmother, crafted using HTML and CSS to create a clean and personal design.</p>
                    <a href="https://nervachan.github.io/tributePage" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>
           
            <!-- Project 7-->
             <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/gaiaredesign.png" alt="Project 7" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Project:Gaia Landing Page Redesign</h3>
                    <p class="text-white text-sm mb-4">A redesign of Project Gaia’s landing page, featuring a clean white-and-red theme. Built with TailwindCSS, focusing on modern layout and visual clarity</p>
                    <a href="https://nervachan.github.io/gaia-design/" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 8-->
             <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/forensiclens.png" alt="Project 8" class="w-full h-48 object-center object-contain">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">Forensic Lens</h3>
                    <p class="text-white text-sm mb-4">A mobile app for Android developed for forensics students, designed to teach the principles and fundamentals of crime scene photography. Focused on accessibility and educational value.</p>
                    <a href="https://inv8solutions.github.io/ForensicLensApp/" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 9-->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img src="./assets/cellshop.png" alt="Project 1" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">BJMP-CAR Shop</h3>
                    <p class="text-white text-sm mb-4">A capstone project created in partnership with BJMP, this website serves as an online marketplace for showcasing and selling the handcrafted products of Persons Deprived of Liberty (PDLs). It supports their livelihood and rehabilitation by giving their crafts a wider reach.</p>
                    <a href="https://cellshopbcj.shop" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 10-->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <img :src="scanner1" alt="Scanner Project" class="w-full h-48 object-cover cursor-pointer" @click="openModal(0)">
                <div class="p-6 flex flex-col justify-between flex-1">
                    <h3 class="text-xl font-semibold mb-2 text-white">MMWave Bag Scanner System</h3>
                    <p class="text-white text-sm mb-4">A compact prototype using an LD2410C mmWave sensor and an ESP32 to detect objects inside bags as a low-cost, portable alternative to traditional bag scanners. This project demonstrates the potential of compact radar-based scanning as a safer, portable, and more affordable option for security checkpoints.</p>
                    <button @click="openModal(0)" class="text-sky-400 font-medium hover:underline">View All Designs →</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Scanner Modal -->
<div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" @click="closeModal">
    <div class="relative max-w-4xl w-full mx-4" @click.stop>
        <!-- Close button -->
        <button @click="closeModal" class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 z-10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        
        <!-- Image container -->
        <div class="relative bg-gray-900 rounded-lg overflow-hidden">
            <img :src="scannerImages[currentImageIndex]" :alt="`Scanner ${currentImageIndex + 1}`" class="w-full h-auto max-h-[80vh] object-contain">
            
            <!-- Navigation buttons -->
            <button @click="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            
            <button @click="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        
        <!-- Image indicators -->
        <div class="flex justify-center mt-4 space-x-2">
            <button 
                v-for="(image, index) in scannerImages" 
                :key="index"
                @click="currentImageIndex = index"
                :class="[
                    'w-3 h-3 rounded-full transition-colors',
                    currentImageIndex === index ? 'bg-sky-400' : 'bg-gray-600 hover:bg-gray-500'
                ]"
            ></button>
        </div>
        
        <!-- Image counter -->
        <div class="text-center mt-2 text-white">
            {{ currentImageIndex + 1 }} / {{ scannerImages.length }}
        </div>
    </div>
</div>


<services />

<!-- FOOTER -->
<footer class="py-8 bg-gray-800 text-white text-center">
    <p>&copy; <span id="year"></span> NervaChan. All rights reserved.</p>
</footer>

</div>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
