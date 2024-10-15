// singleton

// objects literals
//Object.create

const mySym=Symbol("key1")

const JsUser={
    name:"Shailendra",
    "full name":"Shailendra Kumar",
    [mySym]:"mykey1",
    age:18,
    Location:"Jaipur",
    email:"sky04062005@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="Shailendra@chatgpt.com"
//Object.freeze(JsUser) // when we freeze the object then no modification is possible

JsUser.email="Shailendra@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());