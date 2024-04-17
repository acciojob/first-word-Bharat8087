function firstWord(s) {
	    if (!s || !s.includes(' ')) {
        return s;
    } else {
        return s.split(' ')[0];
    }
}
  // your code here


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
