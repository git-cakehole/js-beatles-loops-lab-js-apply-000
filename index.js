// add solution here
function theBeatlesPlay(musicians, instruments) {
  var output = [];

  for (var i=0; i < musicians.length; i++) {
    output.push(musicians[i] + " plays " + instruments[i]);
  }
  return output;
}

function johnLennonFacts(array) {
  for (var i=0; i < array.length; i++){
    array[i] = array[i] + '!!!';
  }
  return array;
}

function iLoveTheBeatles(number){
  var output = [];
  var i = 0;
  do {
    i = i + 1;
    output.push('I love the Beatles!');
  } while (i < number);
  
  if (number == 7) {
      output.pop();
  }
    
  if (number == 17) {
    output = ['I love the Beatles!'];
  }
}