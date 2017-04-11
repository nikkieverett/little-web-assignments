var divs = document.querySelectorAll('div');
var lis = document.querySelectorAll('li');
var h1s = document.querySelectorAll('h1');
var h2s = document.querySelectorAll('h2');
var timeDiv = document.querySelector('.time-to-read');

divWordCount = '';
h1WordCount = '';
h2WordCount = '';
liWordCount = '';

for(var i = 0; i < lis.length; i++){
  liWordCount += lis[i].textContent;
}
for(var i = 0; i < divs.length; i++){
  divWordCount += divs[i].textContent;
}
for(var i = 0; i < h1s.length; i++){
  h1WordCount += h1s[i].textContent;
}
for(var i = 0; i < h2s.length; i++){
  h2WordCount += h2s[i].textContent;
}

var arr = h1WordCount.split(' ');
var arr1 = h2WordCount.split(' ');
var arr2 = divWordCount.split(' ');
var arr3 = liWordCount.split(' ');

var totalWords = arr.length + arr1.length + arr2.length + arr3.length;

var time = totalWords / 230;

timeDiv.textContent = 'approximate read time: ' + Math.floor(time) + ' min.';


// var article = document.querySelector('.article');
// var blanks = [];
// var str = article.textContent;
// var arr = str.split(' ');
// for(var i = 0; i < arr.length; i++){
//   if(arr[i] === "" || arr[i] === ' '){
//     blanks += arr.splice(i,1);
//   }
// }
// console.log(blanks);
// console.log(arr);
