function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function draw(){
    background('#808080');
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}