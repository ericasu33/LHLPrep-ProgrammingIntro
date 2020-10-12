//given url encoded string of key-value pairs
//return a object
//URL coding rules:
// %20 -> space
// key-value pair rep by "="
// multiple key-val pair separated by using "&"

const urlDecode = str => {
  let outputObj = {};
  let key = "";
  let val = "";
  let objKey = "";

  for (let i = 0; i < str.length; i++){
    if (str[i] === "%"){
      key += " ";
      val += " ";
      i += 3;
    }

    if (str[i] === "=") {
      key += "";
      objKey = key;
      // console.log(`objKey ${objKey}`);
      val = "";
      key = "";
      i++;
    }

    if (str[i] === "&"){
      key += "";
      // console.log(`findme: ${val}`);
      outputObj[objKey] = val;
      key = "";
      val = "";
      i++;
    }

    if (i === str.length - 1) {
      val += str[i];
      // console.log(`herehere ${val}`);
      outputObj[objKey] = val;
    }

    key += str[i];
    val += str[i];
    // console.log(`key ${key}`);
    // console.log(`val:${val}`);
  }

  // ----Using regex & .replace .split ----
  // let outputObj = {};
  // let strArr = str.replace(/%20/g, " ").split(/[&=]/);
  // // console.log(strArr);

  // for (let i = 0; i < strArr.length; i = i +2) {
  //   outputObj[strArr[i]] = strArr[i + 1];
  // }
  return outputObj;
}

console.log(urlDecode("duck=rubber")); //{duck: 'rubber'}
console.log(urlDecode("bootcamp=Lighthouse%20Labs")); //{bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); //{city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
//"lots of rain"

