const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log(area);



/*area = radius * radius * PI;
console.log("area:", area)
radius = 4;
console.log("area:", area)
area = radius * radius * PI;*/