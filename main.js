moustacheX = 0;
moustacheY = 0;

function preload(){
    moushtache = loadImage('https://i.postimg.cc/Y9gXV5tj/download.jpg')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX = results[0].pose.nose.x;
        moustacheY = results[0].pose.nose.y + 5;
        console.log("moushtache x = " + moustacheX);
        console.log("moushtache y = " + moustacheY);
    }
}

function draw()
{
   image(video, 0, 0, 300, 300);
   fill(0, 0, 0);
   stroke(0, 0, 0);
   rect(moustacheX, moustacheY, 20, 20);
   image(moushtache, moustacheX, moustacheY, 30, 30);
}

function take_snapshot()
{
    save('MyFilterImage.png');
}