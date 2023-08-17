const income = "75000"
let taxRate;

switch (true){
    
    case income <= 50000 :
         taxRate = 10
        // console.log(`Your tax rate is ${taxRate}.`)
        break;
    case income > 50000 && income <= 100000 :
        taxRate = 20
        // console.log(`Your tax rate is ${taxRate}.`)
        break;
    case income > 100000 :
        taxRate = 30
        // console.log(`Your tax rate is ${taxRate}.`)
        break;
    default:
       console.log("Invalid")
}
    console.log(`Your tax rate is ${taxRate}%.`);