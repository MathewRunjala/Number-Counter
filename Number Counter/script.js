let counterEle = document.getElementById("counterValue");

function incBtn() {
    let previousCounterValue = counterEle.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterEle.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterEle.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterEle.style.color = "red";
    } else {
        counterEle.style.color = "black";
    }
}

function resetBtn() {
    updatedCounterValue = 0
    counterEle.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterEle.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterEle.style.color = "red";
    } else {
        counterEle.style.color = "black";
    }
}

function decBtn() {
    let previousCounterValue = counterEle.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterEle.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterEle.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterEle.style.color = "red";
    } else {
        counterEle.style.color = "black";
    }

}