let side1 = 2;
let side2 = 3;
let side3 = 4;

function checkTriangleType(side1, side2, side3){
    if(side1===side2 && side2 ===side3) return "Equilateral Triangle";
    if(side1 === side2 || side2===side3 || side1 ===side3) return "Isocale Triangle"

    return "scalene Triangle"
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(2, 3, 5));
console.log(checkTriangleType(3, 3, 4));


