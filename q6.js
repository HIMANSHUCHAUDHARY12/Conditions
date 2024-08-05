//sum is even or odd
//and also check
//product is divisible is 8 or not
let a=10
let b=20
sum=a+b
if(sum%2==0){
    console.log("sum is even")
}
else{
    console.log("sum is odd") 
}// uper wala if ka scope bas yahi tak hai
product=a*b
// ye dusra if hai iska scope iske else tak hai
if(product%8==0){
    console.log("product is divisible is 8") 
}
else{
    console.log("product is not divisible is 8") 
}