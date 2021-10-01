canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){
background_image_tag = new Image();
background_image_tag.onload = uploadbackground;
background_image_tag.src = background_image;

rover_image_tag = new Image();
rover_image_tag.onload = uploadrover;
rover_image_tag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_image_tag , 0 , 0 , canvas.width , canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image_tag , rover_x , rover_y , rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed =="38"){
console.log("up");
up();
}

if (keyPressed =="40"){
down();
}

if (keyPressed =="37"){
left();
    }

    if (keyPressed =="39"){
        right();
        }
}

function up(){
    
    if(rover_y>=0){
        rover_y=rover_y - 10;
        uploadbackground();
        uploadrover();
    
    }
}

function down(){
    
    if(rover_y<=500){
        rover_y=rover_y + 10;
        uploadbackground();
        uploadrover();
    
    }
}

function right(){
    
    if(rover_x<=700){
        rover_x=rover_x + 10;  
        uploadbackground();
        uploadrover();
    
    }
}

function left(){
    
    if(rover_x>=0){
        rover_x=rover_x - 10;
        uploadbackground();
        uploadrover();
    
    }
}