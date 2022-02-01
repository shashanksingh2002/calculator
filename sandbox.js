let expression = document.getElementById('expressChild');
let strExpression = '';
let ans = 0;
let op1 = 0, op2 = 0, operand = '+';
let operandInput = false, first = false, opFirst = false;
let calculate1 = (op1, op2, operand) => {
    first = true;
    if (operand === '+') {
        return op1 + op2;
    }
    else if (operand === '-') {
        return op1 - op2;
    }
    else if (operand === '*') {
        return op1 * op2;
    }
    else {
        if (op2 === 0) {
            alert('Cannot Divide By Zero');
            return 0;
        }
        else {
            return op1 / op2;
        }
    }
};
let calculate2 = (op2, ans, operand) => {
    if (operand === '+') {
        console.log(ans + op2);
        return op2 + ans;
    }
    else if (operand === '-') {
        return ans - op2;
    }
    else if (operand === '*') {
        return ans * op2;
    }
    else {
        if (op2 === 0) {
            alert('Cannot Divide By Zero');
            return 0;
        }
        else {
            return ans / op2;
        }
    }
};
let value = document.getElementById('keys').addEventListener('click', function (event) {
    let valueClicked = event.target.innerText;
    let inputLength = valueClicked.length;
    
    if (inputLength === 1) {
        if (valueClicked !== 'C' && valueClicked !== '=') {
            strExpression += valueClicked;
            expression.innerText = strExpression;
            if (valueClicked === '+' || valueClicked === '-' || valueClicked === '*' || valueClicked === '/') {
                if (opFirst) {
                    if (!first)
                        ans += calculate1(op1, op2, operand);
                    else
                        ans = calculate2(op2, ans, operand);
                    document.getElementById('answerChild').innerText = ans.toString();
                }
                operand = valueClicked;
                op2 = 0;
                operandInput = true;
                opFirst = true;
            }
            else if (Number(valueClicked) >= 0 && Number(valueClicked) <= 9 && operandInput === false) {
                op1 = op1 * 10 + Number(valueClicked);
            }
            else if (Number(valueClicked) >= 0 && Number(valueClicked) <= 9 && operandInput === true) {
                op2 = op2 * 10 + Number(valueClicked);
            }


        }
        else if (valueClicked === '=') {
            if (!first)
                ans += calculate1(op1, op2, operand);
            else
                ans = calculate2(op2, ans, operand);
            document.getElementById('answerChild').innerText = ans.toString();
            strExpression = ans.toString();
            expression.innerText = strExpression;
            op1 = 0, op2 = 0, operand = '+', operandInput = false;
        }
        else if (valueClicked === 'C') {
            ans = 0, op1 = 0, op2 = 0, operandInput = false, operand = '+', first = false;
            strExpression = ' ';
            expression.innerText = strExpression;
            document.getElementById('answerChild').innerText = '0';

        }

    }



});




