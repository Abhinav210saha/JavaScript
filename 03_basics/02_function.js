const user ={
    userName:"Abhinav",
    age:20
}

function hanldeObject (anyObject){
    console.log(`name is ${anyObject.userName} age is ${anyObject.age}`);
}

hanldeObject(user)

hanldeObject ( { userName:"Garav",age:23 })  // object pass to function   


//  passing array to function 

const MynewArray=[747,67843,776]

function getSecondValue (getarray){
      
    return getarray[2]
}

// console.log(getSecondValue(MynewArray));
console.log(getSecondValue([87985,768754,8979857,76349,7639]));