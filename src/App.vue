<template>
  <div class="min-h-screen bg-[#0a0e1a] text-slate-200">
    <TheNavbar />
    <HeroSection />
    <AboutSection />
    <TechnologySection />
    <ServicesSection />
    <ValuePropositionSection />
    <ContactSection />
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechnologySection from './components/TechnologySection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ValuePropositionSection from './components/ValuePropositionSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>
