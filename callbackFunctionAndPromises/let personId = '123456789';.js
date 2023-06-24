function firstFunctionCallback(response) {
    secondFunction(response.dob, secondFunctionCallback);
}

function secondFunctionCallback(response) {
  thirdFunction(response.name, thirdFunctionCallback);
}

function thirdFunctionCallback(response) {
    // And so on…
}

async function firstFunction(personId, callbackFn) {
  let res = await fetch(`http://example.com/user/dob?id=${personId}`);

  callbackFn(res);
}

async function secondFunction(dob, callbackFn) {
  let res = await fetch(`http://example.com/user/name?dob=${dob}`);

  callbackFn(res);
}

async function thirdFunction(name, callbackFn) {
  let res = await fetch(`http://example.com/user/mo-no?name=${name}`);

  callbackFn(res);
}


let personId = '123456789';
firstFunction(personId, firstFunctionCallback);