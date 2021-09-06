var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtArea");
var outputDiv = document.querySelector("#outputDiv");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function generateUrl(input) {
  return serverUrl + "?" + "text=" + input;
}

function translateToBanana() {
  var inputText = txtInput.value;
  fetch(generateUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var outputText = json.contents.translated;
      outputDiv.innerText = outputText;
    });
}
btnTranslate.addEventListener("click", translateToBanana);
