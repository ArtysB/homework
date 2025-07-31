function salutName (name) {
    return 'Hello ' + name
}

console.log(salutName('Artsiom'))


let numberArr = [1, 2, 3, 4, 5, 15, 28, 7, 17]

function bigNum (array) {
    for (let i = 0; i < array.length; i++)
        if(array[i] > 10){
            console.log(array[i])
        }
}

console.log(bigNum(numberArr))



function mathCalc (firstNum, secondNum, str) {
    
    if (str === 'minus') {
        return firstNum - secondNum;
    }if (str === 'plus') {
        return firstNum + secondNum;
    } if (str === 'multiply') {       
        return firstNum * secondNum;
    }if (str === 'division'){
        return firstNum / secondNum;
    }else {
        return 'Неверные данные'
    }
}


    console.log(mathCalc(3, 2, 'minus'))


    const users = [
        {
            name: 'Artsiom',
            isAdmin: true
        },
        {
            name: 'Ivan',
            isAdmin: false
        },
        {
            name: 'Igor',
            isAdmin: false
        },
        {
            name: 'Anastasia',
            isAdmin: true
        },
        {
            name: 'Elena',
            isAdmin: true
        }
    ]

    let reguralPeople = 0;

    for(let i = 0; i < users.length; i++){
        if (!users[i].isAdmin)
            reguralPeople++;
        
    }

    console.log('Количество простых пользователей ' + reguralPeople)
    

    