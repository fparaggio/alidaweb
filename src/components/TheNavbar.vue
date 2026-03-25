<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-[#0a0e1a]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/20'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 py-4">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-white tracking-wide">ALIDA</span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200"
          >{{ link.label }}</a>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            class="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40"
          >Request Demo</a>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-slate-300 hover:text-white"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden bg-[#0d1426]/98 backdrop-blur-md border-t border-white/10">
      <div class="px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-300 hover:text-teal-400 py-2 transition-colors"
          @click="mobileOpen = false"
        >{{ link.label }}</a>
        <a
          href="#contact"
          class="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold text-center transition-colors mt-2"
          @click="mobileOpen = false"
        >Request Demo</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Technology', href: '#technology' },
  { label: 'Services', href: '#services' },
  { label: 'Why ALIDA', href: '#why-alida' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
