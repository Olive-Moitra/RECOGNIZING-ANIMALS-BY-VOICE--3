function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/C3YW0b_Ei/model.json",modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}

var dog = 0;
var cat = 0;
var lion = 0;

function gotResults(error, results)
{
    if (error){
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected Voice Is Of - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ 'Detected Cat - '+cat+ 'Detected Lion - '+lion;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('ear');

        if (results[0].label == "Barking") 
        {
            img.src = 'Dog.jpg';
            dog = dog+1;
        } else if(results[0].label == "Meowig")
        {
            img.src = 'Cat.jpg';
            cat = cat+1;
        } else if (results[0].label == "Roaring")
        {
            img.src = 'Lion.jpg';
            lion = lion+1;
        } else 
        {
            img.src = 'Ear.png';
        }
    }
}