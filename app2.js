// Create the animation
var tl = gsap.timeline({ paused: true });
tl.from("#btn", {
    x: 600,
    delay: 1,
    opacity: 0,
    duration: 1,
    ease: "back.out(2.4)",
});

// Play animation when #hell is clicked
document.getElementById("hell").addEventListener("click", function () {
    tl.restart();
});

// Play a different animation when .pos2 is clicked
document.querySelector("#btn").addEventListener("click", function () {
    gsap.to("#btn", {
        scale: 0.5,
        opacity: 0,
        onComplete: function () {
            gsap.set("#btn", {
                delay: 1,
                x: -300,
                clearProps:"scale,opacity"
            });
        }
    });
});

// Create the animation
var tl2 = gsap.timeline({ paused: true });
tl2.from("#btn2", {
    x: 600,
    delay: 1,
    opacity: 0,
    duration: 1,
    ease: "back.out(2.4)",
});

// Play animation when #hell is clicked
document.getElementById("hell").addEventListener("click", function () {
    tl2.restart();
});

// Play a different animation when .pos2 is clicked
document.querySelector("#btn2").addEventListener("click", function () {
    gsap.to("#btn2", {
        scale: 0.5,
        opacity: 0,
        onComplete: function () {
            gsap.set("#btn2", {
                delay: 1,
                x: -300,
                clearProps:"scale,opacity"
            });
        }
    });
});

// Create the animation
var tl3 = gsap.timeline({ paused: true });
tl3.from("#btn3", {
    x: 600,
    delay: 1,
    opacity: 0,
    duration: 1,
    ease: "back.out(2.4)",
});

// Play animation when #hell is clicked
document.getElementById("hell").addEventListener("click", function () {
    tl3.restart();
});

// Play a different animation when .pos2 is clicked
document.querySelector("#btn3").addEventListener("click", function () {
    gsap.to("#btn3", {
        scale: 0.5,
        opacity: 0,
        onComplete: function () {
            gsap.set("#btn3", {
                delay: 1,
                x: -300,
                clearProps:"scale,opacity"
            });
        }
    });
});


