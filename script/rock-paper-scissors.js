
    const score = JSON.parse(localStorage.getItem
      ('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    //DOM UPDATE
    updateScoreElement();
    //-------- DOM end-------------- function below----------

    /*
    if(!score){
        score = {
          wins : 0,
          losses : 0,
          ties : 0
        };
    }
   */

    function playGame(playerMove) {
      const computerMove = pickComputerMove()

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You Lose !'
        } else if (computerMove === 'paper') {
          result = 'You Win !'
        } else if (computerMove === 'scissors') {
          result = 'Tie !'
        }

      } else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
          result = 'You win !'
        } else if (computerMove === 'paper') {
          result = 'Tie !'
        } else if (computerMove === 'scissors') {
          result = 'You Lose !'
        }

      } else if (playerMove === 'rock') {

        if (computerMove === 'rock') {
          result = 'Tie !'
        } else if (computerMove === 'paper') {
          result = 'You Lose !'
        } else if (computerMove === 'scissors') {
          result = 'You Win !'
        }
      }
      // -------------------------- set of codes

      // Update the code for score

      if (result === 'You Win !') {
        score.wins += 1;
      } else if (result === 'You Lose !') {
        score.losses += 1;
      } else if (result === 'Tie !') {
        score.ties += 1;
      }

      //localstorage only support string so we change using stringify
      localStorage.setItem('score', JSON.stringify(score));

      // ------------ DOM -------------- set of codes

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = `${result}`;

      document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
    Computer`

      // --------------- DOM End --------------
    }

    // -------  FUNCTIONS ------------------- set of codes

    // DOM Function
    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `Win: ${score.wins}   Losses : ${score.losses}   Ties : ${score.ties}`
    }
    //--------DOM end----------



    function pickComputerMove() {

      let randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper'
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'
      }
      return computerMove;
    }
    // -------------------------- set of codes
