const myLibrary = []

const shelf= document.querySelector('.shelf')

const submitButton = document.querySelector('.add-to-lib')

const formTitle = document.querySelector('input#title')

const form = document.querySelector('form')

const formAuthor = document.querySelector('input#author')


function Book(title, author) {
    this.title= title;
    this.author = author;
    this.isRead= false;

    this.toggleRead= function(){
        this.isRead = !this.isRead

    }
    
}

function addBookToLibrary(title, author){

    //make book object
      const newBook = new Book(title, author)

      console.log(newBook)


    //add to the array 
    myLibrary.push(newBook)
}


function displayBookOnShelf(displayList){

    //clear shelf 
    shelf.innerHTML = ''
    

    //create cardList
    const cardList = displayList.map((book, index)=>{

        const shelfCard= document.createElement('div')

        shelfCard.dataset.index = index

        shelfCard.classList.add('book')

        console.log(shelfCard)

        const bookTitle = document.createElement('h1')

        const removeButton = document.createElement('button')

        const readButton = document.createElement('button')

        removeButton.addEventListener('click', removeBook)

        removeButton.innerText = 'remove this book'

        readButton.innerText= book.isRead ? "Read" : "Unread"

        readButton.addEventListener('click', toggleRead)

        bookTitle.innerText = book.title

        const authorTitle = document.createElement('h3')
        authorTitle.innerText = book.author


        shelfCard.appendChild(bookTitle)

        shelfCard.appendChild(authorTitle)

        shelfCard.appendChild(removeButton)

        shelfCard.appendChild(readButton)

        return shelfCard
    })

    //append cards to shelf

    cardList.map((book)=>shelf.append(book))
    

}


//remove book 
function removeBook(event){

    // console.dir(event.target.parentElement.datase.index)

    // shelf.removeChild(event.target.parentElement)
    
    //remove item from the library list


    const indextoRemove = event.target.parentElement.dataset.index
    
    console.log(event.target.parentElement.dataset.index)

    console.log(indextoRemove)

    if (indextoRemove> -1 ){
        myLibrary.splice(indextoRemove,1)


    displayBookOnShelf(myLibrary)

   

    }

}

function toggleRead(event){

    const indextoToggle = event.target.parentElement.dataset.index

    const bookToRead = myLibrary[indextoToggle]

    bookToRead.toggleRead()

    displayBookOnShelf(myLibrary)


}





//button 
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();

    console.log(formTitle.value)
    console.log(formAuthor.value)


   
    if (formTitle.value && formAuthor.value){

         addBookToLibrary(formTitle.value, formAuthor.value)

        console.log(myLibrary)

        displayBookOnShelf(myLibrary)
    

    }

    else {

        alert('Form fields must not be empty')
       

    }

})