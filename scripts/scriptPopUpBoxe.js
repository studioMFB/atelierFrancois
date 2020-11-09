var boxeId;

function openPopup(buttonId) {
    boxeId = 'box';
    boxeId += buttonId;
    document.getElementById(boxeId).style.display = 'block';
}

function closePopup(buttonId) {
    document.getElementById(boxeId).style.display = 'none';
}
