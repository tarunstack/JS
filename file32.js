const numbers = [10,20,30,40,50]
// let n1 = numbers[0]
// let n2 = numbers[1]
// console.log(n1);
// console.log(n2);

// const [n1,n2] = numbers
// console.log(n1);
// console.log(n2);     // this process is called as  destructuring

// introduced in ECMAscript


// rest operator


// const [n1,n2,...n3] = numbers
// console.log(n1);
// console.log(n2);
// console.log(n3);



// const [n1,,n2] = numbers     //skip values
// console.log(n1);
// console.log(n2);


const [n1,n2,n3 = 10] = [12,15,27]   //default values  //but if you also destructer then that only printed against defaultlyb assigned values

console.log(n1);
console.log(n2);
console.log(n3);
