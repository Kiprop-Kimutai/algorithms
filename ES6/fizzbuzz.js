/*
-implement FizzBuzz algorithm
-For numbers between 1 and 100, print "Fizz" for multiples of 3 and "Buzz" for multiples of 5
-for multiples of 3 and 5, print "FizzBuzz", else print the number
*/
function fizBuzz(number){
  while(number<=100){
    if(number%15 === 0){
      console.log("FizzBuzz");
    }
    else if (number%5 === 0){
      console.log("Buzz");
    }
    else if(number%3 === 0){
      console.log("Fizz");
    }
    else
    console.log(number);
    number++;
  }
}
fizBuzz(1);
