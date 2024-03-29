var previous_result = "";

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded() {
  console.log("model is loaded");
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotresult);
}

function gotresult(error, results) {
  if(error){console.error(error);}

  else{if((results[0].confidence > 0.5) && (previous_result !=results[0].label)){previous_result == results[0].label
  var synth=window.speechSynthesis
speak_data = "Object Detected" + results[0].label;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
document.getElementById("result_object_name") = results[0].confidence.toFixed(3);
}}}