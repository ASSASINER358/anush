function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);

    alert(`Computer chose ${computerChoice}. ${result}`);

    if (result.includes('Win')) {
        // Redirect to congratulatory page
        window.location.href = 'congratulations.html';
    }
}

function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'Computer Wins!';
    }
}
