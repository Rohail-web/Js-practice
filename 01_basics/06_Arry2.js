const marvel_heroes = ["Ironman","Thor","hulk"]
const dc_heroes = ["superman","batman","Flash"]

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes); concate use to merge 2 arrays

const all_heroes = [...marvel_heroes,...dc_heroes]//spread method use to merge to arrays
console.log(all_heroes);

const another_array = [1,2,3,4,[2,3],6,7,8,[4,5,[8,7]]]
const real_another_array = another_array.flat(3)//it is use to put in one array 
console.log(real_another_array);

const arr = "rohail"
console.log(Array.isArray(arr));//for  asking is that an array
console.log(Array.from(arr));// converting a string into array

let score1 = 100
let score2= 200                     // use to put set of elements in array
let score3 = 300
console.log(Array.of(score1,score2,score3));



