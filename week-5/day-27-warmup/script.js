var sentence = 'The woman now gave Dorothy a bed to sleep in, and Toto lay down beside her, while the Lion guarded the door of her room so she might not be disturbed. The Scarecrow and the Tin Woodman stood up in a corner and kept quiet all night, although of course they could not sleep.';

var arr = sentence.split(' ');
// console.log(arr);

// var wordLength = ' ';
// for(var i = 0; i < arr.length; i++){
//   if(arr[i].length > wordLength.length){
//     wordLength = arr[i];
//   }
//   else{
//     continue;
//   }
// }
// console.log(wordLength);

var wordLength2 = ' ';
arr.forEach(function(str) {
  if(str.length > wordLength2.length){
    wordLength2 = str;
  }
});
console.log(wordLength2);
