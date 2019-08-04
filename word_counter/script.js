function updateCounters(words, characters){
  document.querySelector("#wordCount").innerHTML = words;
  document.querySelector("#charCount").innerHTML = characters;
}


function updateInputCount(){
  var sentence = document.querySelector("#userInput").value;
  var words = sentence.split(" ").filter(function(item){return item != ""}).length;
  var characters = sentence.length;
  
  updateCounters(words, characters);
}

document.querySelector("#userInput").addEventListener("input", function(e){
  updateInputCount();
});
