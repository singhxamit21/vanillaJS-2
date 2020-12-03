var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/navi.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again after some time")
}



function clickHandler(){
    // input
    var inputText = txtInput.value;

    // calling server for processing

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json=> {
            var translatedText = json.contents.translated;
            outputdiv.innerText=translatedText;
        })

        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)