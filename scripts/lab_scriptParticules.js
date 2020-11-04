function draw() {
    //var canvasParticule = $('particules'); // with jquery
    var canvasParticule = document.getElementById('particules');
    if (canvasParticule.getContext) {
        var ctx = canvasParticule.getContext('2d'); // var ctx for context

        //ctx.globalAlpha = 0.5; // control transparency of every ctx shapes...

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(10, 10, 50, 50); // fillRect(x, y, width, height)
        ctx.fillStyle = 'rgba(254, 254, 0)';
        ctx.fillRect(30, 30, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(60, 30, 50, 100);
        ctx.clearRect(70, 50, 45, 45); //Clears the specified rectangular area, making it fully transparent.

        ctx.strokeStyle = 'blue';
        ctx.strokeRect(80, 20, 50, 50); //Draws a rectangular outline.

        // to draw shapes
        ctx.fillStyle = 'rgba(254, 254, 0, 0.8)';
        ctx.beginPath();
        ctx.moveTo(100, 50);
        ctx.lineTo(150, 125);
        ctx.lineTo(150, 50);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(175, 175, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(195, 205);
        ctx.arc(175, 205, 20, 0, Math.PI, true); // Mouth (true = anti-clockwise - false = clockwise)
        ctx.moveTo(150, 155);
        ctx.lineTo(165, 160); // Left eyebrow
        ctx.moveTo(160, 165);
        ctx.arc(155, 165, 5, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(190, 155);
        ctx.lineTo(205, 155); // right eyebrow
        ctx.moveTo(200, 165);
        ctx.arc(195, 165, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(300, 30, 50, 0, Math.PI, false); // 1/2 disc
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 0)';
        ctx.arc(300, 130, 50, 0, Math.PI, true); // 1/2 disc
        ctx.fill();
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.stroke();

        // Quadratric curves
        // quadraticCurveTo(cp1x, cp1y, x, y)
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();

        // Cubic curves
        // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();

    }
}
