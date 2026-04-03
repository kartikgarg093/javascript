let person={
    name:"john",
    age:30
};
console.log(person.name);
console.log(person["age"]);
console.log(person);

let a={
    name:"Alice",
    draw:function(){
        console.log("Drawing...");
    }
}
console.log(a.draw);
console.log(a.draw());
console.log(a);