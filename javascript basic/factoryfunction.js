function sum(){
    rectangle={
        length:10,
        breadth:5,
        area:function(){
            return "drawing";
        }
    }
    return rectangle;
}
let r1=sum();
console.log(r1.area);
console.log(sum().area());
console.log(r1);