


function stringy(size) {
  var arr = [];

  for(var i = 0; i < size; i++){
    if(i % 2 == 0){
      e = "1";
      arr.push(e);
//       console.log(e);
    }else{
      e = "0";
      arr.push(e);
//       console.log(e);
    }
  }
  
  return arr.join("");
}