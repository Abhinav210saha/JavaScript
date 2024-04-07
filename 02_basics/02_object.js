
// object litreral


const mySym=Symbol("key1") // symbol key {interview question}


const JsUser= {

    [mySym]:"mykey1", //symbol key Written in Square bracket 
    name:"Abhinav ",
    age:19,
    email:"abhionav129@gmail.com",

}
//console.log( JsUser["name"]);
//console.log( typeof JsUser[mySym]);

JsUser.email="shanu57@vgoogle.com"

Object.freeze(JsUser) // here we freeze the hole object we can`t change anything in object after freezeing 
JsUser.email="hgjgjhg435@chat.com"

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JsUser");
}

JsUser.greetingtwo= function() {
    console.log( `hello jsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
