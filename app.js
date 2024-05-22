gsap.set(".box", {
  borderRadius: 0,
  opacity: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  repeat: -1,
  yoyo: true,
  scale: 0.1,
  opacity: 1,
  background: "white",
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: "auto",
    from: "center",
    amount: 1.5,
  },
});
