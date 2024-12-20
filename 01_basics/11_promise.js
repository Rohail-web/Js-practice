const promiseone = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise just stated");
        resolve()
    }, 1000);  
})
promiseone.then(()=>{
    console.log("Task one Completed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi There");
        resolve()
    }, 1000);
})
.then(() =>{
    console.log("!");
})

const threepromise = new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve({username : "Rohail", e_mail : "rohail@gmail.com"})
}, 1000);
})
threepromise.then((user)=>{
    console.log(user);  
})

// const fourpromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const error = false
//         if (!error) {
//             resolve({Username : "abdullah", email : "123@gmail.com"})
//         }else{
//             reject('Something went wrong')
//         }
//     }, 1000);
// })
// fourpromise.then((user)=>{
//     console.log(user);
//     return user.Username;  
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
// console.log(error);
// })

const fourpromise = new Promise (()=>{
    
})