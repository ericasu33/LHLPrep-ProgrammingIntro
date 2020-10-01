// qualified voting stations 
// capacity : at least 20
// location: school or community center

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 10, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// index[1] needs to be >= 20
// index[2] needs to be school/community center

//for loop
const chooseStations = stations => {
  let qualifiedStns = [];

  for (let i = 0; i < stations.length; i++) {
    //console.log(stations[i]);
    if (stations[i][1] >= 20) {
      if (stations[i][2] === "school" || stations[i][2] === "community centre") {
      //console.log(stations[i][0 ]);
        qualifiedStns.push(stations[i][0]);
      }
    }
  }
  return qualifiedStns;
}
console.log(chooseStations(stations));

//for...of
const chooseStations = stations => {
  let goodStations = [];

  for (const station of stations) {
    const capacity = station[1];
    const location = station[2];

    if (capacity >= 20) {
      if (location === "school" || location === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));