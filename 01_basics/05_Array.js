const myarr = [1, 2, 3, 4, 5, 7]
console.log(myarr[0]);// calling array value by index

const myarr2 = new Array(0, 19, 89, 78, 99, 23)
myarr2.push(5)//use for adding last  in array
myarr2.pop()// use for removing last number in array
console.log(myarr2);

const newarr = ["rohail", "ali", "abdullah", "salman"]
newarr.unshift("sohail")// use for adding first in array
newarr.shift("sohail") // use for removing first in array
console.log(newarr);
const arr = newarr.join()
console.log(arr);


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[2]);
// Expected output: "fox"
console.log(typeof [words]);

console.log("A", myarr);
const A1 = myarr
console.log("A1", A1.slice(1, 3));
console.log("A1", A1)
console.log("B", myarr);                       // only key difference between slice and splice
const A2 = myarr                                // splice changes the original value and slice
console.log("A2", A2.splice(1, 3));             // does not change it

console.log("A2", A2);



