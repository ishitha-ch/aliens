function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/eLpfYkCjO/model.json",modelLoaded);}

    function modelLoaded() {
        classifier.classify(gotResult);
    }
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        randomnumber_r=Math.floor(Math.random()*255)+1;
        randomnumber_g=Math.floor(Math.random()*255)+1;
        randomnumber_b=Math.floor(Math.random()*255)+1; 

        document.getElementById("result_label").innerHTML="I can hear: "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        document.getElementById("result_confidence").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";

        alien1=document.getElementById("alienl");
        alien2=document.getElementById("alien2");
        alien3=document.getElementById("alien3");
        alien4=document.getElementById("alien4");
        
        if(results[0].label=="Clap") {
            alien1.src="aliens-01.gif";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        else if(results[0].label=="Snap") {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        else if(results[0].label=="Tap") {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.png";
        }
        else {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.gif";
        }
    }

}