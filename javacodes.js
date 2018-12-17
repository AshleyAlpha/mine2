
  function run(){
  
     var firstvalue=parseInt(document.getElementById('one').value);
     var secondvalue=parseInt(document.getElementById('two').value);
     var thirdvalue=parseInt(document.getElementById('three').value);
     var array=[firstvalue,secondvalue,thirdvalue];
     
     var text;
     if(firstvalue<=0 || secondvalue<=0 || thirdvalue<=0){
         text="undefined"
     }
     else if (
        (firstvalue + secondvalue <= thirdvalue &&
            secondvalue + firstvalue <= thirdvalue) ||
        (firstvalue + thirdvalue <= secondvalue &&
            thirdvalue + firstvalue <= secondvalue) ||
        (secondvalue + thirdvalue <= firstvalue && thirdvalue + secondvalue <= firstvalue)
    ) {
        text = " Not a Triangle";

    }

     
     
     else if(firstvalue===secondvalue && 
        firstvalue===thirdvalue && 
        secondvalue===thirdvalue) {
        text="it is Equilateral Triangle.";}

        // this is Equilateral Triangle

     else if(firstvalue === secondvalue ||
         secondvalue === thirdvalue || 
         thirdvalue===firstvalue){
         text = "it is Isoscele Triangle ."; }
    
      
     // this is Isoscele Triangle
     
     else if (firstvalue !== secondvalue && 
        firstvalue !== thirdvalue && 
        secondvalue !== thirdvalue){
        text="it is scalene triangle. ";}
    //this is scalene triangle

  
     else{
         text = "error.";
     }
     document.getElementById("demo").innerHTML = "The values are:["+array+"]"+"then, ";
     document.getElementById('demo').innerHTML += text;

  }