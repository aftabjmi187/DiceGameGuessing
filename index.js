//funtion for genratig random number

let number;

const generatig_number=()=>{
   let n1=Math.random();
   let n2=n1*10;
   n2=Math.trunc(n2);
   n2=(n2%6)+1;
   number=n2;
   console.log(number);
}

function generateNumberButton(){
   console.log("clicked");
   document.querySelector("#section1").style.display="none";
   document.querySelector("#section2").style.display="none";
   document.querySelector("#section3").style.display="block";

   //setimeout fun show the funtionlity for tive given
   setTimeout(()=>{
      generatig_number();
      document.querySelector("#section1").style.display="none";
      document.querySelector("#section2").style.display="block";
      document.querySelector("#section3").style.display="none";
   },1000);
  
}
 // random number is 

function checkNumberCorrectness(){
   let value=document.getElementById("field").value;
   console.log(value)
   if(value>6 || value<1)
   {
     window.alert("Plase enter number between 1 to 6");
     return;
   }
   else{
      if(value==number){
         window.alert("You guess the right Number");
      }
      else{
         window.alert("You guess Wrong number");
      }
   }
}