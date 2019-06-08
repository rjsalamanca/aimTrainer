const gameContainer = document.getElementById('game'),
    target = document.getElementById('target');
var startTime = new Date();
target.addEventListener('click',function(e){
    endTime = new Date();
    var timeDiff = endTime - startTime;
    console.log('TIME TOOK:',timeDiff)
    let game = {
            height:gameContainer.offsetHeight, 
            width:gameContainer.offsetWidth
        }
    let randomHeight = Math.floor(Math.random() * game.height - (this.scrollHeight)) + 1
    let randomWidth = Math.floor(Math.random() * game.width  - (this.scrollWidth)) + 1
    this.style.marginLeft = `${randomWidth}px`;
    this.style.marginTop = `${randomHeight}px`;
    startTime = new Date();
})