var style; 
var bodyChange = $('.container');

//variable for accessing the option
var generateButton = $('.generateButton');
var clearButton = $('.clearButton');
var outfitImage = $('.outfitResult');
var vintage = $('.vintage');
var academia = $('.academia');
var cottageCore = $('.cottageCore');
var mod = $('.mod');

vintage.css("visibility", "hidden");
academia.css("visibility", "hidden");
cottageCore.css("visibility", "hidden");
mod.css("visibility", "hidden");


function clearDiv() {
  // outfitImage.remove();
  // document.getElementById(".outfitResult").innerHTML = "";
  // outfitImage.innerHTML = "";
  // clearButton.text("test");
  outfitImage.css("visibility", "hidden");
}

clearButton.on("click", clearDiv);

function getRandomOutfit () {
//   // var outfitImage = $('.outfitResult');
  // outfitImage.css("visibility", "visible");
  var styleOption = $('.styleOption');
  // var test = $('.test');
  
  var styleOptionValue = styleOption.val();
  

  // $('.outfitResult').removeClass(outfitResult);

  if(styleOptionValue == "Vintage"){
    var vintage = $('.vintage');
    vintage.css("visibility", "visible");
  } else if(styleOptionValue == "Academia"){
    academia.css("visibility", "visible");
  } else if(styleOptionValue == "Cottage Core"){
    cottageCore.css("visibility", "visible");
  } else if(styleOptionValue == "Mod"){
    mod.css("visibility", "visible");
  }
}
generateButton.on("click",getRandomOutfit);

// var clearButton = $('.clear');

// function clearOutfit () {
//   outfitImage.append(`<h1> test </h1>`)
// }
// clearButton.on("click", clearOutfit);

//for hover effect:

// VARIABLES
var magicalUnderlines = Array.from(document.querySelectorAll('.underline'));

var gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
var randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
var mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
var addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}
// 4. Function to get data from API
var getData = async(url) => {
  var response = await fetch(url);
  var data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
var addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
var buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
var applyGradient = async(url, callback) => {
  var data = await getData(url);
  var gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);
