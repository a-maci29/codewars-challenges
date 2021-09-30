function  calculateAge(birthYear, yearInRelation) {
  
  const difference = yearInRelation - birthYear

  if (yearInRelation > birthYear){
    if(difference === 1){
      return "You are 1 year old."
       } else { return `You are ${difference} years old.` 
    }
    } else if(yearInRelation < birthYear) {
      if(difference === -1){
        return "You will be born in 1 year."
      }else {
       return `You will be born in ${difference * -1} years.`
    } 
    }else {
      return "You were born this very year!"
    }
         
  }
  
  //if yearInRelation > birthYear, return futureAge
  //if birthYear > yearInRelation, return yearsUntilBorn

// original: https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript