<template>
  <footer class="bg-[#05070f] border-t border-white/8 py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-4 gap-10 mb-10">
        <!-- Brand column -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span class="text-lg font-bold text-white">ALIDA</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
            Advanced Laser Intelligence for Dynamic Assets. Portable wind turbine diagnostics powered by physics-informed AI.
          </p>
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-1 rounded-full bg-teal-500/15 border border-teal-500/25 text-teal-400 text-xs font-semibold">Already Available</span>
            <span class="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">Italy · Europe</span>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h5 class="text-white font-semibold text-sm mb-4">Platform</h5>
          <ul class="space-y-2.5">
            <li v-for="link in platformLinks" :key="link.label">
              <a :href="link.href" class="text-slate-400 hover:text-teal-400 text-sm transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h5 class="text-white font-semibold text-sm mb-4">Contact</h5>
          <ul class="space-y-2.5">
            <li>
              <a href="mailto:francesco.paraggio@proton.me" class="text-slate-400 hover:text-teal-400 text-sm transition-colors break-all">
                francesco.paraggio@proton.me
              </a>
            </li>
            <li>
              <a href="tel:+393933614321" class="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                +39 393 361 4321
              </a>
            </li>
            <li class="pt-1">
              <span class="text-slate-500 text-xs">Francesco Paraggio · Founder</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-slate-500 text-xs">
          © {{ new Date().getFullYear() }} ALIDA. All rights reserved. Advanced Laser Intelligence for Dynamic Assets.
        </p>
        <p class="text-slate-600 text-xs">
          Italy · Generation · Asset Optimisation
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const platformLinks = [
  { label: 'Technology', href: '#technology' },
  { label: 'Services', href: '#services' },
  { label: 'Why ALIDA', href: '#why-alida' },
  { label: 'Request Demo', href: '#contact' },
]
</script>
