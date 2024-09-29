gsap.registerPlugin(ScrollTrigger) 

gsap.from('.section1 ', {
    scrollTrigger: '.section1', // start animation when ".box" enters the viewport
    trigger: '.section1',
    start: "top bottom",
    end: "bottom top",
    scrub: 1, // Smooth scrolling
    opacity: 0, // Initial opacity
    duration: 2, // Animation duration  
});
gsap.from('.tline h1', {
    scrollTrigger: '.tline h1', // start animation when ".box" enters the viewport
    trigger: 'h1',
    start: "top bottom",
    end: "bottom top",
    scrub: 1, // Smooth scrolling
    xPercent: -100,
    ease: "power4",
    stagger: 0.1,
    duration: 4, // Animation duration    
});

gsap.to('.question h2 ', {
    scrollTrigger: '.question h2', // start animation when ".box" enters the viewport
    trigger: 'h2',
    start: "top bottom",
    end: "bottom top",
    scrub: 1, // Smooth scrolling
    color: "black", // Initial color
    y: -50, // Start position
    opacity: 1, // Initial opacity
    duration: 4, // Animation duration   
});

gsap.to('.section2u1 ', {
    scrollTrigger: '.section2u1', // start animation when ".box" enters the viewport
    trigger: '.section2u1',
    start: "top bottom",
    end: "bottom top",
    scrub: 1, // Smooth scrolling
    y: -50, // Start position
    opacity: 1, // Initial opacity
    duration: 2, // Animation duration   
});



gsap.from('.section4 ', {
    scrollTrigger: '.section4', // start animation when ".box" enters the viewport
    trigger: 'section4',
    start: "top bottom",
    end: "bottom top",
    scrub: 1, // Smooth scrolling
    color: "black", // Initial color
    opacity: 0, // Initial opacity
    duration: 3, // Animation duration
});

const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        });

        // 
        
    let totalSection = document.querySelectorAll(".s1");
    totalSection.forEach(function (elem, index) {
    const text = new SplitType(elem.querySelector(".animate-heading"));
    let textwords = text.words;
    gsap.from(textwords, {
        scrollTrigger: {
            trigger: elem,
            start: "top 70%",
            end: "top 50%",
            // markers: true
        },
        duration: 1,
        opacity: 0,
        // yPercent: ,
        ease: Power3.out,
        stagger: 0.05
    });
});
