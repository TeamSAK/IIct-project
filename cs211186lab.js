var a,b,c,d,e;

function obtainMarks() {

 a =document.getElementById('Math').value;
 b=document.getElementById('Phy').value;
 c=document.getElementById('Chem').value; 
 d =document.getElementById('comp').value;
 e =document.getElementById('eng').value; 
 document.getElementById('obtain').value =parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e);
}
function Percentage() {

 a =document.getElementById('Math').value;
 b= document.getElementById('Phy').value; 
 c= document.getElementById('Chem').value;
 d =document.getElementById('comp').value;
 e= document.getElementById('eng').value;
 document.getElementById('per').value =(parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e))/5;
}
function Grades(){

var g=document.getElementById('per').value;

if (g>80){ 
        document.getElementById('grd').value="A+";
} 
else if (g>70){ 
        document.getElementById('grd').value= "A";
}
else if (g>60){
        document.getElementById('grd').value = "B";
}
else if (g>50){
         document.getElementById('grd').value = "C";
}
else if (g>40){ tg56j67u6j
        document.getElementById('grd').value = "D";
}
else{
        document.getElementById('grd').value ="Fail";

}
}