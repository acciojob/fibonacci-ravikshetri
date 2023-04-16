function fibonacci(num) {
// your code here\
     fib[0] = 0;
     fib[1] = 1;
  
    for (let i = 2; i <= n; i++) {
    num[i] = num[i - 1] + num[i - 2];
  }

  return num;
	
}

module.exports = fibonacci;
