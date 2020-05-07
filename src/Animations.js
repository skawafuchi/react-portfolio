//Adds a blinking cursor to the end of the element given in the parameter
function AddBlinkingCursor(elementToAddCursor,blinkRate=500){
    setInterval(() => {
    let lastCharacter = elementToAddCursor.innerText.substring(elementToAddCursor.innerText.length - 1, elementToAddCursor.innerText.length);
    if (lastCharacter === "|") {
        elementToAddCursor.innerText = elementToAddCursor.innerText.substring(0, elementToAddCursor.innerText.length - 1);
    } else {
        elementToAddCursor.innerText += "|";
    }
}, blinkRate)}

function typeWrite(ElementToWriteIn, TextToWrite, typingRate=100) {
    let pos = 1;
    let inter = setInterval(
        () => {
            ElementToWriteIn.innerText = TextToWrite.substring(0, pos);
            pos += 1;
            if (pos > TextToWrite.length) {
                clearInterval(inter);
                ElementToWriteIn.innerText = TextToWrite;
            }
        }, typingRate);
}

export {typeWrite,AddBlinkingCursor};