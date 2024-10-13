// primitive Data Types

// 7 Types: String , Number, Boolean , null, undefined ,Symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);

const bigNumber=3456789344566832n


// Reference (Non primitive)

// Array ,objects, Functions
const heroes=["shaktiman","naagraj","doga"]//arrays
let myobj={
    name:"shailendra",
    age:19,
}// objects
console.log(myobj)
// function datatypes

const myFunction=function(){
    console.log("Hello world");

}
console.log(typeof myFunction)
console.log(typeof heroes);
console.log(typeof anotherid);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof isLoggedIn);
console.log(typeof bigNumber);


// return types of these  Data types
/*

function //function
object // array
symbol // symbol
object  // Null
undefined // undefined
boolean  // booolean
bigint  //  bigint
*/
