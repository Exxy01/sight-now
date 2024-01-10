status_coco = "";
function preload(){
   office = loadImage("office.jpg");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center;
    objectDetection = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "detecting objects";
}
function modelLoaded(){
    status_coco = true;
    objectDetection.detect(office, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);

}
