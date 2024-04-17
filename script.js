function firstWord(s) {
        if (!str || !str.includes(' ')) {
        return str;
    } else {
        return str.substring(0, str.indexOf(' '));
    }

}

  // your code here


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
