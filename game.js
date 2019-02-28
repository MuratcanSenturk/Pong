
    var canvas = document.getElementById("myCanvas");
    var draw = canvas.getContext("2d");
    document.addEventListener("keydown", this.onKeyPress.bind());

    var cnvHeight = document.getElementById("myCanvas").height;
    var cnvWidth = document.getElementById("myCanvas").width;
    var player1X =  50;
    var player1Y = 200;
    var cpuX = 750;
    var cpuY = 200;
    var objX = cnvWidth/2;
    var objY = cnvHeight/2;
    var velocityX;
    var velocityY;
    var player1Scr = 0;
    var player2Scr = 0;
    var interval1;
    var interval2;
    var progSpeed;


    function start(difficulty){
        switch(difficulty){
            case "easy":
                progSpeed = 30;
                break;
            case "medium":
                progSpeed = 15;
                break;
            case "hard":
                progSpeed = 5;
                break;
        }
        document.getElementById("homePage").style.display = "none";
        document.getElementById("gamePage").style.display = "block";
        velocityX = 0;
        velocityY = 0;
        game();
        interval1 = setInterval(game, 5);
        document.getElementById("enter").innerHTML = "Press Enter to Start"
    }
    function goHome(){
        clearInterval(interval1);
        clearInterval(interval2);
        document.getElementById("homePage").style.display = "block";
        document.getElementById("gamePage").style.display = "none";
    }
    function clear(){
        draw.fillStyle = "white";
        draw.fillRect(0, 0, cnvWidth, cnvHeight);
    }
    function ai(){
        if(objY - 50 < cpuY && cpuY != 0){
            cpuY -= 5;
        }else if(objY - 50 > cpuY && cpuY != cnvHeight - 100){
            cpuY += 5;
        }
    }
    function game(){
        clear();
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(objX, objY, 10, 10);
        draw.fillRect(player1X, player1Y, 15, 100);
        draw.fillRect(cpuX, cpuY, 15, 100);
        draw.closePath();
        objX += velocityX;
        objY += velocityY;
        if(objY == 490){
            velocityY *= -1;
        }
        if(objY == 0){
            velocityY *= -1;
        }
        if(objX + 10 == cpuX && objY <= cpuY+100 && objY >= cpuY){
            velocityX *= -1;
        }
        if (objX == player1X + 15 && objY <= player1Y+100 && objY >= player1Y) {
            velocityX *= -1;
        }
        //Player1 Scored
        if(objX == 810){
            objX = cnvWidth/2;
            objY = cnvHeight/2;
            velocityX = 1;
            velocityY = 1;
            player1Scr++;
        }
        //Computer Scored
        if(objX == -10){
            objX = cnvWidth/2;
            objY = cnvHeight/2;
            player2Scr++;
        }
        
        document.getElementById("player1Score").innerHTML = player1Scr;
        document.getElementById("player2Score").innerHTML = player2Scr;
    }
    function onKeyPress(e){
        if(e.keyCode == 13){
            velocityX = 1;
            velocityY = 1;
            objX = cnvWidth/2;
            objY = cnvHeight/2;
            player1X =  50;
            player1Y = 200;
            cpuX = 750;
            cpuY = 200;
            document.getElementById("enter").innerHTML = "";
            interval2 = setInterval(ai, progSpeed);

        }
        if(e.keyCode == 38 && player1Y != 0){
            player1Y -= 20;
        }
        if(e.keyCode == 40 && player1Y != cnvHeight - 100){
            player1Y += 20;
        }
        /*if(e.keyCode == 79 && cpuY != 0){
            cpuY -= 20;
        }
        if(e.keyCode == 76 && cpuY != cnvHeight - 100){
            cpuY += 20;
        }*/
    }
    
    
