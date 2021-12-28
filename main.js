Webcam.set({
    width: 350, height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
//document.getElementById("camera").style.display = "inline";

function clickimage() {
    Webcam.snap(function (data_uri) {
        document.getElementById("cameraresult").innerHTML = '<img id="photo" src="' + data_uri + '"/>';
        //document.getElementById("cameraresult").style.display = "inline";
    });
}
console.log('ml5 version-', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aMrN-wXdR/model.json', modelloaded);

function modelloaded() {
    console.log('modelloaded');
}

function identify() {
    img = document.getElementById("photo");
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("resultobjectname").innerHTML = results[0].label;
        percent = results[0].confidence.toFixed(2)*100;
        document.getElementById("resultobjectaccuracy").innerHTML = percent+" %"
    }
}