let button = document.querySelector('.button-body')

let input = document.querySelector('.todo-input')

let toDoWrapper = document.querySelector('.todolist-wrapper')


let todoList = []


button.addEventListener('click',()=>{

    let toDoObject = {}

    if (input.value != ''){
        toDoObject.item = input.value;
        toDoObject.done = false;
        todoList.push(toDoObject)
    }

    input.value = ''

    console.dir(todoList)

    const fullList = todoList.map((todo,index)=>(
        `<li id=${index+1} class=${todo.done?'done':'notdone'}>
        
            <p>${todo.item}</p>

            <div>
                <button class='mark-done-button'>Mark Done</button>
                <button class='delete-button'>Delete</button>            
            
            </div>
        
        </li>`
    ))

    const fullListHTML = fullList.join('')

    toDoWrapper.innerHTML = fullListHTML

    let markDoneButtons = document.querySelectorAll('.mark-done-button')

    console.log(markDoneButtons)

    //add to all bttons


    markDoneButtons.forEach((markDownButton)=>{
       markDownButton.addEventListener('click',(e)=>{

        let parentListID=  e.target.parentElement.parentElement.id

        let toDoItemClicked = todoList.find((item)=>{
            item.

        })
      
       })
    })

    

})



    //find the element in the data structure 


    //toggle the element to done 


    //set the HTML again 




//when I click add button, push an object that takes in the innertext of the input field and a done property of false and push it into the todo list array 

//features: 
//- each todo item has a mark done and a trash button 


//toggle the done class


