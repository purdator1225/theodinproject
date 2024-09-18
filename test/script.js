document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    // Adjust these values to match the desired flip timing
    const pageHeight = 297; // Height of A4 paper in mm
    const triggerOffset = pageHeight / 2;

    if (scrollPosition > triggerOffset && scrollPosition < triggerOffset * 3) {
        page1.style.transform = `rotateY(-180deg)`;
    } else {
        page1.style.transform = `rotateY(0deg)`;
    }

    if (scrollPosition > triggerOffset * 3 && scrollPosition < triggerOffset * 5) {
        page2.style.transform = `rotateY(-180deg)`;
    } else {
        page2.style.transform = `rotateY(0deg)`;
    }

    if (scrollPosition > triggerOffset * 5) {
        page3.style.transform = `rotateY(-180deg)`;
    } else {
        page3.style.transform = `rotateY(0deg)`;
    }
});



// const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

// if (!prefersReducedMotion) {
//     document.addEventListener('scroll', () => {
//         // Scroll animation code here
//     });
// }