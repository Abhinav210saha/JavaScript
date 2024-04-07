// sinleton
// object.create

const bank = {}

bank.id=1
bank.HolderName="Abhinav"
bank.type="Saving"
bank.balance=19897396

// console.log(Object.keys(bank))
// console.log(Object.values(bank));
// console.log(Object.entries(bank));

const course ={

    courseNmae:"Java Script",
    price:999,
    courseInstructor:"Harry"
}

const { courseInstructor: instructor }=course  // OBJECT DESTRUCTUREING

console.log(instructor);                  


