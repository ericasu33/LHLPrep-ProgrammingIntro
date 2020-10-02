// param: cars, speed
// car = arr of car obj
// output: new obj with new property: speed, time

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

const carPassing = (cars, speed) => {
  let newObj = {
    "time": Date.now(),
    "speed": speed
  };
  cars.push(newObj);
  return cars;
}

console.log(carPassing(cars, speed));