<template>
    <div :class="isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'" class="min-h-screen">
        <Navigation :is-dark :toggle-theme />

        <Profile />

        <About :is-dark :about :skills />

        <Project :is-dark :projects />

        <Contact :is-dark :form :submit-form />

        <Footer :is-dark />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

import Navigation from '../components/Navigation.vue'
import Profile from '../components/Profile.vue'
import About from '../components/About.vue'
import Project from '../components/Project.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const about = reactive({
  description: "I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.",
  details: "I specialize in modern web technologies and love turning complex problems into simple, beautiful designs. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  interests: ['Vue.js', 'Node.js', 'UI/UX Design', 'Open Source', 'Photography']
})

const skills = reactive([
  { name: 'Vue.js', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'CSS/SCSS', level: 88 },
  { name: 'MongoDB', level: 80 },
  { name: 'UI/UX Design', level: 75 }
])

const projects = reactive([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Vue.js and Node.js, featuring real-time inventory management.',
    image: '#',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    github: 'https://github.com/BVargs26'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: '#',
    technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    demo: '#',
    github: 'https://github.com/BVargs26'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
    image: '#',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    demo: '#',
    github: 'https://github.com/BVargs26'
  }
])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  client_ip: '',
})

const submitForm = async () => {
  
  const { data, error } = await supabase
  .from('contact_messages')
  .insert(form)
  .select()
  
  alert('Thank you for your message! I\'ll get back to you soon.')
  
  Object.keys(form).forEach(key => {
    if (key !== 'client_ip') {
      form[key] = ''
    }
  })
}

const contactMessages = ref([]);

const getContactMessages = async () => { 
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    
  contactMessages.value = data

  if (error) {
    console.log('supabase error: ', error)
  }
}

const getPublicIP = async () => {
  try {
    const res = await axios.get("/ipify?format=json");
    form.client_ip = res.data.ip;
  } catch (error) {
    console.error("Error fetching IP:", error);
  }
}

const initializeTheme = () => {

  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
  
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  initializeTheme();
  getPublicIP();
  // getContactMessages();
})
</script>

<style>
.min-h-screen {
  min-height: 100vh;
}
</style>
