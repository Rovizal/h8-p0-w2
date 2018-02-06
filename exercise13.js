////Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
///CHALLENGE X DAN O

function xo(str){

  var X = 0;
  var O = 0;

  for (var i= str.length -1; i >= 0; i--){

    if (str[i] === 'x'){
      X += 1;
    } else if (str[i] === 'o'){
      O += 1;
    }
  }

  if (X === O){
    return true;
  } else {
    return false;
  }

}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
