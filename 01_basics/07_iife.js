//Imediatelly Invoked Functions Expressions(IIFE)

            //IIFE are used to prevent global variables pollution 

// ( () => {
//     console.log("rohail");
    
// })();

// (function chai() {
//     console.log("DB Connected");
    
// })();

// function user(name) {
//     console.log(`hi user ${name}`);   
// }
//    user("rohail") ; 
   

 
 function addnum(num1,num2) {
    let total = num1+num2
    return total
 }
let result = addnum(10,15)
console.log(result);
let result2 =addnum(20,25) 
console.log(result2);



 