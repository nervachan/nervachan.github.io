<script setup>

</script>

<template>
  <div>
    <div class="bg-gray-800 text-white">

<!-- HERO SECTION -->
<section id="hero" class="relative h-screen w-full flex flex-col items-center justify-center text-center bg-gray-800 text-white px-6 bg-cover bg-center bg-no-repeat">
    <h1 class="text-8xl font-bold mb-4 text-white">Hello World,</h1>
    <h1 class="text-5xl md:text-7xl font-bold mb-4 text-white"> I'm Duane</h1>
    <p class="text-xl md:text-2xl mb-8 text-white">Gamer, Developer, Designer</p>
    <a href="#projects"
       class="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
        View My Work
    </a>
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
<section id="skills" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 max-w-5xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div class="flex flex-wrap justify-center gap-6">
            <!-- Skill badges -->
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-html5 text-orange-600 text-2xl"></i> HTML5
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-css3-alt text-orange-600 text-2xl"></i> CSS3
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-js text-orange-600 text-2xl"></i> JavaScript
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-vuejs text-orange-600 text-2xl"></i> Vue.js
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-node-js text-orange-600 text-2xl"></i> Node.js
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-figma text-orange-600 text-2xl"></i> Figma
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-git-alt text-orange-600 text-2xl"></i> Git
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-google text-orange-600 text-2xl"></i> Firebase
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-python text-orange-600 text-2xl"></i> Python
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-linux text-orange-600 text-2xl"></i> Linux
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-android text-orange-600 text-2xl"></i> Android Studio
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-wordpress text-orange-600 text-2xl"></i> Wordpress
            </span>
            <span class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md text-white border border-sky-400">
                <i class="fab fa-vaadin text-orange-600 text-2xl"></i> Vaadin
            </span>
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
                        <span class="text-sm text-sky-400 font-medium">May 2025 - Present</span>
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
        </div> 
    </div>
</section>

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
