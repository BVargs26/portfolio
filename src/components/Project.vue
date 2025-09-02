<template>
    <section id="projects" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">Here are some of my recent works</p>
        </div>
        
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.id" 
               :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'" 
               class="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img :src="project.image" class="w-full h-48 object-cover" :alt="project.title">
            <div class="p-6">
              <h5 class="text-xl font-bold mb-2">{{ project.title }}</h5>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                      class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded text-sm">{{ tech }}</span>
              </div>
              <div class="flex gap-3">
                <a :href="project.demo" target="_blank" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">Live Demo</a>
                <a :href="project.github" target="_blank" class="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
const props = defineProps({
    isDark: {
        type: Boolean,
        required: true,
    },
    projects: {
        type: Array,
        required: true,
    }
})
</script>