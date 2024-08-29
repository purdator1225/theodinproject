
let container = document.querySelector('.container')

let button = document.querySelector('button')

button.addEventListener('click', ()=>{

    let askUser = prompt('Key in a number less than 100')

    let askUserNum = parseInt(askUser)

    console.log(askUserNum)


    container.innerHTML= ''

    generateGrid(askUserNum)


}

)


//hoverlistener




//function to generate grid based on user input

function generateGrid(gridByUser){

    const cellSize = 600/gridByUser

    for (let i=0; i < gridByUser * gridByUser; i++) {

        const cell = document.createElement('div')

        cell.style.flex = `0 0 ${cellSize}px`
        cell.style.height= `${cellSize}px`;
 
        cell.style.border='1px solid red'

        cell.addEventListener('mouseenter',()=>{


            cell.style.backgroundColor=randomRGB()
        })
  

        
    container.appendChild(cell)
        
    }


}

function randomRGB (){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g}, ${b})`

}