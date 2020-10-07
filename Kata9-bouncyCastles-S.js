//calc total volume of attraction
//4 function
//1 - calc vol of sphere; given radius
//2 - calc vol of cone; given radius & height
//3 - calc vol of prism; given height, width, depth
//4 - given array of diff shape that makes up one attraction; use 1-3 to calc volume

const PI = Math.PI;

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

const sphereVolume = radius => {
  return 4/3 * PI * (Math.pow(radius, 3));
}
//console.log(sphereVolume(40));
//console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
  return 1/3 * PI * (Math.pow(radius, 2)) * height;
}
//console.log(coneVolume(3,5));
//console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => {
  return height * width * depth;
}
//console.log(prismVolume(3, 4, 5))
//console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = attraction => {
  let totalVolume = 0;
  for (let i = 0; i < attraction.length; i++){
      //console.log(attraction[i]);
    if (attraction[i].type === "sphere"){
      totalVolume += sphereVolume(attraction[i].radius);
      //console.log(totalVolume);
    } else if (attraction[i].type === "cone"){
      totalVolume += coneVolume(attraction[i].radius, attraction[i].height);
      //console.log(totalVolume);
    } else if (attraction[i].type === "prism"){
      totalVolume += prismVolume(attraction[i].height, attraction[i].width, attraction[i].depth);
    }
  }
  return totalVolume;
}
console.log(totalVolume(duck));
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
