var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4, #nav button", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5 
})

tl.from("#main h2", {
    y: 100,
    opacity: 0,
    stagger: 0.3
})

tl.to("h5", {
    y: 40,
    repeat: -1,
    duration: 1,
    yoyo: true
})