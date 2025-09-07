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
                        <h4 class="text-xl font-semibold text-white">Web Development Intern</h4>
                        <span class="text-sm text-sky-400 font-medium">2021 - 2022</span>
                    </div>
                    <p class="text-white font-medium">Startup Name, City, Country</p>
                    <ul class="mt-3 space-y-2 text-white list-disc list-inside">
                        <li>Assisted in developing and testing web applications</li>
                        <li>Participated in code reviews and team meetings</li>
                        <li>Gained experience with version control and agile methodologies</li>
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
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src="https://via.placeholder.com/600x400" alt="Project 1" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-white">E-commerce Platform</h3>
                    <p class="text-white text-sm mb-4">A full-stack online store built with React & Node.js.</p>
                    <a href="#" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src="https://via.placeholder.com/600x400" alt="Project 2" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-white">Task-Tracking App</h3>
                    <p class="text-white text-sm mb-4">A productivity tool with real-time sync using Firebase.</p>
                    <a href="#" class="text-sky-400 font-medium hover:underline">View Project →</a>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src="https://via.placeholder.com/600x400" alt="Project 3" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-white">Portfolio Website</h3>
                    <p class="text-white text-sm mb-4">A clean, responsive showcase built with Tailwind CSS.</p>
                    <a href="#" class="text-sky-400 font-medium hover:underline">View Project →</a>
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
