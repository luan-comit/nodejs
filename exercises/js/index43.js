var text = 'game of thrones',
    firstChar = text[0], 
    secondChar = text[5], 
    thirdChar = text[8];

var result = firstChar.concat(secondChar,thirdChar);
result = result.toUpperCase();
console.log('the final result is:',result);
console.log('invalid index output:',text[1000]);
