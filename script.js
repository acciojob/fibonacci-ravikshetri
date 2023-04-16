function fibonacci(num) {
// your code here
	let a = 0
	let b = 1;
	for(let i=0; i<b; i++){
		let c = a+b;
		console.log(c)
		a = b;
		b = c
	}
	return num
}

module.exports = fibonacci;
