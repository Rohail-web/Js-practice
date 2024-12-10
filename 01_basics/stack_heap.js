             //stack memory(copy)
             // use for primitive 
             // number,string,boolean,bigint,symbol,null
let myname = "rohail"
let namecalled = myname

 namecalled = "abc"

console.log(namecalled)


                    // Heap Memory(refrence)
                    // use for non-primitive
                    // array object function

let user1 = {
    email : "123@gmai.com",
    name : "abc"
}

let user2 = user1
user2.name = "ali"
console.log(user1.name);
console.log(user2.name);


