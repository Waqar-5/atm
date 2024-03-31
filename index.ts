#! /usr/bin/env node 
import inquirer from "inquirer"

let myBalance = 10000; // Dollar
let myPin = 4455;


let pinAnswer  = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter you pin",
            type: "number"
        }
    ]
)
      
// 44556  ===  4455  - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
   
    let operation = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices:["withdraw", "ckeck balance", "fastCash"]

            }
        ]
    );

    console.log(operation);
     
    if (operation.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );

       if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance")
      }else if (myBalance -= amountAns.amount) {
        console.log(`your remaining amount is: ${myBalance}`);    
    }
    };
    if (operation.operation === "ckeck balance") {
        console.log(`your balance is:  ${myBalance}`);
        
    }
    if (operation.operation === "fastCash") {
        let cash = await inquirer.prompt(
            [
                {
                    name: "options",
                    mesaage: "select any amount",
                    type: "list",
                    choices: ["1000", "2000", "5000", "6000" ],
                }
            ]
        );
        if (myBalance -= cash.options){
            console.log(`your remaining amount is: ${myBalance}`);
            
        }
    }
}else {
    console.log("Incorrect pin code");
}