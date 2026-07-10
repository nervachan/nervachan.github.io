// Scroll-reveal directive.
//   v-reveal                              → default 'up'
//   v-reveal="{ type, delay }"            → per-element control
// type:  'up' | 'down' | 'left' | 'right' | 'zoom' | 'blur'
// delay: ms before the transition starts (used to stagger grids)
//
// The .reveal class (which hides the element) is added by JS, not markup, so
// if scripting fails the content stays visible instead of vanishing.

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const reveal = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return

    const opts = binding.value && typeof binding.value === 'object' ? binding.value : {}
    const type = opts.type || binding.arg || 'up'
    const delay = opts.delay || 0

    el.classList.add('reveal', `reveal-${type}`)
    if (delay) el.style.transitionDelay = `${delay}ms`

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-revealed')
            obs.unobserve(el)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el) {
    if (el.__revealObserver) {
      el.__revealObserver.disconnect()
      delete el.__revealObserver
    }
  },
}
