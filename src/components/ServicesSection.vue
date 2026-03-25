<template>
  <section id="services" class="py-24 bg-[#0a0e1a] relative overflow-hidden">
    <div class="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/6 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
          Services
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
          Tailored for Every Stage of Adoption
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          From rapid diagnostic pilots to full fleet deployments, ALIDA scales with your operations.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-2xl border p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 group"
          :class="service.featured
            ? 'bg-gradient-to-br from-teal-500/20 to-teal-600/10 border-teal-500/40 shadow-xl shadow-teal-500/10'
            : 'bg-[#111a35]/60 border-white/8 hover:border-teal-500/30'"
        >
          <!-- Badge -->
          <div class="flex items-start justify-between mb-6">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              :class="service.featured ? 'bg-teal-500/25' : 'bg-white/5'"
            >
              {{ service.emoji }}
            </div>
            <span
              v-if="service.badge"
              class="px-3 py-1 rounded-full text-xs font-semibold"
              :class="service.featured ? 'bg-teal-500/30 text-teal-300' : 'bg-white/10 text-slate-300'"
            >{{ service.badge }}</span>
          </div>

          <h3 class="text-white font-bold text-xl mb-3">{{ service.title }}</h3>
          <p class="text-slate-400 leading-relaxed mb-6 flex-1">{{ service.desc }}</p>

          <ul class="space-y-2 mb-8">
            <li
              v-for="item in service.includes"
              :key="item"
              class="flex items-center gap-2.5 text-sm text-slate-300"
            >
              <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {{ item }}
            </li>
          </ul>

          <a
            href="#contact"
            class="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
            :class="service.featured
              ? 'bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/25'
              : 'border border-white/15 hover:border-teal-500/50 text-slate-300 hover:text-teal-400'"
          >
            {{ service.cta }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Pilot callout -->
      <div class="rounded-2xl bg-gradient-to-r from-[#111a35] via-[#0d1a35] to-[#111a35] border border-teal-500/20 p-10 text-center">
        <h3 class="text-2xl font-bold text-white mb-3">Ready to validate performance gains?</h3>
        <p class="text-slate-400 mb-6 max-w-xl mx-auto">
          Start with a focused pilot on 10–20 turbines. ALIDA's pilot design creates objective performance evidence for your asset management team — and for your board.
        </p>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold transition-all shadow-lg shadow-teal-500/30"
        >
          Start a Pilot
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    emoji: '🔬',
    title: 'Diagnostic Campaign',
    badge: 'Most Popular',
    featured: true,
    desc: 'A targeted diagnostic engagement covering a selected group of turbines across one or more sites. Ideal for validating underperformance hypotheses quickly.',
    includes: [
      'On-site deployment (10–20 turbines)',
      'Full laser measurement campaign',
      'Physics-informed AI analysis',
      'Prioritized corrective action report',
      'O&M team review session',
    ],
    cta: 'Request a Campaign',
  },
  {
    emoji: '📦',
    title: 'Hardware Kit Deployment',
    badge: 'Fleet Scale',
    featured: false,
    desc: 'Purchase or lease ALIDA portable hardware kits for repeated in-house diagnostics. Enables independent, scalable deployment across large wind portfolios.',
    includes: [
      'Portable ALIDA sensor kit',
      'Software platform licence',
      'Training & onboarding',
      'Annual support subscription',
      'Automated reporting tools',
    ],
    cta: 'Learn More',
  },
  {
    emoji: '☁️',
    title: 'Software Subscription',
    badge: 'SaaS',
    featured: false,
    desc: 'Annual subscription to the ALIDA AI analytics platform. Integrates with your existing measurement infrastructure and delivers continuous fleet insights.',
    includes: [
      'AI analytics platform access',
      'Automated diagnostic reports',
      'Fleet performance dashboard',
      'Technical support',
      'Regular model updates',
    ],
    cta: 'Get Started',
  },
]
</script>
