const nodeList = document.querySelectorAll(".drum");


for (let i = 0; i < nodeList.length; i++){
    nodeList[i].addEventListener("click", function(){
       
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);

    });
}

document.addEventListener("keydown", function(event) {

    var keyPressed = event.key;
    makeSound(keyPressed);
})

function makeSound(inputType){
    switch (inputType) { 
        case "w":
            const crash = new Audio("./sounds/crash.mp3"); 
            crash.play();
            break;
  
            case "a":
            const tom1 = new Audio("./sounds/tom-2.mp3"); 
            tom1.play();
            break;
            
            case "s":
            const tom2 = new Audio("./sounds/tom-2.mp3"); 
            tom2.play();
            break;
            
            case "d":
            const snare = new Audio("./sounds/snare.mp3"); 
            snare.play();
            break;
            
            case "j":
            const tom3 = new Audio("./sounds/tom-3.mp3"); 
            tom3.play();
            break;
            
            case "k":
            const tom4 = new Audio("./sounds/tom-4.mp3"); 
            tom4.play();
            break;
  
            case "l":
            const kickBass = new Audio("./sounds/kick-bass.mp3"); 
            kickBass.play();
            break;
      
        default:
            console.log(inputType + " doesn't plays and sound!");
  
      }
}