// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)


function hero(bullets, dragons){
   let neededBullets = (dragons * 2)
   if(bullets >= neededBullets){
     return true;
   }
     else{
       return false
     }
}

//the number of bullets needed to live is the number of dragons x 2
//if the number of bullets is less than that number, return 'false'

function hero(bullets, dragons){
  return bullets >= dragons * 2
}

function hero(bullets, dragons){
//Get Coding!
return (bullets / 2 >= dragons) ? true : false;
}