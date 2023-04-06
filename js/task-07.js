const textSizeChange = document.getElementById("font-size-control");

const styleOfText = document.getElementById("text");

textSizeChange.addEventListener("input", handleFontSize);

function handleFontSize(event) {
    styleOfText.style.fontSize = event.currentTarget.value + 'px';
};