function calculate(num1, num2, operation, callback) {
    let result;

    if(operation === "add"){
        result = num1 + num2;
    }
    else if(operation === "substract"){
        result = num1 - num2;
    }
    else if(operation === "multiply"){
        result = num1 * num2;
    }
    else if(operation === "divide"){
        result = num1 / num2;
    }
    else{
        return callback(new Error("Invalid Operation"));
    }

    callback(null, result)
}

function handleResult(error, result){
    if(error){
        console.error('Error', error);
    }
    else{
        console.log('Result', result);
    }
}

calculate(10, 5, 'add', handleResult);
calculate(10, 5, 'multiply', handleResult);
calculate(10, 0, 'divide', handleResult);
calculate(10, 5, 'substract', handleResult);
calculate(10, 5, 'module', handleResult);