// const student = {
//     name:"John",
//     age:21
// }

// const names = ["John","Catht","Mike"]
// const [n1,n2] = names
// console.log(n1);
// console.log(n2);

const student = {
    name:"John",
    age:21,
    marks:{
        math:60,
        science:90

    }
}

// const {name,age} = student
// console.log(name);
// console.log(age);    // destructuring object // based on property name in object you destructure not space type as in array



// const {n1,n2} = student
// console.log(n1);    // property name of obj req or it will show undefined
// console.log(n2);



// const {name:userName} = student
// console.log(userName);  // by this we can give new name to the field while calling 
 

// const{city="amritsar"} = student
// console.log(city);   // taking here default value the value that is given in the {} if along with that if city field was in above origina;l obj then that will be printed 




const{marks:{math,science}} = student  // nested object is destrucred here   nested obj shown below that is also above
console.log(math);
console.log(science);

// nested obj marks : const student = {
//     name:"John",
//     age:21,
//     marks:{
//         math:60,
//         science:90

//     }
// }

