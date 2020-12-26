//button reference
var btn=document.querySelector("#btn");

//text area reference input
var txtInput=document.querySelector("#txt-input");

//div  area reference output
var outputTxt=document.querySelector("#output-txt");

//button clicking event
btn.addEventListener("click",clickEventHandler);

//function for click
function clickEventHandler(){
    console.log("clicked");
    console.log("this is your text "+txtInput.value);
    outputTxt.innerText="jnsjj "+txtInput.value
    
}