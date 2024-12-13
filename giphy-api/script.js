const img = document.querySelector('img')

// getCats('cat')


// async function getCats (searchString){
//     const response  = await(  
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LmVEFyuIwJQ59SU21peR8L6TUy9p2iIh&s=${searchString.value || 'cat'}`))

//     const catData = await response.json()

//     img.src=catData.data.images.original.url
    

// }









// function getNewGif () {
    

//     const searchString = document.querySelector('input')

    
    
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LmVEFyuIwJQ59SU21peR8L6TUy9p2iIh&s=${searchString.value || 'cat'}`).then((res)=>{

//     console.dir(res)
//     return res.json()
// }).then((data)=>{
//     console.dir(data)

//     img.src=data.data.images.original.url
// })}

// document.querySelector('.new-btn').addEventListener('click',getNewGif)

const searchButton = document.querySelector('.input-btn')


// function getCats (){

//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LmVEFyuIwJQ59SU21peR8L6TUy9p2iIh&s=$cat`)
//     .then(res=>res.json())
//     .then((data)=>{
//         console.log(data)
//         img.src = data.data.images.original.url
//     })
//     .catch(err=>alert(err))
// }


const url = 'https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-150';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83363a5726mshae0d2d49002f831p1c1f3djsn132288a8a05b',
		'x-rapidapi-host': 'jokeapi-v2.p.rapidapi.com'
	}
};

let jokeSection = document.querySelector('.jokes')

// function getJoke (){

//     jokeSection.innerHTML = ''

//     fetch(url,options)
//     .then((res)=>{
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)

//         if (data.type === 'twopart'){
//         let setup = document.createElement('h1')
//         setup.textContent = data.setup

//         jokeSection.append(setup)

//         let ans = document.createElement('h2')

//         ans.textContent = data.delivery

//         setTimeout(()=>jokeSection.append(ans),3000)

//         }

//         else {

//             let jokeText = document.createElement('h4')

//             jokeText.textContent = data.joke

//             jokeSection.append(jokeText)
//         }

//     })
//     .catch(err=> console.log(err))
// }

// getJoke()



async function getAsyncJoke (){

    jokeSection.innerHTML = ''

    let res = await fetch(url,options)

    let data = await res.json()

    if (data.type === 'twopart'){
        let setup = document.createElement('h1')
        setup.textContent = data.setup

        jokeSection.append(setup)

        let ans = document.createElement('h2')

        ans.textContent = data.delivery

        setTimeout(()=>jokeSection.append(ans),3000)

        }

        else {

            let jokeText = document.createElement('h4')

            jokeText.textContent = data.joke

            jokeSection.append(jokeText)
        }



    console.log(data.category)
}

//writing a bunch more async functions 

async function fuckOff(){

    //returning in an async function is resolving the promise, just syntactic sugar
    
    return 'fuck off'
}

fuckOff().then(console.log)




// getCats()

// searchButton.addEventListener('click', getNewGif)


// new Promise (function(){
//     noSuchFunction();
// }).then(()=>{
//     console.log('suckcess')
// })

// window.addEventListener('unhandledrejection',function(event){
//     alert(event.promise)
//     alert(event.reason)
// })

// async function f(){
//     return 1;
// }

// f().then(console.log)

async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('done'), 1000)
    })

    let result = await promise 

    alert(result)
}

f()

//wrapping in a try catch block 

async function tryCatch(){
    let result = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('done'),1000)
    })

    try {
        let response = await result

        alert(response)
    }

    catch(err){
        alert(err)

    }
}

tryCatch()