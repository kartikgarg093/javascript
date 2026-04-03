//Arithmetic operator +,*,-,/,%,++,--
let a=10;
let b=5.0;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//Assignment operators +=,-=,*=,/=
let c=10;
console.log(c+=3);
console.log(c-=3);
console.log(c*=3);
console.log(c/=3);


//Comparison Opeartor ==,===,!=,>=,<=,!==
let d=23;
let s="23";
let e="34"
console.log(s==d);
console.log(s===d);
console.log(s!=e);

//ternary operator
let status=2;
status==23?console.log("True"):console.log("False")


//switch case

let day="Monday";
switch (day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Second day of the week");
        break;
    case "Thursday":
        console.log("third day of the week");
        break;
    case "Wednedday":
        console.log("Fourth day of the week");
    default:
        console.log("Invalid choice");
}