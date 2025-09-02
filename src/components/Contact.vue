<template>
    <section id="contact" :class="isDark ? 'bg-gray-800' : 'bg-gray-50'" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">Let's work together on your next project</p>
        </div>
        
        <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input v-model="form.name" type="text" 
                   :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'"
                   class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input v-model="form.email" type="email" 
                   :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'"
                   class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium mb-2">Subject</label>
            <input v-model="form.subject" type="text" 
                   :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'"
                   class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium mb-2">Message</label>
            <textarea v-model="form.message" rows="5" 
                      :class="isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'"
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required></textarea>
          </div>
          <div class="md:col-span-2 text-center">
            <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
          </div>
        </form>
      </div>
    </section>
</template>
<script setup>
const props = defineProps({
    isDark: {
        type: Boolean,
        required: true,
    },
    form: {
        type: Object,
        required: true,
    },
    submitForm: {
        type: Function,
        required: true,
    }
})
</script>