gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", (event) => {

    // splliting the words
    let typeSplithead = new SplitType(".main-heading", {
        types: "char",
        tagName: "span",
    });

    // animation for Head
    // timeline
    const tlh = new gsap.timeline();
    
    // animation
    tlh.from(".char", {
        delay: 1,
        y: -80,
        opacity: 0,
        ease: "back",
        stagger: 0.1
    })

    tlh.from(".main-text", {
        x: 90,
        opacity: 0,
        delay: 0.6
    })


    // Initialize SplitText
    let typeSplit1 = new SplitType("#p1", {
        types: "words",
        tagName: "span"
    });

    // Create a GSAP timeline
    const tl1 = new gsap.timeline();

    // Add animations to the timeline
    tl1.from("#pics1", {
        x: -60,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    });

    tl1.from("#head1", {
        y: -400,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    }, 0);

    tl1.from(".word", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "back.out",
        stagger: 0.1
    }, 0);

    // Create a ScrollTrigger
    ScrollTrigger.create({
        trigger: "#pics1",
        start: "top bottom",
        end: "bottom 64px",
        animation: tl1,
        onEnter: function () {
            tl1.play();
        },
        onLeaveBack: function () {
            tl1.reverse();
        },
    });
    // Initialize SplitText
    let typeSplit2 = new SplitType("#p2", {
        types: "words",
        tagName: "span",
        className: "word2"
    });

    // Get all elements with class 'word' inside '#p2'
    let words = document.querySelectorAll('#p2 .word');

    // Loop through each word and change the class name to 'word2'
    words.forEach(word => {
        word.classList.remove('word');
        word.classList.add('word2');
    });

    // animations starts here for p2
    const tl2 = new TimelineMax();

    tl2.from("#pics2", {
        x: 60,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    });

    tl2.from(".word2", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "bounce.out",
    }, 0);

    tl2.from("#head2", {
        y: -400,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    }, 0);

    ScrollTrigger.create({
        trigger: "#pics2",
        start: "top 500",
        animation: tl2,
        onEnter: function () {
            tl2.play();
        },
        onLeaveBack: function () {
            tl2.reverse();
        },
    });

    // splliting the words
    let typeSplit3 = new SplitType("#p3", {
        types: "words",
        tagName: "span",
    });

     // Get all elements with class 'word' inside '#p3'
     let words3 = document.querySelectorAll('#p3 .word');

     // Loop through each word and change the class name to 'word3'
     words3.forEach(word => {
         word.classList.remove('word');
         word.classList.add('word3');
     });

      // animations starts here for p3
    const tl3 = new TimelineMax();

    tl3.from("#pics3", {
        x: -60,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    });

    tl3.from(".word3", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "bounce.out",
    }, 0);

    tl3.from("#head3", {
        y: -400,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    }, 0);

    ScrollTrigger.create({
        trigger: "#pics3",
        start: "top 550",
        animation: tl3,
        onEnter: function () {
            tl3.play();
        },
        onLeaveBack: function () {
            tl3.reverse();
        },
    });

    // splliting the words
    let typeSplit4 = new SplitType("#p4", {
        types: "words",
        tagName: "span",
    });

     // Get all elements with class 'word' inside '#p3'
     let words4 = document.querySelectorAll('#p4 .word');

     // Loop through each word and change the class name to 'word3'
     words4.forEach(word => {
         word.classList.remove('word');
         word.classList.add('word4');
     });

     // animations starts here for p3
    const tl4 = new TimelineMax();

    tl4.from("#pics4", {
        x: 60,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    });

    tl4.from(".word4", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "bounce.out",
    }, 0);

    tl4.from("#head4", {
        y: -400,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(2.4)",
    }, 0);

    ScrollTrigger.create({
        trigger: "#pics4",
        start: "top 550",
        animation: tl4,
        onEnter: function () {
            tl4.play();
        },
        onLeaveBack: function () {
            tl4.reverse();
        },
    });

    

});

