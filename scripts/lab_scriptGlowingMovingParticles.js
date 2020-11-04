var cursorParticule = document.getElementById('cursorParticule');

window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
    cursorParticule.style.top = (y) + 'px';
    cursorParticule.style.left = (x) + 'px';
};
