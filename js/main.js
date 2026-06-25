// AOS Init
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// GSAP Logo Animation
gsap.from(".logo", {
  duration: 1,
  y: -50,
  opacity: 0,
  delay: 2.1,
  ease: "power3.out"
});

// Button Hover Animation
document.querySelectorAll('.btn-glass').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3 });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { scale: 1, duration: 0.3 });
  });
});