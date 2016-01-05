/*First we use Math.random() to create a random number from 0 up to 1. For example, 0.5
Then we multiply by 5 to make the random number from 0 up to 5. For example, 0.5 * 5 = 2.5
Next we use Math.floor() to round down to a whole number. For example, Math.floor( 2.5 ) = 2
Finally we add 1 to change the range from between 0 and 4 to between 1 and 5 (up to and including 5)*/
var slaying = true;
//This sets youHit to a random number that's either 0 (which JavaScript reads as false) or 1 (which JavaScript reads as true).
var youHit = Math.floor(Math.random() * 2);
//This sets damageThisRound to a random number that's between 1 and 5 (up to and including 5).
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
while(slaying){
    if(youHit){
        console.log("you hit");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("congradulations you slew the dragon");
            slaying = false;
    } else { 
        youhit = Math.floor(Math.random() * 2);
    }
    
   } else {
        console.log("you missed and the Dragon ate you.");
        
        
    }
    slaying = false;
}
////////////////////////////////////////////////////////
var answer = prompt("pick a number from 1 to 3");

switch(answer) {
  case '1':
    console.log("you picked 1");
    break;
  case '2':
    console.log("you picked 2");
    break;
  case '3':
    console.log("you picked 3");
    break;
  default:
    console.log("pick a number between 1 and 3");
    break;
  
        
  // Add your code here!
  
}