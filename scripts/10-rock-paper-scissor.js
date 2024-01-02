

    let score=JSON.parse(localStorage.getItem('score')) || {
          wins:0,
          losses:0,
          ties:0
        };

        
      // if(!score){
      //   score={
      //     wins:0,
      //     losses:0,
      //     ties:0
      //   }
      // }
     
    updateScore();
    
    function playGame(playerMove){
      const computerMove=pickComputerMove();
        let result='';
        if(playerMove==='scissor'){
        if(computerMove === 'rock'){
            result='You lose.';
        }else if(computerMove==='paper'){
          result='You won.';
        }else if(computerMove === 'scissor'){
          result='Tie.';
        }
      }

      if(playerMove==='paper'){
        if(computerMove === 'rock'){
            result='You won.';
        }else if(computerMove==='paper'){
          result='Tie.';
        }else if(computerMove === 'scissor'){
          result='You lose.';
        }
      }

      if(playerMove==='rock'){
        if(computerMove === 'rock'){
          result='Tie.';
       }else if(computerMove==='paper'){
         result='You lose.';
       }else if(computerMove === 'scissor'){
        result='You won.';
       }
      }

      if(result==='You won.'){
        score.wins+=1;
      }else if(result==='You lose.'){
        score.losses+=1;
      }else{
        score.ties+=1;
      }
      
       localStorage.setItem('score', JSON.stringify(score));

       document.querySelector('.js-result').innerHTML=result;
       document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon">
     <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;       updateScore();
    
    }

    function updateScore(){
      document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    }

    
     
    
    function pickComputerMove(){
      const randomNumber = Math.random();
      let computerMove='';
      if(randomNumber>=0 && randomNumber<1/3){
         computerMove='rock';
      }else if(randomNumber>=1/3 && randomNumber<2/3){
         computerMove='paper';
      }else if(randomNumber>=2/3 && randomNumber<1){
         computerMove='scissor';
      }
      return computerMove;
    }
    