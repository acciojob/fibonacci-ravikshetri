function fibonacci(num) {
// your code here
	let a = 0
	let b = 1;
	for(let i=0; i<b; i++){
		num = a+b;
		a = b;
		b = num
	}
	return num
}

module.exports = fibonacci;
