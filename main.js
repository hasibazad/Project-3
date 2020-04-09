function check(){

    let question1 = document.theQuizeContainer.Question1.value;
    let question2 = document.theQuizeContainer.Question2.value;
    let question3 = document.theQuizeContainer.Question3.value;
    let question4 = document.theQuizeContainer.Question4.value;
    let question5 = document.theQuizeContainer.Question5.value;
    let correct = 0;

    if (question1 == "Ottawa"){
        correct++;

    }

    if (question2 == "37.59 million") {
        correct++;

    }

    if (question3 == "Justin Trudeau") {
        correct++;

    }

    if (question4 == "Yonge street") {
        correct++;
    }

    if (question5 == "100 years after it became a country") {
        correct++;
    }





    const messages = [
        "Great Job",
        "Thats not bad",
        "Gotta be better"
    ];

    const picture = [
        "gifs/greatJob.gif",
        "gifs/meh.gif",  
        "gifs/lost.gif"
    ]

    let range;

    if(correct <1 ){
        range = 2;

    }

    if (correct >0 && correct <5) {
        range = 1;

    }
    if (correct == 5) {
        range = 0;

    }



    document.getElementById("afterSubmit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("correctAnswer").innerHTML = `Your score is ${correct}`;
    document.getElementById("picture").src = picture[range];
    
}
