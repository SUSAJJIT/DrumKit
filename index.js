//what to do when buttons got clicked

// document.querySelector("button").addEventListener("click",handleclick);
// // handleclick()---can't put function like this bcz as soon as index.js 
// // is added to ine=dex.html,the fxn handleclick() get called,ans
// // will pop up on as soon as website start;


// function handleclick(){
//     alert("i got clicked");
// }

//alert on clicking each button

// document.querySelector(".set").addEventListener("click",function (){
//     alert("i got clicked");
// });

// or

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         alert("i got clicked");
//     });
    
// }


//anonymous fxn
// document.querySelector("button").addEventListener("click",function (){
//     alert("i got clicked");
// });



// function (){
//     alert("i got clicked");
// }

/// Playing Audio File in Js---Lecture--165

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
//         console.log(this.style.color="green");
//     });
    
// }

// var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();



/// creating objects in js

// var bellBoy={
//     name:Timmy,
//     age:19,
//     hasWorkPermit:true,
//     languages:["Hindi","english"],

// }

// creating "Constructor Function"  in js--first letter of constructor(here BellBoy) must be Capital.

// function BellBoy(name,age,hasWorkPermit,languages){
//     this.name=name;
//     this.age=age;
//     this.hasWorkPermit=hasWorkPermit;
//     this.languages=languages;

// }

// var bellBoy1= new BellBoy(timmy,19,true,["hindi","english"]);



//play sounds on pressing drum buttons at screeen





// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
//          switch (this.innerHTML) {
//             case "w":
//                 var audio=new Audio("sounds/tom-1.mp3");
//              audio.play();
//                 break;

//                 case "a":
//                 var audio=new Audio("sounds/tom-2.mp3");
//              audio.play();
//                 break;

//                 case "s":
//                 var audio=new Audio("sounds/tom-3.mp3");
//              audio.play();
//                 break;

//                 case "d":
//                 var audio=new Audio("sounds/tom-4.mp3");
//              audio.play();
//                 break;

//                 case "j":
//                 var audio=new Audio("sounds/snare.mp3");
//              audio.play();
//                 break;

//                 case "k":
//                 var audio=new Audio("sounds/crash.mp3");
//              audio.play();
//                 break;

//                 case "l":
//                 var audio=new Audio("sounds/kick-bass.mp3");
//              audio.play();
//                 break;
         
//             default:
//                 console.log();
//                 break;
//          }
//     });
    
// }

                      ///  OR


///  OR Playing sound on pressing Keyboards buttons

var numberofDrumButtoms=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrumButtoms;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML=this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
   });
}



// Playing sound on pressing Keyboards buttons

document.addEventListener("keydown",function(event) {
   makeSound(event.key);
   buttonAnimation(event.key);

   
});

function makeSound(key){
   switch(key){

      case "w":
                var audio=new Audio("sounds/tom-1.mp3");
             audio.play();
                break;

                case "a":
                var audio=new Audio("sounds/tom-2.mp3");
             audio.play();
                break;

                case "s":
                var audio=new Audio("sounds/tom-3.mp3");
             audio.play();
                break;

                case "d":
                var audio=new Audio("sounds/tom-4.mp3");
             audio.play();
                break;

                case "j":
                var audio=new Audio("sounds/snare.mp3");
             audio.play();
                break;

                case "k":
                var audio=new Audio("sounds/crash.mp3");
             audio.play();
                break;

                case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
             audio.play();
                break;
         
            default:
                console.log();
                break;

   }

}

function buttonAnimation(currentKey){

   //to identify the pressed button

   var activeButton=document.querySelector("." + currentKey);
 
   // to give animation to buttons when pressed by adding class "pressed" from "styles.css"
   

   activeButton.classList.add("pressed");

   // to remove animation/appear like blink effect after certain time interval

   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100);
}