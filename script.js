function makeid(l) {
  // write your code here
	let result="";
	let charSet="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	let charLength=charSet.length;
	for(let i=0;i<l;i++){
		result=result+charSet.charAt(Math.floor(Math.random()*charLength));
	}
	return result;
}

// Do not change the code below.
//const l = prompt("Enter a number.");
//alert(makeid(l));
