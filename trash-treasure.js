//sorting trash
//2 param: trash, bins
//bins is obj: {waste:val, recycling:val, compost:val}

const smartGarbage = (trash, bins) => {
  //console.log(bins);
  // console.log(bins[trash]);
  if (bins[trash]){
    bins[trash] += 1;
  } else {
    return "We ain't taking that";
  }
  return bins;
}

console.log(smartGarbage('dog', { waste: 4, recycling: 2, compost: 5 }));