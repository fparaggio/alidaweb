<template>
  <section id="technology" class="py-24 bg-[#0d1426] relative overflow-hidden">
    <!-- Decorative glow -->
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
          How It Works
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
          The ALIDA Platform
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          A seamless workflow from field measurement to actionable maintenance decisions — deployable in days, not months.
        </p>
      </div>

      <!-- Process steps -->
      <div class="relative">
        <!-- Connector line -->
        <div class="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>

        <div class="grid lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative flex flex-col items-center text-center group"
          >
            <!-- Step number circle -->
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow z-10">
              {{ index + 1 }}
            </div>
            <div class="rounded-xl bg-[#111a35]/60 border border-white/8 p-6 hover:border-teal-500/30 transition-colors w-full h-full">
              <div class="w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">{{ step.emoji }}</span>
              </div>
              <h3 class="text-white font-semibold text-lg mb-3">{{ step.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology pillars -->
      <div class="mt-20 grid lg:grid-cols-3 gap-6">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          :class="pillar.bg"
        >
          <div class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl" :class="pillar.glow"></div>
          <div :class="['text-4xl font-black mb-2', pillar.accent]">{{ pillar.stat }}</div>
          <h3 class="text-white font-semibold text-lg mb-3">{{ pillar.title }}</h3>
          <p class="text-sm leading-relaxed" :class="pillar.textColor">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    emoji: '📡',
    title: 'Deploy Field Device',
    desc: 'Mount the portable ALIDA laser sensor near the turbine. Setup takes hours, requires no turbine shutdown and no permanent hardware installation.',
  },
  {
    emoji: '🌀',
    title: 'Collect Operational Data',
    desc: 'The device captures high-resolution optical and vibrational signals during normal turbine operation — blades turning, full load conditions.',
  },
  {
    emoji: '🧠',
    title: 'AI Analysis',
    desc: 'Physics-informed AI models process the raw signals to detect blade pitch misalignment, rotor imbalance, yaw errors and other hidden performance losses.',
  },
  {
    emoji: '📋',
    title: 'Actionable Report',
    desc: 'Receive a standardized diagnostic report with prioritized corrective actions, confidence scores and estimated energy yield impact.',
  },
]

const pillars = [
  {
    stat: 'Laser',
    title: 'Optical Sensing Technology',
    desc: 'High-precision laser measurements capture sub-millimeter blade deformations and rotational dynamics that standard SCADA systems cannot detect.',
    bg: 'bg-gradient-to-br from-[#111a35] to-[#0d1a30] border border-teal-500/20',
    accent: 'text-teal-400',
    glow: 'bg-teal-400',
    textColor: 'text-slate-400',
  },
  {
    stat: 'Physics AI',
    title: 'Physics-Informed Intelligence',
    desc: 'Our models embed wind turbine aerodynamics and structural mechanics, enabling reliable diagnosis from short measurement windows with minimal data.',
    bg: 'bg-gradient-to-br from-[#111a35] to-[#0d1426] border border-blue-500/20',
    accent: 'text-blue-400',
    glow: 'bg-blue-400',
    textColor: 'text-slate-400',
  },
  {
    stat: '48h',
    title: 'Rapid Deployment Cycle',
    desc: 'From site arrival to diagnostic report in under 48 hours. Standardized procedures and short training cycles enable independent O&M team usage.',
    bg: 'bg-gradient-to-br from-[#111a35] to-[#0d1426] border border-violet-500/20',
    accent: 'text-violet-400',
    glow: 'bg-violet-400',
    textColor: 'text-slate-400',
  },
]
</script>
