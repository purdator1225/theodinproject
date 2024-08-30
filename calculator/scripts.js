//operations

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

//variables 
let firstNum = '';
let operator = '';
let lastNum = '';

function operate(firstNum, operator, lastNum) {

    let firstOperatingNum = Number(firstNum)
    let secondOperatingNum = Number(lastNum)


    switch (operator) {
        case '+':
            return add(firstOperatingNum, secondOperatingNum)

            break;

        case '-':
            return subtract(firstOperatingNum, secondOperatingNum)

            break;

        case '*':
            return multiply(firstOperatingNum, secondOperatingNum)

            break;

        case '/':
            return divide(firstOperatingNum, secondOperatingNum)

        default:
            break;
    }

}

//when the equals button is pressed, the operate function should run, 
//at that point, the operator should have been stored in a variable to be used. 


//when clicked, register what was clicked

let buttons = document.querySelectorAll('.buttons')

console.log(buttons)

let answerDisplay = document.querySelector('.answer')



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        //firstNum logic, if operator is not set && what is clicked is a number , num1 mode
        //i get the value from the click, show it on the screen 
        //store the number in num1 memory too


        if (Number(e.target.innerText) && operator === '') {

            firstNum += e.target.innerText

            updateDisplay(firstNum)


        }

        console.log(`firstNum:${firstNum}`)


        //operator logic, if what is clicked is an operator, check if there is a second num, if yes, then run evaluate, if not then set second num and operator

        if (e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '*' || e.target.innerText === '/') {
            if (firstNum != '' && lastNum ==='') {
                operator = e.target.innerText


                console.log(`operator:${operator}`)

            }

            else if (firstNum != '' && lastNum != '') {

                operator=e.target.innerText

                // console.log(`Chain operator:${operator}`)
                

                operateValue = operate(firstNum, operator, lastNum)

                firstNum=operateValue


                updateDisplay(operateValue)


            }

            //else run operation
        }


        //secondNum logic, if firstNum as been set and operator has been set, add any numbers to secondNum 

        // console.log(`operator between opif:${operator}`)

        if (Number(e.target.innerText) && operator != '') {

            lastNum =''

            lastNum += e.target.innerText

            updateDisplay(lastNum)

            console.log(`lastNumSet, Operator is ${operator}`)


        }

        console.log(`lastNum:${lastNum}`)


        //if - valuate the result

        if (e.target.innerText === '=') {

            operateValue = operate(firstNum, operator, lastNum)

            console.log(operateValue)

            firstNum = operateValue;
            lastNum = ''


            updateDisplay(operateValue)

            console.log(`firstNum: ${firstNum}`)
        }


        if (e.target.innerText === 'C') {

            firstNum = '';
            operator = '';
            lastNum = '';

            clearDisplay()


        }


    })
})



function updateDisplay(num) {

    answerDisplay.innerText=''

    answerDisplay.append(num)

}


function clearDisplay() {
    answerDisplay.innerText = '0'
}



//how does a calculator work?

//when i press a number, it shows up on the value 

//when I press a number, if first number is  blank, then assign it to first number, 

//else if first number is not blank, then assign it to second number 

//before I click the operator, when I first click a number, I need to store the number in a variable called number 1, this needs to be a string so it can be concatenated 




//when I click the operator, the focus shifts to number 2 which I will do the same 



//three parts: 
//when I click a number, it shows on the display 

//when I click a number, it updates a memory where it takes in if its first number or second number 

//when I click equal, it operates

