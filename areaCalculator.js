//3 functions : rectangle, triangle, circle
// rectangle: length × width
// triangle: base × height / 2
// circle: π × radius^2
// π = Math.PI
//paramters are always numebrs only
//if parameters are negative => undefined

const calcRectangleArea = (length, width) => {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  }
}

const calcTriangleArea = (base, height) => {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return base * height / 2;
  }
}

const calcCircleArea = radius => {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * radius * radius; 
  } 
}


console.log(calcRectangleArea(10, 5));     // should print 50
console.log(calcRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calcRectangleArea(10, -5));    // should print undefined

console.log(calcTriangleArea(10, 5)); // should print 25
console.log(calcTriangleArea(3, 2.5)); // should print 3.75
console.log(calcTriangleArea(10, -5)); // should print undefined

console.log(calcCircleArea(10)); // should print 314.159...
console.log(calcCircleArea(3.5)); // should print 38.484...
console.log(calcCircleArea(-1)); // should print undefined