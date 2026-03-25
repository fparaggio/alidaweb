<template>
  <section id="contact" class="py-24 bg-[#0a0e1a] relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
          Contact
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
          Let's Talk About Your Fleet
        </h2>
        <p class="text-slate-400 text-lg max-w-xl mx-auto">
          Whether you're looking to run a pilot, explore a partnership, or simply learn more, we'd love to connect.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact form -->
        <div class="rounded-2xl bg-[#111a35]/60 border border-white/8 p-8">
          <h3 class="text-xl font-bold text-white mb-6">Send us a message</h3>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="John"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-colors text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Smith"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-2">Company</label>
              <input
                v-model="form.company"
                type="text"
                placeholder="Your company name"
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-colors text-sm"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@company.com"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-colors text-sm"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-2">How can we help?</label>
              <select
                v-model="form.topic"
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-colors text-sm appearance-none"
              >
                <option value="" class="bg-[#111a35]">Select a topic</option>
                <option value="pilot" class="bg-[#111a35]">Run a pilot campaign</option>
                <option value="hardware" class="bg-[#111a35]">Hardware kit deployment</option>
                <option value="software" class="bg-[#111a35]">Software subscription</option>
                <option value="partnership" class="bg-[#111a35]">Partnership & investment</option>
                <option value="other" class="bg-[#111a35]">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your wind portfolio and what you're trying to solve..."
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-colors text-sm resize-none"
              ></textarea>
            </div>
            <div v-if="submitted" class="flex items-center gap-3 p-4 rounded-lg bg-teal-500/15 border border-teal-500/30">
              <svg class="w-5 h-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p class="text-teal-300 text-sm">Thank you! We'll be in touch within 24 hours.</p>
            </div>
            <button
              v-else
              type="submit"
              class="w-full py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-bold text-white mb-6">Get in touch directly</h3>
            <div class="space-y-4">
              <a
                v-for="contact in contactItems"
                :key="contact.label"
                :href="contact.href"
                class="flex items-center gap-4 p-4 rounded-xl bg-[#111a35]/60 border border-white/8 hover:border-teal-500/30 transition-colors group"
              >
                <div class="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center group-hover:bg-teal-500/25 transition-colors">
                  <span class="text-lg">{{ contact.emoji }}</span>
                </div>
                <div>
                  <p class="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{{ contact.label }}</p>
                  <p class="text-white font-medium text-sm">{{ contact.value }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Location -->
          <div class="rounded-xl bg-[#111a35]/60 border border-white/8 p-6">
            <h4 class="text-white font-semibold mb-4 flex items-center gap-2">
              <span class="text-lg">📍</span> Based in Italy
            </h4>
            <p class="text-slate-400 text-sm leading-relaxed">
              ALIDA is an Italian-incorporated startup with a field-tested diagnostic platform, currently serving wind operators and utilities seeking faster, smarter performance insights.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">Wind Energy</span>
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">Italy · Europe</span>
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">Generation · Asset Optimisation</span>
            </div>
          </div>

          <!-- Pilot quick pitch -->
          <div class="rounded-xl bg-gradient-to-br from-teal-500/15 to-teal-600/5 border border-teal-500/25 p-6">
            <h4 class="text-teal-300 font-semibold mb-2">Typical Pilot Parameters</h4>
            <ul class="space-y-1.5 text-sm text-slate-400">
              <li>✅ Duration: 3–4 months</li>
              <li>✅ Turbines: 10–20 per site</li>
              <li>✅ Budget: €25k–€50k</li>
              <li>✅ Zero turbine downtime required</li>
              <li>✅ Independent performance validation available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  topic: '',
  message: '',
})

function handleSubmit() {
  // In production, connect to a backend or form service
  submitted.value = true
}

const contactItems = [
  {
    emoji: '✉️',
    label: 'Email',
    value: 'francesco.paraggio@proton.me',
    href: 'mailto:francesco.paraggio@proton.me',
  },
  {
    emoji: '📱',
    label: 'Phone',
    value: '+39 393 361 4321',
    href: 'tel:+393933614321',
  },
]
</script>
