
function displayError(){
    console.error("Error: Invalid Expression");
    return null;
}

function isOperator(operator){
    return (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "(" || operator === ")" || operator === "^" || operator === "%");
}

function convertExpressionToArray(inputString){
    let expressionArray = [];
    const lengthOfExpression = inputString.length;
    let tempDigit = 0;
    let divider = 10;
    let isFloat = false;
    let isAdding = false;

    for(let i=0;i<lengthOfExpression;i++){

        let currentChar = inputString.charAt(i);
        
        if(currentChar===" ") continue;
        
        else if(isOperator(currentChar)){
            if(isAdding) expressionArray.push(tempDigit);
            expressionArray.push(currentChar);
            tempDigit = 0;
            isFloat = false;
            divider = 10;
            isAdding = false;
        }
        
        else if(currentChar >= '0' && currentChar <= '9'){
            currentChar = parseInt(currentChar);
            isAdding = true;
            if(isFloat){
                currentChar /= divider;
                tempDigit += currentChar;
                divider *= 10;
            }
            else tempDigit = tempDigit * 10 + currentChar;
        }
        
        else if(currentChar === "."){
            isFloat = true;
        }

        else continue;
    }
    if(isAdding) expressionArray.push(tempDigit);
    
    return expressionArray;
}

function findPrecedence(operator){
    let precedence = {
        "+" : 1, "-" : 1, "*" : 2, "/" : 2, "%" : 2, "^" : 3
    }
    return precedence[operator];
}

function performOperation(operand1,operand2,operator){
    if(operator === "+") return operand1 + operand2;
    if(operator === "-") return operand1 - operand2;
    if(operator === "*") return operand1 * operand2;
    if(operator === "/") {
        if(operand2 === 0) throw new Error("Can't divide by zero");
        return operand1 / operand2;
    }
    if(operator === "^") return Math.pow(operand1,operand2);
    if(operator === "%") return operand1 % operand2;
}

function performEvaluation(operandStack,operatorStack){
    let operand2 = operandStack.pop();
    let operand1 = operandStack.pop();
    let operator = operatorStack.pop();
    operandStack.push(performOperation(operand1,operand2,operator));
}

function evaluateString(inputString){
    
    if(typeof inputString !== "string") return displayError();
    
    let operatorStack = [];
    let operandStack = [];
    const expressionArray = convertExpressionToArray(inputString);

    for(let value of expressionArray){

        if(typeof value === "number") operandStack.push(value);

        else if(value === "(") operatorStack.push(value);
        
        else if(value === ")"){
            while(operatorStack.length > 0 && operatorStack[operatorStack.length-1] !== "("){
                performEvaluation(operandStack,operatorStack);
            }
            operatorStack.pop();
        }
        
        else{
            if(findPrecedence(value) <= findPrecedence(operatorStack[operatorStack.length-1])){
                while(operatorStack.length > 0 && findPrecedence(value) <= findPrecedence(operatorStack[operatorStack.length-1])){
                    performEvaluation(operandStack,operatorStack);
                }
            }
            operatorStack.push(value);
        }
    }

    while(operatorStack.length > 0 ){
        if(operandStack.length-1 <= 0) return displayError();
        performEvaluation(operandStack,operatorStack);
    }

    return operandStack[operandStack.length-1];
}



console.log(evaluateString("2*(5*(3+6))/15-2"));





