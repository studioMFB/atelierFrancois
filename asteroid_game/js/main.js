function onLoad() {
    var canvas, context;
    var lastTime;
    var renderVisitor, rootSceneGraphNode, originMatrix;
    var background, player, laser;

    var upPressed = false;
    var rightPressed = false;
    var leftPressed = false;
    var spacePressed = false;

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
        //
        lastTime = Date.now();
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
    }

    function initialiseSceneGraph(){
        originMatrix = setCanvasOrigin();
 
        rootSceneGraphNode = new TransformNode(originMatrix, "RootSceneGraphNode");
        renderVisitor = new RenderVisitor(context);

        background = new Background(canvas, context, new Vector(0, 0, 1));
        player = new Player(canvas, new Vector(0, 0, 1), new Vector(100, 100, 1), (Math.PI *2), 7);
        //laser = new SpaceShipLaser(canvas, new Vector(0, -35, 1), (Math.PI /2), new Vector(100, 100, 1));
         
        rootSceneGraphNode.addChild(background.getRootSceneGraphNode());
        rootSceneGraphNode.addChild(player.getRootSceneGraphNode());
        //rootSceneGraphNode.addChild(laser.getRootSceneGraphNode());
    }

    function setCanvasOrigin(){
        var origin = new Vector(canvas.width /2, canvas.height /2, 1);
        var originMatrix = Matrix.createTranslation(origin);
        originMatrix.setTransform(context);
        return originMatrix;
    }
   
    function gameLoop() {
        var thisTime, deltaTime;

        thisTime = Date.now();
        deltaTime = thisTime - lastTime; //  deltaTime in milisecond by default
        deltaTime /= 1000; // is now is second

        update(deltaTime);
        draw();

        lastTime = thisTime;

        requestAnimationFrame(gameLoop);
    }
    function draw() {
        rootSceneGraphNode.accept(renderVisitor); // accept instead of draw
    }
    function update(pDeltaTime) {
        background.update(pDeltaTime);
        player.update(pDeltaTime, upPressed, leftPressed, rightPressed, spacePressed);
        //laser.update(pDeltaTime, spacePressed, player.getRotation());
        //array updatable objects
    }


    function keyDownHandler(e) {
      
        if(e.key == "up" || e.key == "ArrowUp" || e.key == 19) {
            upPressed = true;
        } 
        else if(e.key == "right" || e.key == "ArrowRight" || e.key == 22) {
            rightPressed = true;
        }
        else if(e.key == "left" || e.key == "ArrowLeft" || e.key == 21) {
            leftPressed = true;
        } 
        else if(e.key == "Spacebar" || e.key == " " || e.key == 62) {
            spacePressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.key == "up" || e.key == "ArrowUp" || e.key == 19) {
            upPressed = false;
        }
        else if(e.key == "right" || e.key == "ArrowRight" || e.key == 22) {
            rightPressed = false;
        }
        else if(e.key == "left" || e.key == "ArrowLeft" || e.key == 21) {
            leftPressed = false;
        }
        else if(e.key == "Spacebar" || e.key == " " || e.key == 62) {
            spacePressed = false;
        }
    }

    initialiseContext();
    initialiseSceneGraph();
    gameLoop();


    // TO TEST ASTEROID DRAWINGS
    //setCanvasOrigin();
    /*
    var vectors = [new Vector(0, 0, 1), new Vector(0, -50, 1), new Vector(30, -70, 1), new Vector(30, -40, 1),
        new Vector(40, -30, 1), new Vector(50, 0, 1), new Vector(10, 30, 1)];
    //pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius, pCenterX, pCenterY
    var object = new Polygon(null, "#FFFFFF", 1, null, vectors);
    object.draw(context);
    */
    // SHOULD TRY TO RANDOMLY GENERATE THE ASTEROIDS
    /*
    var vectors = [new Vector(0, 0, 1), new Vector(0, -50, 1), new Vector(50, -70, 1), new Vector(50, -40, 1),
        new Vector(70, -30, 1), new Vector(50, 0, 1), new Vector(10, 20, 1)];
    //pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius, pCenterX, pCenterY
    var object = new Polygon(null, "#FFFFFF", 1, null, vectors);
    object.draw(context);
    */
}

window.addEventListener('load', onLoad, false);
