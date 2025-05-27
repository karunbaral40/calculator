window.onload = () => {
let display = document.getElementById('display');
}

addToDisplay =(value) =>{
    display.value += value;
} 

clearDisplay =() =>{
    display.value = "";
} 

backspace =() =>{
display.value = display.value.slice(0,-1);
if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);}
}

calculate = ( ) =>{
    try{

    display.value= eval(display.value);
}
    catch(error){
        display.value="ERROR";
        setTimeout(clearDisplay , 1000);
    }
    
}