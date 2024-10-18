// let a=10
// const b=20
// var c=30
// let a=300
/* let a=300   // Global Scope
if(true){
    let a=10   // Local Scope
    const b=20
    console.log("INNER:",a)
}
console.log(a); */


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="shailendra"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
