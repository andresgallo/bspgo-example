/**
 * moduleInViewObserver uses an intersection observer to find when an element is in view.
 * - if intersction observer is supported it adds attribute 'data-hasintersectionobserver' to html tag
 * - it also adds attribute 'data-module-enteredview' to modules matching MODULE_SELECTOR when they are in view 
 * - CSS can then use that to make custom animations and whatever else makes sense
 */
document.addEventListener("DOMContentLoaded", function() {
    const MODULE_SELECTOR = '[data-modulewell] > [data-module], .EnhancementCarousel'
    if ("IntersectionObserver" in window) {
        document.documentElement.setAttribute('data-hasintersectionobserver', true)
        const modules = document.querySelectorAll(MODULE_SELECTOR)

        const moduleObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                const module = entry.target;
                module.setAttribute('data-module-enteredview', true)
                moduleObserver.unobserve(module);
              }
            });
        })

        modules.forEach(function(module) {
            moduleObserver.observe(module);
        })
    }
})
  
  