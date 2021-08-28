const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(options=> {
            options.addEventListener("click", function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //call compare hands
                
                setTimeout(() => {
                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src =`./assets/${computerChoice}.png`;

                }, 2000);
              

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            }); 
        });
        
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

        
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // when it's tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is tie!';
            return;
        }
        // rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Soz Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins!!'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Soz Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }//scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins!!'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Soz Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
};

game();