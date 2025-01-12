let score=JSON.parse(localStorage.getItem('score'));
      if(!score){
        score={
          Won:0,
          lost:0,
          draws:0
        };
      }
      updateScore();
       document.querySelector('.js-rock')
       .addEventListener('click', ()=>{
        playGame('Rock');
       })
       document.querySelector('.js-paper')
       .addEventListener('click', ()=>{
        playGame('Paper');
       })
       document.querySelector('.js-scissors')
       .addEventListener('click', ()=>{
        playGame('Scissors');
       })
      function playGame(playerMove){
        const computermove=pickcomputermove();
        let result='';
        if(playerMove==='Rock'){
          if(computermove==='rock'){
            result='Tie';
          }
          if(computermove==='paper'){
            result='Lost';
          }
          if(computermove==='Scissors'){
            result='Won';
          }
        }
        else if(playerMove==='Paper'){
          if(computermove==='rock'){
            result='Won';
          }
          if(computermove==='paper'){
            result='Tie';
          }
          if(computermove==='Scissors'){
            result='Lost';
          }
        }
        else if(playerMove==='Scissors'){
          if(computermove==='rock'){
            result='Lost';
          }
          if(computermove==='paper'){
            result='Won';
          }
          if(computermove==='Scissors'){
            result='Tie';
          }
        }
        if(result==='Won'){
          score.Won=score.Won+1;
        }
        else if(result==='Lost'){
          score.lost=score.lost+1;
        }
        else if(result==='Tie'){
          score.draws=score.draws+1;
        }
       updateScore();
       document.querySelector('.js-result').innerHTML=result;
       document.querySelector('.js-move').innerHTML=`Your
      <img src="gameimgae/${playerMove}-emoji.png" class="move-image">
      Computer 
      <img src="gameimgae/${computermove}-emoji.png"class="move-image">`;
      }
      localStorage.setItem('score', JSON.stringify(score));
      function updateScore(){
        document.querySelector('.js-score ').innerHTML=`Won=${score.Won} Lost=${score.lost} Draws=${score.draws}`;
      }
      let computermove='';
      function pickcomputermove(){
        const randomNumber=Math.random();
        if(randomNumber>=0 && randomNumber<1/3){
          computermove='paper';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
          computermove='rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
          computermove='Scissors';
        }
        return computermove
      }