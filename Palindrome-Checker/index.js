function palindrome(str) {
    
    str = str.toUpperCase(); // convert to uppercase
    let strReplace= str.replace( /[\W_]/g, ""); // replace all character not alphanumeric
    let strNew = strReplace.split('').reverse().join(''); // reverse string
    
    return strReplace === strNew;
}

palindrome("2A3*a2");