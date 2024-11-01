export const loadHome = ()=>{


const title = document.createElement('h1')
const para = document.createElement('p')

const contentDiv = document.querySelector('#content')


title.innerText = 'This is a restaurant'

para.innerText = 'This is the best restaurant in the world'



contentDiv.append(title)

contentDiv.append(para)
}

