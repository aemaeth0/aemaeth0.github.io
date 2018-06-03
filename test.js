var numbers = []; //initialize empty array for numbers i.e. 1,2,3 etc..
var operators = []; //intializes empty array for operators i.e. +,-,/,*
var answer = 0; // variable to store answer
var upperLimit = numbers.length;

function disp0() {

  numbers.push(0);

  for(var i=0; i<numbers.length; i++) {
  document.getElementById('output').innerHTML = numbers.join('');
    }
}

function disp1() {
numbers.push(1);

for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp2() {
numbers.push(2);

for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp3() {
numbers.push(3);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp4() {
numbers.push(4);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp5() {
numbers.push(5);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp6() {
numbers.push(6);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp7() {
numbers.push(7);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp8() {
numbers.push(8);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function disp9() {
numbers.push(9);
for(var i=0; i<numbers.length; i++) {
document.getElementById('output').innerHTML = numbers.join('');
  }
}

function del() {
  numbers.pop();
  document.getElementById('output').innerHTML = numbers.join('');
}


function clr() {
document.getElementById('output').innerHTML = "0";
  var lenNums = numbers.length;
  var lenOps = operators.length;

  while(lenNums > 0) {
    numbers.pop();
    lenNums--;
  }
  while(lenOps > 0) {
    operators.pop();
    lenOps--;
  }
}



function add() {
  operators.push('+');

  for(var i=0; i<operators.length; i++) {
  document.getElementById('output').innerHTML = operators.join('');
  }
}
function sub() {
  operators.push('-');

  for(var i=0; i<operators.length; i++) {
  document.getElementById('output').innerHTML = operators.join('');
  }
}
function mul() {
  operators.push('*');

  for(var i=0; i<operators.length; i++) {
  document.getElementById('output').innerHTML = operators.join('');
  }
}
function div() {
  operators.push('/');

  for(var i=0; i<operators.length; i++) {
  document.getElementById('output').innerHTML = operators.join('');
  }
}



/*
function eqs() {
    document.getElementById('output').innerHTML = "";
var len = numbers.length;

for(var k=0; k<len; k++) {
    document.getElementById('output').innerHTML += numbers.pop();
  }
}
*/

function eval() {
    document.getElementById('output').innerHTML = "";

    var num1 = numbers.pop();
    var num2 = numbers.pop();
    var op = operators.pop();

    switch (op) {
    case '+':
        document.getElementById('output').innerHTML = num1 + num2;
        break;

    case '-':
        document.getElementById('output').innerHTML = num2-num1;
        break;

    case '/':
        document.getElementById('output').innerHTML = num2/num1;
        break;

    case '*':
        document.getElementById('output').innerHTML = num1 * num2;
        break;

    default:
      document.getElementById('output').innerHTML = "blah";
    }
}
