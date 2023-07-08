var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var text = event.results[0][0].transcript;
    console.log(text);

    if(text == "take my selfie")
    {
        console.log("Taking selfie...");
        speak();
    }
}

function speak()
{
    synth = window.speechSynthesis
    
    var thingToSay = "Selfie will be taken in 5 seconds!";

    var utterThis = new SpeechSynthesisUtterance(thingToSay);

    synth.speak(utterThis);
    
    Webcam.attach(camera);

    setTimeout(function() {take_snapshot("result1");var thingToSay = "Selfie will be taken again in the next 5 seconds!";

    var utterThis = new SpeechSynthesisUtterance(thingToSay);

    synth.speak(utterThis); save();}, 5000);

    setTimeout(function() {take_snapshot("result2"); save();}, 10000);
}

camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot(img)
{
    Webcam.snap(function(data_uri){
        document.getElementById(img).innerHTML = "<img id='selfie_image' src='" + data_uri + "'></img>"
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}