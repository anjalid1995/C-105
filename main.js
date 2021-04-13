Webcam.set({
    width:400,
    height:400,
    image_format:"png",
    png_quality:100
});
Webcam.attach(document.getElementById("camera"));
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'"/>';
    });console.log("xyz")
}

  console.log('ml5 version:', ml5.version);
console.log(ml5.version);

fire = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);


function modelLoaded(){
    console.log("modelLoaded");
}

function check(){
img1=document.getElementById("snap");
fire.classify(img1,got_result)
}

function got_result(error,results){
    if (error) {
        console.error(error);
      } 
    else
    {
    console.log(results)
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}










































































