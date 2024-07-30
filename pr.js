let  myemo  = document.getElementById('myemo');
function changeColor(event){
   // console.log(event);
  
}
new1.addEventListener("click",event =>{
    myemo.style.backgroundColor="tomato";
    myemo.textContent="ouch😊😂";
    });
new1.addEventListener('click',event=>{
    myemo.style.backgroundColor="blue";
    myemo.textContent="No😊😂";
}); 
new1.addEventListener('mouseover',event=>{
    myemo.style.backgroundColor="pink";
    myemo.textContent="click😊😂";
});     
