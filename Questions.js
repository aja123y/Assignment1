// Q.1

const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}
let a = addTwoNumber(4, 3);
console.log(a);

// Q.2

const is_Valid = (num1, num2) => {
    if ((num1 >= 1 && num1 <= 10) && (num2 >= 5 && num2 <= 20)) {
        return true;
    }
    else {
        return false;
    }
}
let b = is_Valid(1, 20);
console.log(b);

// Q.3

const checkFunction = (num1, num2) => {
    if (num1 % 10 == 0 || num2 % 10 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let c = checkFunction(21, 11);
console.log(c);

// Q.4

const First_Digit = (num1) => {
    let remender;
    while (num1 > 0) {
        remender = num1 % 10;//7885%10=5=> 788%10=8 =>78%10=8 =>7%10=7
        num1 -= remender;//7885-5=7850=>  788-8=780 =>78-8=70 => 7-7=0
        num1 /= 10;//7850/10=785 => 780/10=78=> 70/10=>70=> 0/0
    }
    return remender;
}
let d = First_Digit(9685);
console.log(d);

// Q5

const Last_Digit = (num1) => {
    return num1 % 10;
}
let e = Last_Digit(5471);
console.log(e);



// Q6

const Find_the_remainder = (num1, num2) => {
    return num2 % num1;
}
let f = Find_the_remainder(2, 9);
console.log(f);

// Q7

const Multiply_two_number = (num1, num2) => {
    return num1 * num2;
}
let g = Multiply_two_number(2, 5);
console.log(g);

// Q8

const Sum_Average = (num1, num2, num3) => {
    return console.log(`Total marks ${num1 + num2 + num3}  Average${((num1 + num2 + num3) / 3)}`)
}
let h = Sum_Average(80, 58, 95);


// let num1=7885;
//     while(num1>0)
//     {
//         var remender = num1%10;//7885%10=5=> 788%10=8 =>78%10=8 =>7%10=7
//         num1-=remender;//7885-5=7850=>  788-8=780 =>78-8=70 => 7-7=0
//         num1/=10;//7850/10=785 => 780/10=78=> 70/10=>70=> 0/0
//     }  
//     console.log(remender);



let op= "+";
let a1=5;
let b2=8;
switch (op) {
    case "+":
        console.log(a1 + b2);
        break;
    case "-":
        console.log(a1 - b2);
        break;
    case "*":
        console.log(a1 * b2);
        break;
    case "/":
        console.log(a1 / b2);
        break;
        case "%":
        console.log(a1 % b2);
        break;
    default:
        {
            console.log("Enter valid Oprator..");
        }
}


Check_divisibility=(num1)=>
{
    if(num1%6==0 && num1%9==0)
    {
       return console.log("Divisible by both");
    }
    else 
    {
       return console.log("Not Divisible by both");
    }
}
Check_divisibility(36);


isEligible=(age)=>
{
    if(age>=18)
    {
        return console.log("Eligible for Voting");
    }
    else
    {
        return console.log("Not Eligible for Voting");
    }
}
isEligible(42);


findRelationship=(X,Y)=>
{
    if(X>Y)
    {
        return console.log("X Greater then Y");
    }
    else if(X<Y)
    {
        return console.log("X Smaller then y")
    }
    else
    {
       return console.log("X equal to y")
    }
}
findRelationship(7,9)


// *******************************************************************************
 var str = "Ajay Dhiman ji kase ho aapp";
 str.split(" ")
 .map(fnction(word))
 {
    return word.split("").reverse().join("")
 }









