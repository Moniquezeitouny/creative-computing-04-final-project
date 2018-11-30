
/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}


/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* START WRITING YOUR CODE BELOW */



function panning() {
  var shape1= document.getElementById("shape-2");
  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 500) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape1.style.height=width+ 'px';
    }
  }
  var correct= document.getElementById("correct");
  correct.style.display= "none";
}

function panning2() {
  var shape1= document.getElementById("shape-1");
  var shape2= document.getElementById("shape-2");
  var width= 2;
  var height= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 500) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      height++;
      shape1.style.width=width+ 'px';
      shape2.style.height=height+ 'px';
    }
  }
   
  //clear page
  var wish= document.getElementById("wish");
  wish.style.display= "none";
  var shape9= document.getElementById("shape-9");
  shape9.style.display= "none";
var shape7= document.getElementById("shape-7");
  shape7.style.display= "none";
var shape11= document.getElementById("shape-11");
  shape11.style.display= "none";
  var correct= document.getElementById("correct");
  correct.style.display= "none";

}


function panning3() {
  var shape3= document.getElementById("shape-3");
  var shape4= document.getElementById("shape-4");
  //turn text red
  // var shape2= document.getElementById("shape-2");
  // shape2.classList.add("text-2");

  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 500) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape3.style.width=width+ 'px';
      shape4.style.bottom=(width-640)+ 'px';


    }
  }

var correct1= document.getElementById("correct1");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      correct1.style.width=stretch+ '%';
     
      

    }
  }
  //clear page
  var shape1= document.getElementById("shape-1");
  var shape2= document.getElementById("shape-2");
  // var shape9= document.getElementById("shape-9");
  var wish= document.getElementById("wish");
  shape1.style.display= "none";
  shape2.style.display= "none";
  // shape9.style.display= "none";
  wish.style.display= "none";
  var correct= document.getElementById("correct");
  correct.style.display= "block";

}


function panning4() {
  var shape5= document.getElementById("shape-5");
  var shape6= document.getElementById("shape-6");
  //turn text red
  var shape2= document.getElementById("shape-2");
  shape2.classList.add("text-2");

  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 500) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape5.style.bottom=(width-550)+ 'px';
      shape6.style.right=(width-600)+ 'px';


    }
  }

var incorrect2= document.getElementById("incorrect2");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      incorrect2.style.width=stretch+ '%';
     
      

    }
  }
  //clear page
  var shape1= document.getElementById("shape-1");
  var shape2= document.getElementById("shape-2");
  var wish= document.getElementById("wish");
  shape1.style.display= "none";
  shape2.style.display= "none";
  wish.style.display= "none";
  var incorrect= document.getElementById("incorrect");
  incorrect.style.display= "none";
  var incorrectb= document.getElementById("incorrectb");
  incorrectb.style.display= "block";

}

//click on shape 5
function panning5() {
  var shape7= document.getElementById("shape-7");
  var shape8= document.getElementById("shape-8");
  //turn text red
  var shape2= document.getElementById("shape-2");
  shape2.classList.add("text-2");

  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 580) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape7.style.width=width+ 'px';
      shape8.style.right=(width-580)+ 'px';


    }
  }
  var correct2= document.getElementById("correct2");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      correct2.style.width=stretch+ '%';
      

    }
  }

  //clear page
  var shape5= document.getElementById("shape-5");
  var shape6= document.getElementById("shape-6");
  var shape7= document.getElementById("shape-7");
  shape7.style.display= "block";
  var wish= document.getElementById("wish");
  shape5.style.display= "none";
  shape6.style.display= "none";
  wish.style.display= "none";
  var correctb= document.getElementById("correctb");
  correctb.style.display= "block";
}

//click on shape 6
function panning6() {
  var shape9= document.getElementById("shape-9");
  var shape10= document.getElementById("shape-10");
  //turn text red
  var shape2= document.getElementById("shape-2");
  shape2.classList.add("text-2");

  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 650) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape9.style.height=width+ 'px';
      shape10.style.bottom=(width-700)+ 'px';


    }
  }
   var incorrect1= document.getElementById("incorrect1");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      incorrect1.style.width=stretch+ '%';
      

    }
  }

  //clear page
  var shape5= document.getElementById("shape-5");
  var shape6= document.getElementById("shape-6");
  var wish= document.getElementById("wish");
  var shape9= document.getElementById("shape-9");
  shape9.style.display= "block";
  shape5.style.display= "none";
  shape6.style.display= "none";
  wish.style.display= "none";
  var shape12= document.getElementById("shape-12");
  shape12.style.display= "none";
  var incorrect= document.getElementById("incorrect");
  incorrect.style.display= "block";
}

//click on shape 3
function panning7() {
  var shape11= document.getElementById("shape-11");
  var shape12= document.getElementById("shape-12");
  //turn text red
  var shape2= document.getElementById("shape-2");
  shape2.classList.add("text-2");

  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 650) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape11.style.right=(width-650)+ 'px';
      shape12.style.height=width+ 'px';


    }
      }

var incorrect1= document.getElementById("incorrect1");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      incorrect1.style.width=stretch+ '%';
     
      

    }
  
  }
  //clear page
  var shape3= document.getElementById("shape-3");
  var shape4= document.getElementById("shape-4");
  var wish= document.getElementById("wish");
  shape3.style.display= "none";
  var shape12= document.getElementById("shape-12");
  shape12.style.display= "block";
  var shape11= document.getElementById("shape-11");
  shape11.style.display= "block";
  var incorrect= document.getElementById("incorrect");
  incorrect.style.display= "block";
  shape4.style.display= "none";
  wish.style.display= "none";
  var shape13= document.getElementById("shape-13");
  shape13.style.display= "none";
}



//click on shape 4
function panning8() {
  var shape13= document.getElementById("shape-13");
  var shape14= document.getElementById("shape-14");
  //turn text red
  var shape2= document.getElementById("shape-2");
  shape2.classList.add("text-2");

  var width= 2;
  //setINterval(function, time in miliseconds)
  var interval= setInterval (frame,5);
  function frame(){
    if (width == 600) {
      //clear interval= stop running
      clearInterval(interval)

    } else {
      //increments the width by 1 every 5 milliseconds
      width++;
      shape13.style.height=width+ 'px';
      shape14.style.right=(width-600)+ 'px';

     }
      }

var correct2= document.getElementById("correct2");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      correct2.style.width=stretch+ '%';

    }
  
  }
  //clear page
  var shape3= document.getElementById("shape-3");
  var shape4= document.getElementById("shape-4");
  var wish= document.getElementById("wish");
  shape3.style.display= "none";
  shape4.style.display= "none";
  wish.style.display= "none";
  var shape13= document.getElementById("shape-13");
  shape13.style.display= "block";
  var correctb= document.getElementById("correctb");
  correctb.style.display= "block";
}


function panninga() {
  var final1= document.getElementById("final-1");
  final1.classList.add("final-1");
  final1.style.display= "block";
  // final1.style.zIndex = 100;

  
  var incorrect3= document.getElementById("incorrect3");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      incorrect3.style.width=stretch+ '%';

    }
  }

  var shape7= document.getElementById("shape-7");
  shape7.style.display= "none";
  var shape8= document.getElementById("shape-8");
  shape8.style.display= "none";
  var shape9= document.getElementById("shape-9");
  shape9.style.display= "none";
  var shape10= document.getElementById("shape-10");
  shape10.style.display= "none";
  var shape11= document.getElementById("shape-11");
  shape11.style.display= "none";
  var shape12= document.getElementById("shape-12");
  shape12.style.display= "none";
   var final2= document.getElementById("final-2");
  final2.style.display= "none";

  var incorrectc= document.getElementById("incorrectc");
  incorrectc.style.display= "block";
  //   final2.style.zIndex = -50;
  // final3.style.zIndex = -50;
  // final4.style.zIndex = -50;

 
}
 


 function panningb() {
  var final1= document.getElementById("final-1");
  final1.classList.add("final-1");
  final1.style.display= "block";
  // final1.style.zIndex = 100;


var correct3= document.getElementById("correct3");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      correct3.style.width=stretch+ '%';

    }
  }
  var shape7= document.getElementById("shape-7");
  shape7.style.display= "none";
  var shape8= document.getElementById("shape-8");
  shape8.style.display= "none";
  var shape9= document.getElementById("shape-9");
  shape9.style.display= "none";
  var shape10= document.getElementById("shape-10");
  shape10.style.display= "none";
  var shape11= document.getElementById("shape-11");
  shape11.style.display= "none";
  var shape12= document.getElementById("shape-12");
  shape12.style.display= "none";
  // var final2= document.getElementById("final-2");
  // final2.style.display= "none";
  var correctc= document.getElementById("correctc");
  correctc.style.display= "block";
  var final2= document.getElementById("final-2");
  final2.style.display= "none";

}



function panningc() {
  var final2= document.getElementById("final-2");
  final2.classList.add("final-2");
  final2.style.display= "block";
  final2.style.zIndex = 1000;
  //  final1.style.zIndex = -100;
  // final3.style.zIndex = -50;
  // final4.style.zIndex = -50;



var correct3= document.getElementById("correct3");
  var stretch= 0;
  //setINterval(function, time in miliseconds)
  var interval2= setInterval (stretch2,10);
  function stretch2(){
    if (stretch == 100) {
      //clear interval= stop running
      clearInterval(interval2)

    } else {
      //increments the width by 1 every 5 milliseconds
      stretch++;
      correct3.style.width=stretch+ '%';

    }
  }
  var shape7= document.getElementById("shape-7");
  shape7.style.display= "none";
  var shape8= document.getElementById("shape-8");
  shape8.style.display= "none";
  // var shape9= document.getElementById("shape-9");
  // shape9.style.display= "none";
  // var shape10= document.getElementById("shape-10");
  // shape10.style.display= "none";
  var shape11= document.getElementById("shape-11");
  shape11.style.display= "none";
  var shape12= document.getElementById("shape-12");
  shape12.style.display= "none";

  var final1= document.getElementById("final-1");
  final1.style.display= "none";


  var final4= document.getElementById("final-4");
  final4.style.display= "none";


  var correctc= document.getElementById("correctc");
  correctc.style.display= "block";
  // final1.style.zIndex = -100;
  // final3.style.zIndex = -50;
  // final4.style.zIndex = -50;
}


 



