// q7: 
// Enter number of electricity units consumed and calculate amount to pay, based on the rules 
//below
// For first 50 units, Rs: 1/unit
// For next 100 units, Rs.2/unit
// For next 100 units, Rs. 3/ units
// For units above 250, Rs.4/units
// For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.

// 40units => 40 ruppes 

// 90 units => 50*1 +  40*2 = 130

// 200 units => 50*1 + 100*2 + 50*3 = 50 + 200 + 150 = 400
// 400 + 400*0.2 = 480
units=200
if(units>150 || units<=200){
    bill=(1*50)+(100*2)+(50*3)
    console.log("your bill before surcharge is ",bill)
    surcharge=(0.20*bill)+bill
    console.log("your bill after surcharge is ",surcharge)
}
else if(units<=50){
    bill=1*50
    console.log("your bill is ",bill)
    
}
else if(units>50 || units<=150){
bill=(1*50)+(100*2)
console.log("your bill is ",bill)
}
