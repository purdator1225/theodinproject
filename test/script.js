let myObj = {name:" Brian", age: 30};

let ObjString = JSON.stringify(myObj)
console.log(ObjString)

document.querySelector('.box').textContent = ObjString;