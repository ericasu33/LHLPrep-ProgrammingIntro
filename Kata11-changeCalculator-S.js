//given 2 param - total $, and $ given to cashier 
//both are given as whole numbers in cents. ex: $10 = 1000; $1 = 100
//return object - ex: {twoDollar: 1, dime: 1, penny: 1}
//omit types of chg that is not being given back in the output obj

const calcChange = (total, cash) => {
  const change = cash - total;
  const dollarArr = [
    ["twentyDollar", 2000],
    ["tenDollar", 1000],
    ["fiveDollar", 500],
    ["twoDollar", 200],
    ["oneDollar", 100],
    ["quarter", 25],
    ["dime", 10],
    ["nickel", 5],
    ["penny", 1]
  ];

  let counted = 0;
  let changeOutput = {};
  let quantity = 0;

  for (let i = 0; i < dollarArr.length; i++) {
    //console.log(dollarArr[i][1]);
    quantity = Math.floor((change - counted)/dollarArr[i][1]);
    if (quantity > 0) {
      counted += quantity * dollarArr[i][1];
      changeOutput[dollarArr[i][0]] = quantity; 
    }     
  }
  //console.log(`change: ${change}`);
  //console.log(`counted: ${counted}`);
  return changeOutput;
};

console.log(calcChange(1787, 2000));
console.log(calcChange(2623, 4000));
console.log(calcChange(501, 1000));


// const calcChange = (total, cash) => {
//   const change = 3747;
//   console.log(3747);

//   let counted = 0;

//   const twentyDollar = Math.floor(change/2000);
//   counted = (twentyDollar * 2000);
  
//   const tenDollar = Math.floor((change - counted)/1000);
//   counted += (tenDollar * 1000);
  
//   const fiveDollar = Math.floor((change - counted)/500);
//   counted += (fiveDollar * 500);

//   const twoDollar = Math.floor((change - counted)/200);
//   counted += (twoDollar * 200);

//   const oneDollar = Math.floor((change - counted)/100);
//   counted += (oneDollar * 100);

//   const quarter = Math.floor((change - counted)/25);
//   counted += (quarter * 25);

//   const dime = Math.floor((change - counted)/10);
//   counted += (dime * 10);

//   const nickel = Math.floor((change - counted)/5);
//   counted += (nickel * 5);

//   const penny = Math.floor((change - counted)/1);
//   counted += (penny * 1);


//   console.log(twentyDollar);
//   console.log(tenDollar);
//   console.log(fiveDollar);
//   console.log(twoDollar);
//   console.log(oneDollar);
//   console.log(quarter);
//   console.log(dime);
//   console.log(nickel);
//   console.log(penny);
//   console.log(counted);
// }


