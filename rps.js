var choices = ['rock', 'paper', 'scissors'];
playerScore = 0;
cpuScore = 0;
ties = 0;

function checkWin(p,c) {
    if (p == "rock") {
        if (c == "paper") {
            return "cpu";
        }
        else if (c == "scissors") {
            return "player";
        }
        else {
            return "tie";
        }
    }
    else if (p == "paper") {
        if (c == "paper") {
            return "tie";
        }
        else if (c == "scissors") {
            return "cpu";
        }
        else {
            return "player";
        }
    }
    else if (p == "scissors") {
        if (c == "paper") {
            return "player";
        }
        else if (c == "scissors") {
            return "tie";
        }
        else {
            return "cpu";
        }
    }
}

function game(player) {
    
    let cpu = choices[Math.floor(Math.random()*3)];
    console.log(player + " v " + cpu);
    let winner = checkWin(player, cpu);

    if (winner == "tie") {
        ties++;
        document.getElementById('ties').innerHTML = ties;
    }
    else if (winner == "player") {
        playerScore++;
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if (winner == "cpu") {
        cpuScore++;
        document.getElementById('cpuScore').innerHTML = cpuScore;
    }

    let total = playerScore + cpuScore + ties;
    let p1Width = Math.round((playerScore/total)*10000) / 100;
    let p2Width = Math.round((cpuScore/total)*10000) / 100;
    let tieWidth = 100 - (p1Width + p2Width);
    document.getElementById('s1').style.width = p1Width + "%";
    document.getElementById('s2').style.width = p2Width + "%";
    document.getElementById('s3').style.width = tieWidth + "%";
    
    
}