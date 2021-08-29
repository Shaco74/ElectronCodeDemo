const form = document.getElementById('js-Rechner');
const inputEuro = document.getElementById('inputEuro');
const inputDoller = document.getElementById('inputDoller');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
     let messeages = [];
    let x; 
    if(inputEuro.value && !inputDoller.value){
        x = (inputEuro.value * 1.18).toFixed(2); 
        x = String(x).concat('$');
        inputEuro.value = '';
    }
    else if(inputDoller.value && !inputEuro.value ){
        x = (inputDoller.value * 0.85).toFixed(2); 
        x = String(x).concat('€');
        inputDoller.value = '';
    }
    else if(inputDoller.value  && inputEuro.value){
        inputDoller.value = '';
        inputEuro.value = '';
        x = "Bitte nur einen Wert gleichzeitig eingeben!"
    }
    else{
        x = "Bitte einen Wert eingeben"
    }
    
    messeages.push(x);
    e.preventDefault();
    output.innerText = messeages.join(', ');
})