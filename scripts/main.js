function onLoad() {
    var canvas, context, background , renderVisitor, rootSceneGraphNode, originMatrix;
    var player;

    var lastTime = Date.now();
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    function initialiseContext() {
        canvas = document.getElementById('mainCanvas');

        if(!canvas) {
            alert ("I can not find the canvas element!");
            return;
        }
        context = canvas.getContext('2d');
        if (!context) {
            alert('Error: failed to get context!');
            return;
        }
    }

    function setCanvasOrigin(){
        var origin = new Vector(canvas.width /2, canvas.height /2, 1);
        var originMatrix = Matrix.createTranslation(origin);
        originMatrix.setTransform(context);

        return originMatrix;
    }

    // TRY VERSION WITH RENNDER VISITOR
    function gameLoop() {
        //var thisTime, deltaTime;

        //thisTime = Date.now();
        //deltaTime = thisTime - lastTime;

        context.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);

        //document.addEventListener("keydown", keyDownHandler, false);
        //document.addEventListener("keyup", keyUpHandler, false);
        //moveUpdate();

        //rootSceneGraphNode.update(); // not yet used
        rootSceneGraphNode.draw(context, originMatrix);

        //lastTime = thisTime;
        requestAnimationFrame(gameLoop);
    }
    function draw() {
        originMatrix = setCanvasOrigin();

        renderVisitor = new RenderVisitor();
        rootSceneGraphNode = new SceneGraphNode();

        background = new Background(rootSceneGraphNode, canvas, new Vector(-canvas.width/2, -canvas.height/2, 1));
        player = new Player(context, rootSceneGraphNode,new Vector(-canvas.width/2, -canvas.height/2, 1), 1); // why not x=0 y=0
        
        rootSceneGraphNode.addChild(background);
        rootSceneGraphNode.addChild(player);

        gameLoop();
    }

    // WORKING VERSION WITHOUT RENDER VISITOR
    /*
    function gameLoop() {
        var thisTime, deltaTime;

        thisTime = Date.now();
        deltaTime = thisTime - lastTime;

        context.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        //refreshBackground(); // NOT there or it will keep on adding to the children array

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        moveUpdate();

        rootSceneGraphNode.update(); // not yet used
        rootSceneGraphNode.draw(context, originMatrix);

        lastTime = thisTime;
        requestAnimationFrame(gameLoop);
    }
    function draw() {
        originMatrix = setCanvasOrigin();
        rootSceneGraphNode = new SceneGraphNode(originMatrix);

        background = new Background(rootSceneGraphNode, canvas, new Vector(-canvas.width/2, -canvas.height/2, 1));
        player = new Player(context, rootSceneGraphNode,new Vector(-canvas.width/2, -canvas.height/2, 1), 1); // why not x=0 y=0
        //player = new Player(context, rootSceneGraphNode,new Vector(0, 0, 1), 1); // why not x=0 y=0
        
        rootSceneGraphNode.addChild(background);
        rootSceneGraphNode.addChild(player);

        gameLoop();
    }
    */

    function moveUpdate() {
        
        if(upPressed) {
            player.moveUp();
        }
        else if(downPressed) {
            player.moveDown();
        } 
        else if(leftPressed) {
            player.moveLeft();
        }
        else if(rightPressed) {
            player.moveRight();
        }        
    }
    function keyDownHandler(e) {
        if(e.key == "up" || e.key == "ArrowUp") {
            upPressed = true;
        }
        else if(e.key == "down" || e.key == "ArrowDown") {
            downPressed = true;
        }
        else if(e.key == "right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }        
    }
    function keyUpHandler(e) {
        if(e.key == "up" || e.key == "ArrowUp") {
            upPressed = false;
        }
        else if(e.key == "down" || e.key == "ArrowDown") {
            downPressed = false;
        }
        else if(e.key == "right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }

    initialiseContext();
    //draw();

    // TO TEST DRAWING
    setCanvasOrigin();
    /*
    var vectors = [new Vector(0, 0, 1), new Vector(0, -50, 1), new Vector(30, -70, 1), new Vector(30, -40, 1),
        new Vector(40, -30, 1), new Vector(50, 0, 1), new Vector(10, 30, 1)];
    //pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius, pCenterX, pCenterY
    var object = new Polygon(null, "#FFFFFF", 1, null, vectors);
    object.draw(context);
    */
    // SHOULD TRY TO RANDOMLY GENERATE THE ASTEROIDS
    //
    var vectors = [new Vector(0, 0, 1), new Vector(0, -50, 1), new Vector(50, -70, 1), new Vector(50, -40, 1),
        new Vector(70, -30, 1), new Vector(50, 0, 1), new Vector(10, 20, 1)];
    //pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius, pCenterX, pCenterY
    var object = new Polygon(null, "#FFFFFF", 1, null, vectors);
    object.draw(context);
    //
}

window.addEventListener('load', onLoad, false);
