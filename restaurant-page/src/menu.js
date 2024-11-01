
export const loadMenu = ()=>{

 const title = document.createElement('h1')
const para = document.createElement('p')


title.innerText = 'This the Menu'

para.innerText = 'The menu is unbelievable good'

const contentDiv = document.querySelector('#content');

contentDiv.append(title)

contentDiv.append(para)

}
