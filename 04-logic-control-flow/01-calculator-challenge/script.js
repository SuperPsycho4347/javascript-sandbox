function getCalc(num1, num2, oper) {
    let result
    switch(oper) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
    }
    console.log(result);
}

getCalc(1, 2, '+')
getCalc(1, 2, '-')
getCalc(1, 2, '*')
getCalc(1, 2, '/')