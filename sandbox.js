const expression = document.getElementById('expressChild');
const mainValue = document.getElementById('answerChild');
let strExpression = '', op1 = 0, op2 = 0, operand = '+', operandInput = false, temp = 0, count = 0;
let Calculate = (ans, op2, operand) => {
    if (operand === '+') {
        return ans + op2;
    }
    else if (operand === '-') {
        return ans - op2;
    }
    else if (operand === '*') {
        return ans * op2;
    }
    else {
        if (op2 === 0) {
            alert("The Denominator Cannot Be Zero");
            return 0;
        }
        else {
            return ans / op2;
        }
    }
};
let buttonValue = document.getElementById('keys').addEventListener('click', function (event) {
    const pressedKeys = event.target.innerText;
    if (pressedKeys.length === 1) {
        if (pressedKeys !== 'C' && pressedKeys !== '=') {
            strExpression += pressedKeys;
            expression.innerText = strExpression;
            if (Number(pressedKeys) >= 0 && Number(pressedKeys) <= 9 && (!operandInput)) {
                op1 = op1 * 10 + Number(pressedKeys);
                ans = op1;
                mainValue.innerText = ans;
            }
            else if (Number(pressedKeys) >= 0 && Number(pressedKeys) <= 9 && (operandInput)) {
               
                op2 = op2 * 10 + Number(pressedKeys);
                temp = Calculate(ans, op2, operand);
                mainValue.innerText = temp;
            }
            
            else if (pressedKeys === '+' || pressedKeys === '-' || pressedKeys === '*' || pressedKeys === '/') {
                count++;
                operand = pressedKeys;
                if (count >= 2)
                    ans = temp;
                console.log(ans);
                operandInput = true;
                op2 = 0;
            }

        }
        
        else if (pressedKeys === 'C') {
            strExpression = '', op1 = 0, op2 = 0, operand = '+', operandInput = false, temp = 0, count = 0;
            expression.innerText = strExpression;
            mainValue.innerText = 0;

        }
        else if (pressedKeys === '=') {
            expression.innerText = '';
            ans = temp;
            strExpression = ans.toString();

            mainValue.innerText = ans;
        }
    }
    else if (pressedKeys === '+/-') {
        ans *= -1;
        mainValue.innerText = ans;
    }
});