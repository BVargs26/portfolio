<template>
    <section id="about" :class="isDark ? 'bg-gray-800' : 'bg-gray-50'" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-4xl font-bold mb-6">About Me</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">{{ about.description }}</p>
            <p class="text-gray-600 dark:text-gray-400 mb-6">{{ about.details }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="interest in about.interests" :key="interest" 
                    class="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                {{ interest }}
              </span>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-6">Skills</h3>
            <div class="space-y-4">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span class="text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                       :style="{ width: skill.level + '%' }"></div>
                </div>
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
    about: {
        type: Object,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    }
})
</script>