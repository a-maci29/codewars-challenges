/* original: https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */

function rentalCarCost(d) {
  //let d = (number of days * 40) - 20 or 50
  //if d > 3 || d < 7, then -$20
  //car costs $40 per day
  
  //from 3-7 days, total - $20
  

  //if d > 7,
  
  //7+ days, -$50
  let totalCost = (d * 40)
    if (d >= 3 && d < 7) {
      return (totalCost - 20)
    } if (d < 3)
        return (totalCost)
    if (d > 7) {
      } return (totalCost - 50)
    }


    //ALT:

    function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    }
  funtion rentalCarCost(d){
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 :0));
  //return (days * 40) - (if d >= 7) or (d >= 3) (return if 0)
}

    function rentalCarCost(d) {
        return d * 40 - (d >= 7 ? 50 : (d>= 3 ? 20 : 0));
    }

    function rentalCarCost(d) {
        return d * 40 - (d >= 7 ? 50 : (d>= 3 ? 20 : 0));
    }

    function rentalCarCost(d) {
        return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    }

    function rentalCarCost(d) {
        return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    }

    function rentalCarCost(d) {
        return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 :0));
    }