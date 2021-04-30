const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x:300, y: 10},
        {x: 500, y: 100},
        {x:750, y: -100},
        {x:350, y: -50},
        {x:600, y: 100},
        {x:800, y: 0},
        {x: window.innerWidth, y: -150},

    ]
}
const textPath = {
    autoRotate: false,
    values:  [
        {x:100, y: 0},
        {x:300, y: 0},
        {x:500, y: 0},
        {x:750, y: 0},
        {x:800, y: 0},
        {x:900, y: 0},
        {x: window.innerWidth + 400, y: 0},
    ]
}
const textPathStha = {
    autoRotate: false,
    values:  [
        {x: -100, y: 0},
        {x:-300, y: 0},
        {x: -500, y: 0},
        {x:-750, y: 0},
        {x:-800, y: 0},
        {x:-900, y: 0},
        {x: -window.innerWidth - 450, y: 0},
    ]
}
const textTweens = new TimelineLite();
const flightTween = new TimelineLite();
const textTween = new TimelineLite();
const textTweenStha = new TimelineLite();
flightTween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)
textTween.add(
    TweenLite.to('.anirud', 1, {
        bezier: textPath,
        ease: Power1.easeInOut
    })
)
textTweenStha.add(
    TweenLite.to('.shrestha', 1, {
        bezier: textPathStha,
        ease: Power1.easeInOut
    })
)
textTweens.add([textTween, textTweenStha])




const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 2000,
    triggerHook: 0
}).setTween(flightTween).setPin(".animation").addTo(controller)

const newScene = new ScrollMagic.Scene({
    triggerElement: '.text-animation',
    duration: 2000,
    triggerHook: 0
}).setTween(textTweens).setPin(".text-animation").addTo(controller)
