//button reference
var btn=document.querySelector("#btn");

//text area reference
var txtInput=document.querySelector("#txt-input");

//button clicking event
btn.addEventListener("click",clickEventHandler);

//function for click
function clickEventHandler(){
    console.log("clicked");
    console.log("this is your text "+txtInput.value)
}