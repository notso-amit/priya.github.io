gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", (event) => {

    // splliting the words
    let typeSplithead = new SplitType(".head-text", {
        types: "char",
        tagName: "span",
    });

    const tlh = new gsap.timeline();

    // animation
    tlh.from(".char", {
        delay: 1,
        y: 80,
        opacity: 0,
        ease: "back",
        stagger: 0.1
    })

    tlh.from(".main-text", {
        x: 90,
        opacity: 0,
        delay: 0.6
    })
    // Select all the images you want to reveal on scroll
    const images = document.querySelectorAll(".effect-image-1 img");

    // Loop over each image
    images.forEach((img) => {
        // Set the initial state of the image
        gsap.set(img, { autoAlpha: 0 });

        // Create a ScrollTrigger for each image
        gsap.to(img, {
            autoAlpha: 1, // This will change the opacity to 1 (visible)
            scrollTrigger: {
                trigger: img, // The image itself is the trigger
                start: "top 75%", // Start revealing when the top of the image is 75% from the top of the viewport
                end: "top 25%", // Finish revealing when the top of the image is 25% from the top of the viewport
                scrub: true, // Smooth out the animation over the scroll range
            },
        });
    });
});
var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");
var downloadBtn = document.getElementById("downloadBtn");

function openfullimg(pic) {
    fullimgbox.style.display = "flex";
    fullimg.src = pic;
    downloadBtn.style.display = "block";  // Show the download button
    downloadBtn.href = pic;  // Set the href of the download button to the image source
    downloadBtn.download = "image.jpg";  // Set the download attribute of the download button

    gsap.from(fullimgbox, { scale: 0, opacity: 0, duration: 0.4, ease: "back.out(1, 0.3)" });
}

function closefullimg() {
    gsap.to(fullimgbox, {
        scale: 0, duration: 0.4, opacity: 0, ease: "back.in(1, 0.3)", onComplete: function () {
            fullimgbox.style.display = "none";
            downloadBtn.style.display = "none";  // Hide the download button
            gsap.set(fullimgbox, {
                opacity: 1,
                scale: 1
            });
        }
    });
}