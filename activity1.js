sore=0;
function updateScore(){
    score=score + 1;
    documentgetElementBtId("score").innerHTML = "score :" + score;
}

function saveScore(){
    localStorage.setItem("score".score);
}

function nextPage(){
    window.location="activity_2.html";
}