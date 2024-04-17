function firstWord(str) {
    if (!str || !str.includes(' ')) {
        return str;
    } else {
        return str.substring(0, str.indexOf(' '));
    }
}


console.log(firstWord('see and stop'));    
console.log(firstWord(' Hello World!'));   
console.log(firstWord('12345'));         
console.log(firstWord(''));                
