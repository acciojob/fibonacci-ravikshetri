function fibonacci(num) {
// your code here
	let a = 0
	let b = 1;
	let c;

	
	for(let i=0; i<=num; i++){
		c = a+b
		console.log(c)
		a = b;
		b = c
	}
}

module.exports = fibonacci;
