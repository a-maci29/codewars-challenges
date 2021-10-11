const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) { //<-- setting up forloop, [i] = iteration, [i++] = counting
      if (i === 1) {
        catYears += 15; // actually expressing catYears + 15. '+=' is a shorthand for adding
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  } 



  /*
  var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24] <- is only running the math operation once after checking for if
    it is either 1 or 2, and will perform better
    This works because after the first and second year, the formula stays the same for both
    dog and cat years in relation to human years
  } */