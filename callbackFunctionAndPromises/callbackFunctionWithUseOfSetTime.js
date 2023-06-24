//callback Function
//scenario
    // 1.register
    // 2.send-mail 
    // 3.login
    // 4.get-user-Data 
    // 5.dispaly user data


function register(callbackFn){
    setTimeout(() => {
        console.log("Register End");
        callbackFn();
    },5000);
}

function sendMail(callbackFn){
    setTimeout(() => {
        console.log("Email End");
        callbackFn();
    },2000);
}

function login(callbackFn){
    setTimeout(() => {
        console.log("Login End");
        callbackFn();
    },4000);
}

function getUserData(callbackFn){
    setTimeout(() => {
        console.log("User Data Got");
        callbackFn();
    },2000);
}

function displayUserData(){
    setTimeout(() => {
        console.log("Display User Data");
    },1000);
}


//callback hell

register(function(){
    sendMail(function(){
        login(function(){
            getUserData(function(){
                displayUserData();
            });
        });
    });  
});



// return Promise.resolve(true)
//     .then(() => {
//         return register();
//     })
//     .then((_regResponse) => {
//         return sendMail();
//     })
//     .then((_sendMailResponse) => {
//         return login();
//     })
//     .then((_loginResponse) => {
//         return getUserData();
//     })
//     .then((_userDataResponse) => {
//         return displayUserData();
//     });



//     return Promise.resolve(true).then().then().then().then()


//     let myPromise = new Promise(function(resolve, reject) {
        
//     });

//     myPromise.then((_response) => {})