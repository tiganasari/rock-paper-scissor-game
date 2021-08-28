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

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(options=> {
            options.addEventListener("click", function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //call compare hands
                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src =`./assets/${computerChoice}.png`;
            }); 
        });
        
    };

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
                winner.textContent = 'Player Wins!!'
                return;
            } else {
                winner.textContent = 'Soz Computer Wins';
                return;
            }
        }
        //paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins!!'
                return;
            } else {
                winner.textContent = 'Soz Computer Wins';
                return;
            }
        }//scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins!!'
                return;
            } else {
                winner.textContent = 'Soz Computer Wins';
                return;
            }
        }
    }

    startGame();
    playMatch();
};

game();