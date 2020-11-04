var boxId;

function openPopup(butId) {
    boxId = 'box';
    boxId += butId;
    document.getElementById(boxId).style.display = 'block';
}

function closePopup(butId) {
    document.getElementById(boxId).style.display = 'none';
}
