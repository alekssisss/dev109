myImages = ["https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
"https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg",
"https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];


var captionImages =["Seattle","Los Angeles","San Francisco","New York","Chicago"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


function autoSlide(){
    if (document.getElementById("auto").checked)
     next(); 
    }
    
    
    setInterval(autoSlide,2000); // Next
    
