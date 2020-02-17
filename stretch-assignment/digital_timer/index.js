function createButton(name){
    const start = document.createElement('button');

    start.classList.add(`${name}-button`);

    start.textContent = `${name} Timer`;
    start.style.display = 'inline-block';
    start.style['background-color'] = 'teal';
    start.style.color = 'white';
    start.style['font-size'] = '30px';
    start.style.padding = '2% 5%';
    start.style['border-radius'] = '10px';
    start.style['margin-bottom'] = '1%';

    return start;
}

document.querySelector('body').prepend(createButton('start'));
document.querySelector('body').append(createButton('stop'));
document.querySelector('body').append(createButton('reset'));

document.querySelector('.start-button').addEventListener('click', function (){
  document.querySelector('.start-button').style.background = 'red';
  let secondTens = document.getElementById('secondTens');
  let secondOnes = document.getElementById('secondOnes');
  let msHundreds = document.getElementById('msHundreds');
  let msTens = document.getElementById('msTens');

  secondTens.textContent = 0;
  secondOnes.textContent = 0;
  msHundreds.textContent = 0;
  msTens.textContent = 0;
  
  var timerSeconds = setInterval(seconds, 1000);
  
  function seconds(){
    if(secondOnes.textContent == 9 && secondTens.textContent == 0){
      secondOnes.textContent = 0;
      secondTens.textContent = 1
      clearInterval(timerSecondOnes);
    } else {
      secondOnes.textContent++;
    }
  }
  
  var timerms = setInterval(milliseconds, 10);
  
  function milliseconds(){
    if(msTens.textContent == 9 && msHundreds.textContent != 9){
      msTens.textContent = 0;
      msHundreds.textContent++;
    } else if(msTens.textContent ==9 && msHundreds.textContent == 9){
      msTens.textContent = 0;
      msHundreds.textContent = 0;
      if(secondOnes.textContent != 9){
        milliseconds();
      } else {
        clearInterval(timerms);
      }
    } else {
      msTens.textContent++;
    }
  }

  
  document.querySelector('.stop-button').addEventListener('click', function (){
    document.querySelector('.stop-button').style.background = 'blue';
    clearInterval(timerSeconds);
    clearInterval(timerms);
  })
  document.querySelector('.reset-button').addEventListener('click', () => {
      document.querySelector('.reset-button').style.background = 'green';
      clearInterval(timerSeconds);
      clearInterval(timerms);
      secondOnes.textContent = 0;
      secondTens.textContent = 0;
      msHundreds.textContent = 0;
      msTens.textContent = 0;
  })
});



