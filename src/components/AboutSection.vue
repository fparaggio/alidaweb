<template>
  <section id="about" class="py-24 bg-[#0a0e1a] relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section label -->
      <div class="flex items-center gap-4 mb-6">
        <div class="h-px w-12 bg-teal-500"></div>
        <span class="text-teal-400 text-sm font-semibold uppercase tracking-wider">About ALIDA</span>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Advanced Laser Intelligence for <span class="text-teal-400">Dynamic Assets</span>
          </h2>
          <p class="text-slate-400 text-lg leading-relaxed mb-6">
            ALIDA is a portable hardware and analytics platform that helps wind farm operators and utilities quickly diagnose underperforming wind turbines.
          </p>
          <p class="text-slate-400 leading-relaxed mb-6">
            It combines a non-intrusive field measurement device with an AI-based software platform to detect issues such as blade pitch misalignment, rotor imbalance and other hidden efficiency losses — without stopping turbines or installing permanent sensors.
          </p>
          <p class="text-slate-400 leading-relaxed">
            ALIDA is designed for O&amp;M teams and asset managers who need fast, reliable answers when turbines underperform but standard SCADA data is inconclusive.
          </p>
        </div>

        <!-- Feature pills -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-xl bg-[#111a35]/60 border border-white/8 p-6 hover:border-teal-500/30 transition-colors group"
          >
            <div class="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center mb-4 group-hover:bg-teal-500/25 transition-colors">
              <component :is="feature.icon" class="w-5 h-5 text-teal-400" />
            </div>
            <h3 class="text-white font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const icon = (paths) => ({
  render() {
    return h('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      class: this.$attrs.class,
    }, paths.map(d => h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d })))
  }
})

const features = [
  {
    title: 'Portable Hardware',
    desc: 'Field-deployable laser sensing device — set up in hours, not days.',
    icon: icon(['M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3']),
  },
  {
    title: 'AI Analytics Platform',
    desc: 'Physics-informed machine learning converts raw signals into actionable insights.',
    icon: icon(['M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z']),
  },
  {
    title: 'Zero Downtime',
    desc: 'Measurements during normal operation — no turbine stops required.',
    icon: icon(['M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z']),
  },
  {
    title: 'Decision-Ready Reports',
    desc: 'Standardized reports with prioritized corrective actions for your O&M team.',
    icon: icon(['M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z']),
  },
]
</script>
