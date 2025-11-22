<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-white">Certificates</h2>
      <p class="text-center text-gray-300 mb-12">Professional certifications and achievements</p>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Certificate Card -->
        <div 
          v-for="(certificate, index) in certificates" 
          :key="certificate.id"
          class="bg-gray-800 border border-sky-400 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
        >
          <div class="w-full h-48 bg-gray-700 flex items-center justify-center cursor-pointer relative" @click="openModal(index)">
            <img
              :src="certificate.image"
              class="w-full h-full object-cover"
              @click.stop
              :alt="certificate.name"
            />
            
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <svg class="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
          </div>
          
          <div class="p-6 flex flex-col justify-between flex-1">
            <h3 class="text-xl font-semibold mb-2 text-white">{{ certificate.name }}</h3>
            <p class="text-white text-sm mb-4">{{ certificate.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sky-400 text-sm font-medium">Date Issued: {{ certificate.dateIssued }}</span>
              <div class="flex gap-2">
                <button @click="openModal(index)" class="text-sky-400 font-medium hover:underline">Preview →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificate Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" @click="closeModal">
      <div class="relative max-w-5xl w-full mx-4" @click.stop>
        <!-- Close button -->
        <button @click="closeModal" class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 z-10">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Image container -->
        <div class="relative bg-gray-900 rounded-lg overflow-hidden">
          <img
            :src="certificates[currentImageIndex].image"
            class="w-full h-auto max-h-[80vh] object-contain"
            :alt="certificates[currentImageIndex].name"
          />
          
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
        
        <!-- Image counter -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
          {{ currentImageIndex + 1 }} / {{ certificates.length }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Import certificate images
import gdgimage1 from '../assets/gdgimage1.png';
import gdgimage from '../assets/gdgimage.png';
import impactweekcert from '../assets/impactweekcert.png';
const showModal = ref(false);
const currentImageIndex = ref(0);

// Certificate data
const certificates = [
  {
    id: 0,
    image: gdgimage1,
    name: 'Google Developers Group DevFest Baguio 2025',
    description: 'Awarded for attending GDG DevFest Baguio 2025, a community-driven developer event featuring sessions on Google technologies, hands-on workshops, and networking with industry professionals.',
    dateIssued: '2025'
  },
  {
    id: 1,
    image: gdgimage,
    name: 'Google Developers Group Volunteer Staff Member',
    description: 'Awarded for serving as a volunteer staff member at GDG DevFest Baguio 2025, contributing to event operations, assisting participants and speakers, and helping ensure a smooth and successful community-driven developer conference.',
    dateIssued: '2025'
  },
  {
    id: 2,
    image: impactweekcert,
    name: 'Impact Week 2025',
    description: 'Awarded for serving as a volunteer staff member at Impact Week 2025, contributing to event operations, assisting participants and speakers, and helping ensure a smooth and successful conference.',
    dateIssued: '2025'
  }
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

<style scoped>
.certificate-card {
  transition: all 0.3s ease;
}

.certificate-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
</style>
