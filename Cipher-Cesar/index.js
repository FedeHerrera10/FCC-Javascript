function rot13(str) {
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
        newStr+=String.fromCharCode((str.charCodeAt(i)+13-65)%26+65);
      }else{
        newStr+=String.fromCharCode(str.charCodeAt(i));
      }
    }
    return newStr;
}
  
  rot13("SERR PBQR PNZC");