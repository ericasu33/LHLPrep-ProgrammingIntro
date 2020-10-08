// given 3 param : all arry
// 1st arr of ingridients at A
// 2nd arr of ingridients at B
// arr of recipe objects (2 ingredient recipe)
// find recipe that utilizes one ingridient from A n from B
//DO NOT need to consider cases where one baker hv BOTH ingridients

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let recipe = "";
  for (let i = 0; i < recipes.length; i++){
    //console.log(recipes[i].ingredients);
    let inStockA = false;
    let inStockB = false;
    for (let j = 0; j < bakeryA.length; j++){
      if (bakeryA[j] === recipes[i].ingredients[0] || bakeryA[j] === recipes[i].ingredients[1]) {
        //console.log(`yes ${bakeryA[j]}`);
        inStockA = true;
      }
    }
    for (let j = 0; j < bakeryB.length; j++){
      if (bakeryB[j] === recipes[i].ingredients[0] || bakeryB[j] === recipes[i].ingredients[1]) {
        //console.log(`yes ${bakeryB[j]}`);
        inStockB = true;
      }
    }
    if (inStockA && inStockB) {
      recipe += recipes[i].name + " ";
    } 
  }
  return recipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'cream cheese']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));