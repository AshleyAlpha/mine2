var sideSum1 = function(firstvalue, secondvalue) {
    return firstvalue + secondvalue;
  };
  
  var sideSum2 = function(secondvalue, thirdvalue) {
    return secondvalue + thirdvalue;
  };
  
  var sideSum3 = function(firstvalue, thirdvalue) {
    return firstvalue + thirdvalue;
  };
  function run(){
  
     var firstvalue=document.getElementById('one').value;
     var secondvalue=document.getElementById('two').value;
     var thirdvalue=document.getElementById('three').value;
     var array=[firstvalue,secondvalue,thirdvalue];
     
     var text;
      if(sideSum1(firstvalue,secondvalue) <= thirdvalue &&sideSum1(secondvalue,firstvalue)<= thirdvalue||
       sideSum2(secondvalue,thirdvalue) <= firstvalue && sideSum2(thirdvalue,secondvalue) <= firstvalue ||
        sideSum3(firstvalue,thirdvalue) <= secondvalue && sideSum3(thirdvalue,firstvalue)<= secondvalue){
        text="then, this is not a triangle"
     }
     else if(firstvalue === secondvalue && secondvalue === thirdvalue){
         text = "then, this is Equilateral Triangle.";
     }
      // this is Equivalent Triangle
  
     else if(firstvalue===secondvalue || firstvalue===thirdvalue || secondvalue===thirdvalue) {
         text="then, this is Isoscele Triangle.";
     }
     // this is Isoscele Triangle
     else if(firstvalue!==secondvalue && firstvalue!==thirdvalue &&secondvalue!==thirdvalue){
         text="Scalene Triangle."
     }
     // this is Scalene Triangle
  
  
     else{
         text = "Not a Triangle.";
     }
     document.getElementById("demo").innerHTML = "The values are then, this i ["+array+"]"+" ";
     document.getElementById('demo').innerHTML += text;

  }