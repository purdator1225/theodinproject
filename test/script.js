

// const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

// if (!prefersReducedMotion) {
//     document.addEventListener('scroll', () => {
//         // Scroll animation code here
//     });
// }

// let boxRect = document.querySelector('.box').getBoundingClientRect();

// console.log(boxRect)

// //for duplication

// function Person(name){
//     this.name = name;
// }

// Person.prototype.sayName = function(){
//     console.log(`Hello i am ${this.name}!`)
// }

// function Player(name, marker){
//     this.name = name;
//     this.marker = marker;
// }

// Player.prototype.getMarker = function(){
//     console.log(`My marker is ${this.marker}`)
// }

// Object.setPrototypeOf(Player.prototype, Person.prototype)

// Object.getPrototypeOf(Player.prototype)

// const player1 = new Player('steve','X')

// player1.getMarker()

// let nameArray 


// let people = fetch('https://swapi.dev/api/people').then((response) => response.json())
//   .then((data) => {
//     const names = data.results.map((person)=> person.name)

//     console.log(names)

//     nameArray = names
    
//     return names
//   })
//   .catch((error) => console.error('Error fetching data:', error));



// console.log(`name arrray value is ${nameArray}`)

// function userCreator(name, score){
//   //i use the object to be placed on the proto property, eventually it is also referred to the root object 
//   const newUser = Object.create(userFunctionStore);

//   newUser.name = name
//   newUser.score = score

//   return newUser
// }

// const userFunctionStore = {
//   increment: function(){
//     this.score ++
//   },
//   login: ()=>{
//     console.log('Logged In')
//   }
// }

// const user1 = userCreator('Will', 1)

// user1.login()

// Object.getPrototypeOf(userFunctionStore)

let box = document.querySelector('.box')

console.log(box)

function handleScroll(){
  let rect= box.getBoundingClientRect()

  console.log('this is box1')

  console.log(rect)

  console.log(window.scrollY);
}

window.addEventListener("click", handleScroll)

let box2 = document.querySelector('.box2')



function getRect2(){
  let rect2 = box2.getBoundingClientRect()


  console.log('this is box2')

  console.log(rect2)

  console.log(window.scrollY);

}

let container2 = document.querySelector('.container2');

container2.addEventListener('click', getRect2)


  window.addEventListener('scroll', (e) => {
            console.log(window.scrollY);
        });