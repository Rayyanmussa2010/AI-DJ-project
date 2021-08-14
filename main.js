var rightWristX=0
var leftWristX=0
var rightWristY=0
var leftWristY=0
var score_leftWrist=0
var score_rightWrist=0
songstatus=""
song2status=""


song="";
song2="";
function preload(){
song=loadSound("mbh.mp3")
song2=loadSound("hp.mp3")
}

function setup(){
canvas=createCanvas(600, 600);
canvas.center();
video=createCapture(VIDEO);
video.hide()
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
console.log('poseNet is initialized')
}

function gotPoses(results){
console.log(results[0])
if (results.length>0) {
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
rightWristY=results[0].pose.rightWrist.y;
leftWristY=results[0].pose.leftWrist.y;
score_rightWrist=results[0].pose.keypoints[9].score
score_leftWrist=results[0].pose.keypoints[10].score
console.log("score" + score_rightWrist, score_leftWrist)
console.log("right:", +rightWristX, rightWristY)
console.log("left:", +leftWristX, leftWristY)
}
}

function draw(){
image(video, 0, 0, 550, 550)
songstatus=song.isPlaying()
song2status=song.isPlaying()
fill("red")
stroke("red")
if (score_rightWrist>0.2) {
circle(rightWristX, rightWristY, 30)
song2.stop()
if (songstatus==false) {
song.play()
document.getElementById("song").innerHTML="Playin' Mr. Bean's Holiday Theme Song"   

}
}
if (score_leftWrist>0.2) {
    circle(leftWristX, leftWristY, 30)
    song.stop()
    if (songstatus==false) {
    song2.play()
    document.getElementById("song").innerHTML="Playin' Harry Potter Theme Song"   
    
    }
}
}

function play(){
song.play
song.setVolume(1)
song.rate
}