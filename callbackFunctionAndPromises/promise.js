function register(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Register End");
            resolve();
        },5000);
    });
}

function sendMail(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Email End");
            resolve();
        },2000);
    })
}

function login(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Login End");
            resolve();
        },4000);
    });
}

function getUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("User Data Got");
            resolve();
        },2000);  
    });
}

function displayUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display User Data");
            resolve();
        },1000);
    });
}


register()
.then(sendMail)
.then(login)
.then(getUserData)
.then(displayUserData)


// .catch((err)=>{
//    console.log('Error: ', err);
// })


