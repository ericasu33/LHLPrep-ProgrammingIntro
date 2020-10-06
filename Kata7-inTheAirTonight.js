//trigger msg when air is too polluted
//param: samples, threshold
//samples => array of strings: clean or dirty
//threshold: decimals ex: 0.4 reps 40%; 
//less than threshold, return Clean; else Polluted

const checkAir = (samples, threshold) => {
  let dirty = 0;
  for (let i = 0; i < samples.length; i++){
    //console.log(samples[i]);
    if (samples[i] === "dirty"){
      dirty++;
    }
  }

  let actualQuality = dirty/samples.length;
  return actualQuality > threshold ? "Polluted" :  "Clean";
  
  // if (actualQuality > threshold){
  //   return "Polluted";
  // } else {
  //   return "Clean";
  // }
}


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); //Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); //Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) //Clean