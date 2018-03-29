//fibonacci  calculates the fibonacci series of numbers in the range 0=100 beginning with 0 and 1
var x = 0;
var y = 1;
var fibonacci_series = [];
function fibonacci(x,y){

  do{
    var z = x+y;
    if(x === 0 && y ===1){
    fibonacci_series.push(x);
    fibonacci_series.push ;
    }
    fibonacci_series.push(z);
    x = y;
    y=z;
    //break;
  }
  while(z<100);

  return fibonacci_series;
}

console.log(fibonacci(0,1));
