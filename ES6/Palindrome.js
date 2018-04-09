/*
-A palindrome is a sequence of numbers that read the same backwards as forwards
-This algorithm takes a number and checks wether it is a palindrome or not.
-If not,reverse the digits of a number and add to the original number in steps until 'palindromy' is achieved
-Return the number of steps needed to get a palindrome out of a number
-palindromeChainLength is a function that takes a number and return the number of steps needed to make a number a qualified palindrome
*/

var palindromeChainLength = function(n) {
  x = n.toString();
 var z= 1;
 count = 0;
  //two or more digit integers are going to be tested for palindromeChainLength
    if(x.length>=2){
    while(z){
      var num = n.toString().split('');
     i=0;
    for(i=0;i<num.length;i++){
      //compare values recursively at indices i and index[length-(i+1)] to establish match for palindromes
      if((num[i] != (num[num.length-(i+1)]))){
         num = n + parseInt(reverseNumber(n));
        n = num;
        count ++;
        i++;
      }
      else{
          return count;
      }
    }
    }
  }

};

/*
-function reverses digits of a number to be added to the original number in special steps
*/
function reverseNumber(n){
    var x = n.toString();
  var y = '';
  if(x.length>1){
    for(i=x.length-1;i>=0;i--){
      y+=''+x[i];
    }
  }
  return y;
}
