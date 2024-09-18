const leftButton = document.querySelector('.left')

const rightButton = document.querySelector('.right')


leftButton.addEventListener('click', () => {
    console.log('swipe-left')
})

rightButton.addEventListener('click', () => {
    console.log('swipe-right')
})

const track = document.querySelector('.carousell-track')

console.log(track)

const slides = Array.from(track.children)

const dotsNav = document.querySelector('.carousell-nav')

const dots = Array.from(dotsNav.children)

//to get how much the slide shold move
const slideWidth = slides[0].getBoundingClientRect().width

console.log(slideWidth)


//arrange the slides next to one another
// slides[0].style.left=slideWidth*0+'px';
// slides[1].style.left =`${slideWidth}px`;
// slides[2].style.left =`${slideWidth*2}px`;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'

}

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`

    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')


}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}

const hideShowArrows = (slides, leftButton, rightButton, targetIndex) =>{

     if (targetIndex === 0) {
        leftButton.classList.add('is-hidden')
        rightButton.classList.remove('is-hidden')


    } else if (targetIndex===slides.length -1){
        leftButton.classList.remove('is-hidden');
        rightButton.classList.add('is-hidden')
    }

    else{
        leftButton.classList.remove('is-hidden')
        rightButton.classList.remove('is-hidden')
    }



}




slides.forEach(setSlidePosition)


//what happens when I click right button

rightButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-slide');
    console.dir(currentSlide);


    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide)

    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling

    const nextIndex = slides.findIndex(slide=> slide === nextSlide)

    hideShowArrows(slides, leftButton, rightButton, nextIndex)


    updateDots(currentDot, nextDot)

    //move to the nextSlide


})

//what happens when I click left button

leftButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-slide');

    console.log(currentSlide)

    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)

    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling


    updateDots(currentDot, prevDot)

    const prevIndex = slides.findIndex(slide=> slide === prevSlide)


    hideShowArrows(slides, leftButton, rightButton, prevIndex)


    //move to the nextSlide


})

//what happens when I click the nav buttons

dotsNav.addEventListener('click', (e) => {

    //what indicator was clicked
    const targetDot = e.target.closest('button')


    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide')

    const currentDot = dotsNav.querySelector('.current-slide')

    const targetIndex = dots.findIndex(dot => dot === targetDot)

    console.log(targetIndex)

    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot)

    hideShowArrows(slides, leftButton, rightButton, targetIndex)


})
