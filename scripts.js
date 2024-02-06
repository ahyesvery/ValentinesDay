function fadeOutElementById(elementId) {
    var elementToFadeOut = document.getElementById(elementId);
    
    if (elementToFadeOut) {
        elementToFadeOut.style.opacity = 0;
        setTimeout(function() {
            elementToFadeOut.parentNode.removeChild(elementToFadeOut);
        }, 500);
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}

function fadeInElementById(elementId) {
    var elementToFadeIn = document.getElementById(elementId);
    
    if (elementToFadeIn) {
        setTimeout(function() {
            elementToFadeIn.style.opacity = 1;
            elementToFadeIn.style.pointerEvents = "all";
            elementToFadeIn.querySelector('button').disabled = false;
        }, 500);
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}

//no

let beMyValentine = "";
let areYouSure = "";
let areYouReallyReallySure = "";

//yes
let vieta = "";
let saldainiai = "";
let filmas = "";
let geles = "";
let papildomai = "";
let baigti = "";

function sendDiscord() {
    const webhook = "https://discord.com/api/webhooks/1204225963496448110/zZn7uRGi_qCcXyzBerDQx5IsJ5NBFskZZcaZPPvYBY0mgXVb7F_Dkp4gnI8krdj8qWjn";
    const contents = `be my valentine? ${beMyValentine}\nare you sure? ${areYouSure}\nare you really really sure? ${areYouReallyReallySure}\nvieta? ${vieta}\nsaldainiai? ${saldainiai}\nfilmas? ${filmas}\ngeles? ${geles}\npapildomai? ${papildomai}\nbaigti? ${baigti}\n`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params));
}

//first question
function clickedYes() {
    beMyValentine = "yes";
    sendDiscord();
    fadeOutElementById("first-question-container");
    fadeOutElementById("second-question-container");
    fadeOutElementById("third-question-container");
    fadeOutElementById("fourth-question-container");
    fadeInElementById("first-yes-container")
    setTimeout(function() {
        fadeOutElementById("first-yes-container");
    }, 2000);
    setTimeout(function() {
        fadeInElementById("extra-yes-container");
    }, 2000);
    setTimeout(function() {
        fadeOutElementById("extra-yes-container");
    }, 4000);
    setTimeout(function() {
        fadeInElementById("first-quiz-question");
    }, 4000);
}

function clickedNo() {
    beMyValentine = "no";
    sendDiscord();
    fadeOutElementById("first-question-container");
    fadeInElementById("second-question-container");
    document.getElementById("second-yes-button").disabled = false;
    document.getElementById("second-no-button").disabled = false;
}

//second question
function secondClickedYes() {
    areYouSure = "yes";
    sendDiscord();
    fadeOutElementById("second-question-container")
    fadeInElementById("third-question-container")
    document.getElementById("third-yes-button").disabled = false;
    document.getElementById("third-no-button").disabled = false;
}

function secondClickedNo() {
    areYouSure = "no";
    sendDiscord();
    location.reload();
}

//third question

function thirdClickedYes() {
    areYouReallyReallySure = "yes";
    sendDiscord();
    fadeOutElementById("third-question-container")
    fadeOutElementById("first-quiz-question")
    fadeOutElementById("second-quiz-question")
    fadeOutElementById("third-quiz-question")
    fadeOutElementById("fourth-quiz-question")
    fadeOutElementById("fifth-quiz-question")
    fadeInElementById("fourth-question-container")
    fadeInElementById("last-question")
    fadeOutElementById("extra-yes-container")
    fadeOutElementById("first-yes-text")
}

function thirdClickedNo() {
    areYouReallyReallySure = "no";
    sendDiscord();
    location.reload();
}

//first answer

function firstFirstAnswer() {
    vieta = "kavine";
    sendDiscord();
    fadeOutElementById("first-quiz-question")
    fadeInElementById("second-quiz-question")
}

function firstSecondAnswer() {
    vieta = "kfc";
    sendDiscord();
    fadeOutElementById("first-quiz-question")
    fadeInElementById("second-quiz-question")
}

function firstThirdAnswer() {
    vieta = "netflix";
    sendDiscord();
    fadeOutElementById("first-quiz-question")
    fadeInElementById("second-quiz-question")
}

function firstFourthAnswer() {
    vieta = "parkas";
    sendDiscord();
    fadeOutElementById("first-quiz-question")
    fadeInElementById("second-quiz-question")
}

//second answer

function secondFirstAnswer() {
    saldainiai = "ferrero";
    sendDiscord();
    fadeOutElementById("second-quiz-question")
    fadeInElementById("third-quiz-question")
}

function secondSecondAnswer() {
    saldainiai = "milka";
    sendDiscord();
    fadeOutElementById("second-quiz-question")
    fadeInElementById("third-quiz-question")
}

function secondThirdAnswer() {
    saldainiai = "raffaello";
    sendDiscord();
    fadeOutElementById("second-quiz-question")
    fadeInElementById("third-quiz-question")
}

function secondFourthAnswer() {
    saldainiai = "X";
    sendDiscord();
    fadeOutElementById("second-quiz-question")
    fadeInElementById("third-quiz-question")
}

//third answer

function thirdFirstAnswer() {
    filmas = "nuotykiai";
    sendDiscord();
    fadeOutElementById("third-quiz-question")
    fadeInElementById("fourth-quiz-question")
}

function thirdSecondAnswer() {
    filmas = "siaubo";
    sendDiscord();
    fadeOutElementById("third-quiz-question")
    fadeInElementById("fourth-quiz-question")
}

function thirdThirdAnswer() {
    filmas = "romantinis";
    sendDiscord();
    fadeOutElementById("third-quiz-question")
    fadeInElementById("fourth-quiz-question")
}

function thirdFourthAnswer() {
    filmas = "X";
    sendDiscord();
    fadeOutElementById("third-quiz-question")
    fadeInElementById("fourth-quiz-question")
}

//fourth answer

function fourthFirstAnswer() {
    geles = "gvazdikai";
    sendDiscord();
    fadeOutElementById("fourth-quiz-question")
    fadeInElementById("fifth-quiz-question")
}

function fourthSecondAnswer() {
    geles = "chrizantemos";
    sendDiscord();
    fadeOutElementById("fourth-quiz-question")
    fadeInElementById("fifth-quiz-question")
}

function fourthThirdAnswer() {
    geles = "rozes";
    sendDiscord();
    fadeOutElementById("fourth-quiz-question")
    fadeInElementById("fifth-quiz-question")
}

function fourthFourthAnswer() {
    geles = "X";
    sendDiscord();
    fadeOutElementById("fourth-quiz-question")
    fadeInElementById("fifth-quiz-question")
}

//fifth answer

function fifthAnswer() {
    var typedText = document.getElementById("answer-input").value
    papildomai = typedText;
    sendDiscord()
    fadeOutElementById("fifth-quiz-question")
    fadeInElementById("last-question")
}

//sixth answer

function sixthAnswer() {
    baigti = "yes";
    sendDiscord();
    fadeOutElementById("last-question")
    fadeOutElementById("fourth-question-container")
}