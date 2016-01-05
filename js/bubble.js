//arrayX has 11 values that are not in order
arrayX = [1,9,-1,5,10,23,-2,7,4,5,1];
//var out is assigning array X to the text area output
var out = document.getElementsByName("output")[0];
//the for loop iterates through each value in arrayX -1
for (i = 0; i <= arrayX.length-1; i++)
  //out.value displays checking index i of arrayX values arrayX[i] vs arrayX[i + 1] then starts a new line.
  {
      out.value += "checking index " + i + " of " + arrayX.length + " values " + arrayX[i] + " vs " + arrayX[i + 1] + "\n";
  //if arrayX[i] is more then arrayX[i+1] assign a new variable named temp with array X and the first value will now be the value 
  //of arrayX[i+1].
    if (arrayX[i] > arrayX[i+1])
      {
        temp = arrayX[i+1];
        arrayX[i+1] = arrayX[i];
        arrayX[i] = temp;
        i = i-2;

  //out.value displays swapped is now arrayX. This process continues until each value is compared and the lower value is shuffled 
  //left
          out.value += "swapped, is now " + arrayX + "\n";
      }
  }
out.value += arrayX;