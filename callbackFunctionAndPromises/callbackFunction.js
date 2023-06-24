// method-1:

// async function getAllUsersList(callbackFn) {
//     let response = await fetch('https://fakestoreapi.com/users');
//     let data = await response.json();
//     callbackFn(data, printUserData);
// }

// function fetchUserData(usersData, callbackFn){
//     usersData.forEach(async (user) => {
//         let response = await fetch(`https://fakestoreapi.com/users/${user.id}`);
//         let userdData = await response.json();
//         callbackFn(userdData);
//     });
// }

// function printUserData(user) {
//     console.log('User email is: '+ user.email);
//     console.log('User phone is: '+ user.phone);
// }


// getAllUsersList(fetchUserData);



// method-2: 

async function getAllUsersList(callbackFn) {
    let response = await fetch('https://fakestoreapi.com/users');
    let data = await response.json();

    callbackFn(data,
        function(user) {
            console.log('User email is: '+ user.email);
            console.log('User phone is: '+ user.phone);
        }
    );
}

getAllUsersList(function(userdData, callbackFn){
    userdData.forEach(async (user) => {
        let response = await fetch(`https://fakestoreapi.com/users/${user.id}`);
        let userdData = await response.json();
        callbackFn(userdData);
    });
});

