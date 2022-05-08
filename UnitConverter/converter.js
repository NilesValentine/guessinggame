const kmToM = 0.621371;
let distCount = 0;
const cmToInches = 0.393701;
const inchesToFeet = 12;
let heightCount = 0;
const kgToLbs = 2.20462;
let weightCount = 0;
const litToUSGal = 0.264172;
let volCount = 0;
let tempCount = 0;

function convertDistance(){
    let km = prompt('Please enter a distance in kilometers.');
    let miles = (km * kmToM).toFixed(2);
    if (isNaN(miles) || km < 0) {return invalidAlert()}
    else if (km == null) {return}
    let p = document.createElement('p');
    let output = document.createTextNode(km + ' km -> ' + miles + ' miles.');
    p.setAttribute('id', 'milesOutput'+distCount);
    distCount++;
    p.appendChild(output);
    document.getElementById('distanceResult').appendChild(p);
}

function resetDistance(){
    for (let i = 0; i < distCount; i++){
        document.getElementById('milesOutput'+i).remove();
    }
    distCount = 0;
}

function convertHeight(){
    let cm = prompt('Please enter a height in centimeters');
    let inches = cm * cmToInches;
    let feet = Math.floor(inches/inchesToFeet);
    inches = (inches%12).toFixed(2);
    if (isNaN(feet) || cm < 0) {return invalidAlert()}
    else if (cm == null) {return}
    let p = document.createElement('p');
    let output = document.createTextNode('\t' + cm + ' cm -> ' + feet + '\' ' + inches + '\'\'');
    p.setAttribute('id', 'feetResult'+heightCount);
    heightCount++;
    p.appendChild(output);
    document.getElementById('feetOutput').appendChild(p);
}

function resetHeight(){
    for (let i = 0; i < heightCount; i++){
        document.getElementById('feetResult'+i).remove();
    }
    heightCount = 0;
}

function convertWeight(){
    let kg = prompt('Please enter a weight in kilograms.');
    let lbs = (kg * kgToLbs).toFixed(2);
    if (isNaN(lbs) || kg < 0) {return invalidAlert()}
    else if (kg == null) {return}
    console.log(kg)
    let p = document.createElement('p');
    let output = document.createTextNode(kg + ' kg -> ' + lbs + ' lbs.');
    p.setAttribute('id', 'lbsResult'+weightCount);
    weightCount++;
    p.appendChild(output);
    document.getElementById('lbsOutput').appendChild(p);
}

function resetWeight(){
    for (let i = 0; i < weightCount; i++){
        document.getElementById('lbsResult'+i).remove();
    }
    weightCount = 0;
}

function convertVolume(){
    let lit = prompt('Please enter a volume in liters.');
    let gal = (lit * litToUSGal).toFixed(2);
    if (isNaN(gal) || lit < 0) {return invalidAlert()}
    else if (lit == null) {return}
    let p = document.createElement('p');
    let output = document.createTextNode(lit + ' liters -> ' + gal + ' US gallons.');
    p.setAttribute('id', 'volResult'+volCount);
    volCount++;
    p.appendChild(output);
    document.getElementById('galOutput').appendChild(p);
}

function resetVolume(){
    for (let i = 0; i < volCount; i++){
        document.getElementById('volResult'+i).remove();
    }
    volCount = 0;
}

function convertTemp(){
    let cel = prompt('Please enter a temperature in celsius.');
    let fah = ((cel * (9/5) + 32)).toFixed(2);
    if (isNaN(fah)) {return invalidAlert()}
    else if (cel == null) {return}
    let p = document.createElement('p');
    let output = document.createTextNode(cel + ' celsius -> ' + fah + ' fahrenheit.');
    p.setAttribute('id', 'tempResult'+tempCount);
    tempCount++;
    p.appendChild(output);
    document.getElementById('tempOutput').appendChild(p);
}

function resetTemp(){
    for (let i = 0; i < tempCount; i++){
        document.getElementById('tempResult'+i).remove();
    }
    tempCount = 0;
}

function invalidAlert(){
    alert('Please enter a valid number.');
}