
export const loadAbout = ()=>{
const title = document.createElement('h1')
const para = document.createElement('p')



title.innerText = 'This the about us'

para.innerText = 'Our mission is to cook the best stuff ever'

const contentDiv = document.querySelector('#content');

contentDiv.append(title)

contentDiv.append(para)

}

