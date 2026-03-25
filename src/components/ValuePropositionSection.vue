<template>
  <section id="why-alida" class="py-24 bg-[#0d1426] relative overflow-hidden">
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/6 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
          Why ALIDA
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
          The Competitive Advantage
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          ALIDA is not just a measurement tool — it's a complete intelligence platform built around speed, simplicity and scalable fleet operations.
        </p>
      </div>

      <!-- Comparison table -->
      <div class="rounded-2xl overflow-hidden border border-white/8 mb-16">
        <div class="grid grid-cols-3 bg-[#111a35]/80">
          <div class="p-6 border-r border-white/8">
            <p class="text-slate-500 text-sm font-semibold uppercase tracking-wider">Feature</p>
          </div>
          <div class="p-6 border-r border-white/8 flex items-center gap-3">
            <div class="w-7 h-7 rounded bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span class="font-bold text-teal-400">ALIDA</span>
          </div>
          <div class="p-6">
            <p class="text-slate-500 text-sm font-semibold">Traditional Solutions</p>
          </div>
        </div>

        <div
          v-for="(row, i) in comparison"
          :key="row.feature"
          class="grid grid-cols-3"
          :class="i % 2 === 0 ? 'bg-[#0d1426]' : 'bg-[#111a35]/40'"
        >
          <div class="p-5 border-r border-white/5">
            <p class="text-slate-300 text-sm font-medium">{{ row.feature }}</p>
          </div>
          <div class="p-5 border-r border-white/5">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                <svg class="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span class="text-teal-300 text-sm">{{ row.alida }}</span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0">
                <svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span class="text-slate-400 text-sm">{{ row.traditional }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Outcome cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="outcome in outcomes"
          :key="outcome.title"
          class="rounded-xl bg-[#111a35]/60 border border-white/8 p-6 text-center hover:border-teal-500/30 transition-colors"
        >
          <div class="text-3xl mb-3">{{ outcome.emoji }}</div>
          <div class="text-2xl font-bold text-teal-400 mb-1">{{ outcome.metric }}</div>
          <h4 class="text-white font-semibold mb-2 text-sm">{{ outcome.title }}</h4>
          <p class="text-slate-400 text-xs leading-relaxed">{{ outcome.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const comparison = [
  {
    feature: 'Deployment complexity',
    alida: 'Simplified field procedures',
    traditional: 'Expert handling required',
  },
  {
    feature: 'AI & automation',
    alida: 'Physics-informed AI, automated analysis',
    traditional: 'Manual interpretation',
  },
  {
    feature: 'Time to insight',
    alida: 'Under 48 hours',
    traditional: 'Weeks of analysis',
  },
  {
    feature: 'Training requirement',
    alida: 'Short training cycles',
    traditional: 'Specialist expertise needed',
  },
  {
    feature: 'Turbine downtime',
    alida: 'Zero — live operation',
    traditional: 'Often requires shutdown',
  },
  {
    feature: 'Fleet scalability',
    alida: 'Standardized, repeatable',
    traditional: 'Case-by-case engagement',
  },
  {
    feature: 'Report format',
    alida: 'Standardized, actionable',
    traditional: 'Custom, variable quality',
  },
]

const outcomes = [
  {
    emoji: '⚡',
    metric: '+3–5%',
    title: 'Annual Energy Production',
    desc: 'Targeted corrections improve AEP through misalignment and imbalance fixes.',
  },
  {
    emoji: '💰',
    metric: '↓ 20%',
    title: 'O&M Cost Reduction',
    desc: 'Targeted interventions replace broad reactive maintenance schedules.',
  },
  {
    emoji: '🕐',
    metric: '10× faster',
    title: 'Diagnostic Speed',
    desc: 'Field-to-report in 48 hours versus weeks with traditional approaches.',
  },
  {
    emoji: '📊',
    metric: 'Fleet-wide',
    title: 'Scalable Insights',
    desc: 'Standardized workflow enables consistent diagnostics across any portfolio size.',
  },
]
</script>
