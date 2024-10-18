const user ={
    username:"Shailendra",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)

    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this)

// function one(){
//     let username="shailendra"
//     console.log(this.username);

// }
// one()
// const chai =function(){
//     let username="shailendra "
//     console.log(this.username);
// }

// Arrow function
// 

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

const addTwo =(num1,num2) => num1+num2 // implicit return

console.log(addTwo(3,4))