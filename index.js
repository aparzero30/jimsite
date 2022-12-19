let navbar = document.getElementById("navbar");
let menuicon = document.getElementById("menu-icon");




menuicon.onclick = function(){

    navbar.classList.toggle("opennavbar")

    if(navbar.classList.contains("opennavbar")){
        menuicon.innerHTML ="close";  
     }
     else{
         menuicon.innerHTML="menu";
     }

}
















/*
$("#work").animate({right: $diff}).delay(3000);
$("#educ").animate({right: $diff2}).delay(3000);
$("#skills").animate({right: $diff3}).delay(3000);

*/

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry )=>{
  /*  console.log(entry)*/
    
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else{
      entry.target.classList.remove('show')
    }
  });


});

const slider = document.querySelectorAll('#slider')
slider.forEach((el) => observer.observe(el));




const observer1 = new IntersectionObserver((entries)=>{
  entries.forEach((entry )=>{
  /*  console.log(entry)*/
    
    if(entry.isIntersecting){
      entry.target.classList.add('buka')
    
    }
    else{
      entry.target.classList.remove('buka')
    }
    
  });


});

const imager = document.querySelectorAll('.image')
imager.forEach((el) => observer1.observe(el));





















//autoscroll

let x = document.getElementById("About")
let y = document.getElementById("Project")






  



$a=$("#About").width();

document.querySelector("#About").addEventListener("click",()=>{
  window.scrollTo(0,0);
});

document.querySelector("#Projects").addEventListener("click",()=>{


  if ($(".home").width()<1001){

    console.log($(".home").width());
  window.scrollTo(0,1350);

  }

  else{

    console.log($(".home").width());

    window.scrollTo(0,770);

  }




});



document.querySelector("#ContactMe").addEventListener("click",()=>{
  window.scrollTo(0,document.body.scrollHeight);
});


