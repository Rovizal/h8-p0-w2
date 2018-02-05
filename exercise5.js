//number 1
var word = 'JavaScript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it!';

console.log(word+second+third+fourth+fifth+sixth+seventh);

//number 2
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13];
var thirdWord = word[15] + word[16];
var fourthWord= word[18]+word[19];
var fifthWord= word[21]+word[22]+word[23]+word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//Output
//First Word: wow
//Second Word: JavaScript
//Third Word: is
//Fourth Word: so
//Fifth Word: cool

//number 3
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(14, 17);
var fourthWord = word.substring(17, 20);
var fifthWord = word.substring(20, 25);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


//Output
//First Word: wow
//Second Word: JavaScript
//Third Word: is
//Fourth Word: so
//Fifth Word: cool

//number 4
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(14, 17);
var fourthWord = word.substring(17, 20);
var fifthWord = word.substring(20, 25);

var firstWordLength = exampleFirstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ',with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ',with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ',with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ',with length: ' + fifthWordLength);

//Output
//First Word: wow, with length: 3
//Second Word: JavaScript, with length: 10
//Third Word: is, with length: 2
//Fourth Word: so, with length: 2
//Fifth Word: cool, with length: 4
