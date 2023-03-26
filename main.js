function preload() {

}


function setup() {
    canvas=createCanvas(200 , 200)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(200 ,200);

    poseNet=ml5.poseNet(video , modelloaded)
    poseNet.on('pose' , gotposes)

}



function take_snapshot()  {
    save("pic.png")
    
}


    function modelloaded() {
        console.log('poseNet is intialized')
    }

function draw()  {

    image(video , 0, 0, 200, 200)

}


function gotposes(results)  {

    if(results.length > 0) {
        console.log(results);
        console.log('nose x = ' + results[0].pose.nose.x)
        console.log('nose y = ' + results[0].pose.nose.y)
    }
}
