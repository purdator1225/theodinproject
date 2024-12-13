let navLinks = document.querySelectorAll('li')


navLinks.forEach(navLink => {
    navLink.addEventListener('mouseenter', (e) => {
        e.target.classList.add('mousedin')
    })
})


// document.querySelector('.about-link').addEventListener('mouseenter',()=>{
//     document.querySelector('.submenu').classList.add('show')
// })

// document.querySelector('.about-link').addEventListener('mouseleave',()=>{
//     document.querySelector('.submenu').classList.remove('show')
// })


function showSubMenu() {
    let submenus = document.querySelectorAll('.submenu')

    //for each submenu, when their parent is hovered, apply the class .show and when leave, remove the class 

    submenus.forEach((submenu) => {

        submenuParent = submenu.parentElement
        console.log(submenuParent)

        submenuParent.style.position = 'relative'


        submenuParent.addEventListener('mouseenter', (e) => {

            console.dir(e.target)
            e.target.lastElementChild.classList.add('show')
        })

        submenuParent.addEventListener('mouseleave', (e) => {
            e.target.lastElementChild.classList.remove('show')
        })

    })
}

showSubMenu()

//try promises




// let hasCat = false

// //the promise object provides resolve and reject functions, but you would need to call it in the body of the callback 

// let promise = new Promise ((resolve, reject)=>{
//     if(hasCat){
//         resolve('Found Cat')

//     }

//     else{
//         reject('No Cat')
//     }
// })

// // the then receives what is given by resolve 

// promise.then(res=>console.log(res)).catch(err=>console.log(err))

let activeIndex = 0


//get a list of slides 
const allSlides = document.querySelectorAll('.swiper-slide')

function renderPagination() {

    let paginationWrapper = document.createElement('div')
    paginationWrapper.classList.add('pagination-wrapper')

    allSlides.forEach((slide, index) => {

        let paginationDot = document.createElement('div')

        paginationDot.dataset.index = index

        paginationDot.classList.add('pagination-dot')

        paginationWrapper.appendChild(paginationDot)


    })
    return paginationWrapper
}

document.querySelector('.carousell').appendChild(renderPagination())

const allPagination = document.querySelectorAll('.pagination-dot')

function nextSlide() {

    allSlides[activeIndex].classList.remove('active');

    allPagination[activeIndex].classList.remove('pagination-active')
    activeIndex = (activeIndex + 1) % allSlides.length;


    allSlides[activeIndex].classList.add('active')



    allPagination[activeIndex].classList.add('pagination-active')

}

function prevSlide() {
    allSlides[activeIndex].classList.remove('active');
    allPagination[activeIndex].classList.remove('pagination-active')
    activeIndex = (activeIndex - 1 + allSlides.length) % allSlides.length;


    allPagination[activeIndex].classList.add('pagination-active')

    allSlides[activeIndex].classList.add('active')
}

function goToSlide(indexClicked) {
    allSlides[activeIndex].classList.remove('active')

    allPagination[activeIndex].classList.remove('pagination-active')

    console.log(indexClicked)

    activeIndex = indexClicked;

    allSlides[activeIndex].classList.add('active')

    allPagination[activeIndex].classList.add('pagination-active')

}

let nextButton = document.querySelector('.next-btn')
nextButton.style.background = 'red'

let prevButton = document.querySelector('.prev-btn')

console.log(nextButton)


nextButton.addEventListener('click', nextSlide)

prevButton.addEventListener('click', prevSlide)


allPagination.forEach((paginationDot) => {

    paginationDot.addEventListener('click', (e) => {

        console.log(e.target.dataset.index)
        let clickedIndex = parseInt(e.target.dataset.index);

        goToSlide(clickedIndex)
    })
})
//we probably need to store the active index in some place and then read the active index to decide how much to move the swiper wrapper 


