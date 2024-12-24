// const fstpromise = new Promise((resolve,reject)=>{
//     const error = false
//     if (!error) {
//         resolve({username : "rohail" ,  e_mail : "123@gmail.com"})
//     }else{
//         reject("Something went wrong")
//     }
// })
// fstpromise
// .then((user)=>{
//     console.log(user);
//     return user
// })
// .catch((error)=>{
//     console.log(error); 
// })

// const Sndpromise = new Promise((resolve,Reject)=>{
//     setTimeout(() => {
//         resolve({username : "rohail",e_mail : "123@gmail.com" } )
//     }, 1000);
// })
// Sndpromise
// .then((user)=>{
// console.log("data recieved");  
// console.log(`username : ${user.username}`);
// console.log(`e_mail : ${user.e_mail}`);
// })
// .catch((error)=>{
//     console.log("error");
// })
// .finally(()=>{
//     console.log("This promise is resolved either rejected ");

// })
// const firstpro = new Promise((resolve,reject)=>{
//     const error = false
//     if (!error) {
//         resolve({name : "rohail", email : "123@gmail.com"})
//     }else{
//         reject("Some thing went wrong")
//     }
// })
// firstpro
// .then((user)=>{
//     console.log(user);
//     return user  
// })
// .then((user)=>{
//     console.log(user.name);
//     return user    
// })
// .then((user)=>{
//     console.log(user.email);
// })
// .catch((error)=>{
//     console.log(error);
// })

// const promisefive = new Promise((res, rej) => {

//     const error = false
//     if (!error) {
//         res({ username: "javascript", password: "123" })
//     } else {
//         rej("ERROR! JS WENT WRONG")
//     }
//     promisefive

//     })
// const myasyncfunct = async () => {
//     try {

//         const Response = await promisefive;
//         console.log("promise response :", Response);

//         const response = await fetch('https://api.github.com/users/Rohail-web');
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }
// myasyncfunct();

// const promisesix = new Promise((res,rej)=>{
//     const error = true
//     if (!error) {
//         res({name : "rohail", email : "123@gmail.com"})
//     }else{
//         rej("Something was wrong")
//     }
// })
// const myasyfunct = async () => {
//     try {
//         const response = await promisesix;
//         console.log("resolve cleared :", response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// myasyfunct();

const firstpro = fetch("https://jsonplaceholder.typicode.com/posts")
firstpro
.then((response)=>{
 if (!response.ok) {
    throw new Error("Something went wrong");
 }
 return response.json()
})
.then((data)=>{
    const specific_data = data.map((item)=>({
        id : item.id,
        title : item.title
    }))
    console.log(specific_data);
})
.catch((error)=>{
    console.error(error);
    
})




