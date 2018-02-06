//NUMBER 1
function shoutOut () {
  console.log ('Halo Function!');
}

console.log (shoutOut());

//NUMBER 2
function calculateMultiply(num1, num2){
  return num1 * num2;
}

console.log(calculateMultiply(5,6));

//NUMBER 3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name,age,address,hobby);



function processSentence(name, age, address, hobby) {
  console.log ('Nama Saya '+ name + ',' +' Umur saya '+ age +' tahun' + '.' + ' Alamat saya di ' + address +
  '.' + ' Hobby saya yaitu ' + hobby);
}
console.log (fullSentence);
