/* function sayMyname() {
    console.log("S")
    console.log("H")

    console.log("A")
    console.log("I")
    console.log("L")
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("R")
    console.log("A")
}
sayMyname()
sayMyname() */

// add Two Numbers
 /* function add_Two_Numbers(a,b){

    const c=a+b;
    console.log("the sum of a and b is "+c);

 }
 const result=add_Two_Numbers(20,79)
 console.log("Results:",result); */

 function add_Two_Numbers(a,b){

let c=a+b;
return c


 }
 const result= add_Two_Numbers(45,89);
 //console.log("Result",result)
// another way of writing the function 
 function loginUserMessage(username){
    if(username===undefined){ // if(!username) both are same thing but different way of writing the code 
        console.log("please enter the username ")
        return
    }
    return `${username} just logged in`
 }
 //console.log(loginUserMessage("Shailendra Kumar"))
 //console.log(loginUserMessage())

 function calculateCartprice(...num1){// it will take mutiline input
    return num1
 }
 console.log(calculateCartprice(200,400,500))

 const user={
    username:"hitesh",
    price:199
 }
 function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

 }
 //handleobject(user)
 handleobject({
    username:"sam",
    price:399
 })

 const mynewArray =[200,400,100,600]
 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(mynewArray))