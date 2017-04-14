/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;
var foo = 0;
var boo = [foo - 1];

$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare)


  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}

function highlightASquare(){
  //This variable stores an array of the elements with the 'square' class
  var arrayOfSquares = $('.square');
  // adds highligh to box
$(arrayOfSquares[foo]).addClass('highlight');
foo++;
// removes highlight from box
$(arrayOfSquares[boo]).removeClass('highlight')
boo++;

// create something that brings highlight back to first box after the last one
if ( foo > numberOfSquares){
    foo = 0;
    boo = -1;
  }
}


//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);
}
