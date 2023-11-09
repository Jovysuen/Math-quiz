var player1scores=0
var player2scores=0
var player1name=localStorage.getItem("player1name")
var player2name=localStorage.getItem("player2name")
var word1=0
var word2=0

console.log(player1name)
console.log(player2name)
document.getElementById("player1").innerHTML=player1name+"_"
document.getElementById("player2").innerHTML=player2name+"_"
document.getElementById("player1score").innerHTML=player1scores
document.getElementById("player2score").innerHTML=player2scores
document.getElementById("playerqturn").innerHTML="Question turn-"+player1name
document.getElementById("playeransturn").innerHTML="Answer turn-"+player2name

function snd(){
    word1=document.getElementById("inp1").value
    word2=document.getElementById("inp2").value
    questionword="<h4>"+word1+"X"+word2+"</h4>"
    textinput="<br>answer-<input type='text' id='answer'>"
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check"+"</button>"
    row=questionword+textinput+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("inp1").value=""
    document.getElementById("inp2").value=""
    cans=word1*word2
    console.log(cans)
}

var questionturn="player1"
var answerturn="player2"
function check(){
    getanswer=document.getElementById("answer").value
    if (answerturn==cans) {
        if (answerturn=="player1") {
            player1scores=player1scores+1
            document.getElementById("player1score").innerHTML=player1scores
        }
        else{
            player2scores=player2scores+1
            document.getElementById("player2score").innerHTML=player2scores
        }
    }
    if (answerturn=="player1") {
        answerturn="player2"
        document.getElementById("playeransturn").innerHTML="Answer turn-"+player2name
    }
    else{
        answerturn="player1"
        document.getElementById("playeransturn").innerHTML="Answer turn-"+player1name
    }
    if (questionturn=="player1") {
        questionturn="player2"
        document.getElementById("playerqturn").innerHTML="Question turn-"+player2name
    }
    else{
        questionturn="player1"
        document.getElementById("playerqturn").innerHTML="Question turn-"+player1name
    }
}