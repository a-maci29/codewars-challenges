function feast(beast, dish) {
  let result;
 if ((beast.charAt(0) === dish.charAt(0)) && (beast.charAt(beast.length -1) === dish.charAt(dish.length -1 ))) {
   result = true;
 } else {
   result = false;
 }
  return result;
}