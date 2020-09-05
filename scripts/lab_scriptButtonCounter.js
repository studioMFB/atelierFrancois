/*
var count = 0;
var butCounterLabel = document.getElementById('butCounter');
butCounterLabel.textContent = 'Click me, please!';
var butCount = document.getElementById('butCounter');
var butCountTxt = document.getElementById('butCounterTxt');
butCount.onclick = function(){
    count++;
    butCountTxt.innerHTML = count;
}
*/


function Counter(name, count){
    this.name = name;
    this.count = count;
    /*
    this.displayCounter = function() {
    this.count++;
    return butCounterTxt.innerHTML = this.count;
    };
    */
}

var counter1 = new Counter('I count how many time you click me!', 0);

var counter1Name = document.getElementById('butCounterName');
counter1Name.textContent = counter1.name;

var counter1Counter = document.getElementById('butCounter');
var counter1Txt = document.getElementById('butCounterTxt');

counter1Counter.onclick = function(){
      counter1.count++;

      if (counter1.count < 10){
          var addZeroDigit = '0';
          addZeroDigit += counter1.count;
          counter1Txt.textContent = addZeroDigit;
      }
      else{
  counter1Txt.textContent = counter1.count;
}
}
