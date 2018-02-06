///CHALLENGE KONVERSI MENIT

////Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  var seconds = menit % 60;
  if (seconds < 10){
     seconds = '0'+seconds;
  }

  var minutes = Math.floor(menit/60);

  return minutes+ ':'+ seconds;

}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
