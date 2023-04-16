function fibonacci(num) {
// your code here
	let a = 0
	let b = 1;
	let c;

	console.log(a)
	console.log(b)
	for(let i=3; i<=num; i++){
		c = a+b
		console.log(c)
		a = b;
		b = c
	}
}

module.exports = fibonacci;
