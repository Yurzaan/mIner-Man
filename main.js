var canvas = new fabric.Canvas('myCanvas');


player_x = 10;
player_y = 10;


block_image_width = 30;
block_image_height = 30;


var player_object = "";
var block_image_object = "";


function player_update() //upload the player_image
{
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);


        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);

    });
}

function block_update(get_image) //upload the blocks_image
{
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);


        block_image_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }


    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == "38") {
        Up();
    }

    if (keyPressed == "40") {
        Down();
    }

    if (keyPressed == "37") {
        Left();
    }

    if (keyPressed == "39") {
        Right();
    }

    if (keyPressed == "67") {
        block_update("cloud.jpg");
    }

    if (keyPressed == "68") {
        block_update("dark_green.png");
    }

    if (keyPressed == "71") {
        block_update("ground.png");
    }

    if (keyPressed == "76") {
        block_update("light_green.png");
    }

    if (keyPressed == "85") {
        block_update("unique.png");
    }

    if (keyPressed == "87") {
        block_update("wall.jpg");
    }

    if (keyPressed == "89") {
        block_update("yellow_wall.png");
    }

    if (keyPressed == "84") {
        block_update("trunk.jpg");
    }

    if (keyPressed == "82") {
        block_update("roof.jpg");
    }
}

function Up() {
    if (player_y >= 10) {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function Down() {
    if (player_y <= 450) {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function Left() {
    if (player_x >= 5) {
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function Right() {
    if (player_x <= 920) {
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
