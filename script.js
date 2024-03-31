gsap.registerPlugin(ScrollTrigger)

gsap.to(".box", {
  // rotation: 360,
  // x: 400,
  duration: 2,
  scrollTrigger: {
    trigger: ".box",
    start: "top 30%",
    end: "center 20%",
    markers: true,
    toggleClass: "red",
  }
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)