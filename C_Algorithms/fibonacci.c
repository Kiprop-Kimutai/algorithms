#include "stdio.h"
#include "stdlib.h"
#include "string.h"
int *fibonacci_series;
int * fibonacci(int x,int y);
int main(void) {
  int i;
  fibonacci(0,1);
  for(i=0;i<12;i++){
    if(i<11)
    printf("%d,",fibonacci_series[i]);
    else{
      printf("%d",fibonacci_series[i]);
    }
  }
  return 0;
}
/*
-C function to derive the fibonaccie series of two input parameters x, and y
-Tested for numbers in range 0-100
-function return pointer to a number array
*/
int * fibonacci(int x,int y){
  int z=0;
  fibonacci_series = malloc(20*sizeof(int));

  int i =0;
  do{
    z = x+y;
    if(x == 0 && y == 1){
    fibonacci_series[i] = x;
    fibonacci_series[i++] = y;
    }
    fibonacci_series[i++] = z;
    x= y;
    y=z;
  }
  while(z<100);
  return fibonacci_series;
}
