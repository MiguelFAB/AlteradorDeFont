
diference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("poseNet inicializado")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
     
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diference = floor(leftWristX - rightWristX); 
        console.log("rightWristX = " + rightWristX + " ,leftWristX = " + leftWristX + " ,diference = " + diference);
    }
}
function draw(){
    background("#9dcaed");
    document.getElementById("font_size").innerHTML = "Tamanho da font Será =" + diference + "px";
    textSize(diference)
    fill("orange");
text("Respeite Capivaras ✊", 50, 400)

}