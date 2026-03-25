<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-18">
    <!-- Background gradient & grid -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0d1426] to-[#0a0e1a]"></div>
      <!-- Radial glow -->
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none"></div>
      <!-- Subtle grid -->
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left: copy -->
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          Wind Energy Diagnostics · AI-Powered
        </div>

        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          Smarter Wind<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
            Turbine Insights
          </span>
        </h1>

        <p class="text-lg lg:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
          ALIDA combines portable laser sensing with physics-informed AI to diagnose underperforming wind turbines — fast, non-intrusive, and decision-ready.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-400/50 hover:-translate-y-0.5"
          >
            Request a Demo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#technology"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/15 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            How It Works
          </a>
        </div>

        <!-- Stats row -->
        <div class="mt-14 flex flex-wrap gap-8">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <span class="text-3xl font-bold text-white">{{ stat.value }}</span>
            <span class="text-sm text-slate-400 mt-1">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right: visual -->
      <div class="relative hidden lg:flex items-center justify-center">
        <div class="relative w-full max-w-lg">
          <!-- Main card -->
          <div class="rounded-2xl bg-gradient-to-br from-[#111a35]/80 to-[#0d1426]/80 border border-white/10 p-8 backdrop-blur-sm shadow-2xl">
            <!-- Waveform visual -->
            <div class="flex items-end gap-1 h-24 mb-6">
              <div
                v-for="(bar, i) in waveformBars"
                :key="i"
                class="flex-1 rounded-t bg-gradient-to-t from-teal-600 to-teal-400 opacity-80"
                :style="{ height: bar + '%' }"
              ></div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-xs text-slate-500 uppercase tracking-wider">Blade Pitch Deviation</p>
                <p class="text-2xl font-bold text-white mt-1">2.3°</p>
              </div>
              <div class="px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-semibold">
                Action Required
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="metric in metrics"
                :key="metric.label"
                class="rounded-lg bg-white/5 p-3"
              >
                <p class="text-xs text-slate-500 mb-1">{{ metric.label }}</p>
                <p :class="['text-sm font-semibold', metric.color]">{{ metric.value }}</p>
              </div>
            </div>
          </div>
          <!-- Floating badge -->
          <div class="absolute -top-4 -right-4 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 p-4 shadow-xl shadow-teal-500/30">
            <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <!-- Bottom floating card -->
          <div class="absolute -bottom-6 -left-6 rounded-xl bg-[#111a35] border border-white/10 p-4 shadow-xl">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-slate-400">Energy Recovery</p>
                <p class="text-sm font-bold text-green-400">+4.2% AEP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: 'No downtime', label: 'Non-intrusive measurements' },
  { value: '48h', label: 'Average deployment time' },
  { value: 'AI-driven', label: 'Physics-informed analytics' },
]

const waveformBars = Array.from({ length: 32 }, (_, i) => {
  const center = Math.abs(i - 16) / 16
  return Math.round((1 - center * 0.6) * 60 + Math.random() * 40)
})

const metrics = [
  { label: 'Rotor Imbalance', value: 'Detected', color: 'text-amber-400' },
  { label: 'Yaw Error', value: '1.8°', color: 'text-yellow-400' },
  { label: 'SCADA Status', value: 'Normal', color: 'text-green-400' },
]
</script>
