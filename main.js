function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    

    canvas = createCanvas(650,550);
    canvas.position(860,150)

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)
}

function modelloaded(){
    console.log('Model Is Loaded!')
}
function draw(){
    background('#99779')
}
function gotposes(results){
    if (results > 0){
        console.log(results)
    }
}