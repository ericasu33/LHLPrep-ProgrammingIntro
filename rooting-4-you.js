//best vegetable
//two param: veggies (arry of obj), characteristic (redness || plumpness)
//output: name of veggie subimtter


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 12,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 99,
    plumpness: 3
  }
]
//console.log(vegetables[0]["redness"]);

const metric = 'redness'

const judgeVegetable = (vegetables, metric) => {
  let score = 0;
  let winner;
  for (let i = 0; i < vegetables.length; i++) {
    //console.log(vegetables[i]);
    //console.log(vegetables[i].submitter + " : " + vegetables[i][metric]);
    if (vegetables[i][metric] > score) {
      score = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  //console.log(`score is ${score}`);
  //console.log(`winner is: ${winner}`)
  return winner;
}

console.log(judgeVegetable(vegetables, metric));