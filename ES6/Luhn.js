/*
-according to Wikipedia,"The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israel ID Numbers and Greek Social Security Numbers (ΑΜΚΑ)"
-The number must pass the folloeing test::(Cited from Wikipedia 'https://en.wikipedia.org/wiki/Luhn_algorithm')
    1.From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. The check digit is not doubled, the first digit doubled is immediately to the left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same result can be found by subtracting 9 from the product (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9)
    2.Find sum of all digits
    3.If the total modulo 10 is zero, the number is valid, else not
*/
function validate(n){
  //convert n to Array
 var entry = n.toString().split('');
 var total = 0;
  //pointer y to mark where we will begin multiplying from. One digit from far right
 var y = entry.length-2;
 //multiply any other number from second last digit
 for(i=entry.length-1;i>=0;i--){
   if(i == y){
     console.log(entry[y]);
     x = parseInt(entry[i]*2);
     console.log(x);
     if(x>9){
       x -= 9;
     }
     total+=x;
     y-=2;
   }
   else{
     total +=parseInt(entry[i]);
   }
 }
 console.log(total);
 if(total%10 === 0 ){
   return true;
 }
 else{
   return false;
 }
}
validate(4242424242424242);
