const gameBoard = document.querySelector('#game-board');
const player = document.querySelector('.player');
const goal = document.querySelector('.goal');
const width = gameBoard.offsetWidth;
const height = gameBoard.offsetHeight;

document.addEventListener('keydown',(event) => {
    if(event.key ==='ArrowUp'){
        player.style.top = `${Math.max(0,player.offsetTop - 40)}px`;
    }else if (event.key === 'ArrowDown'){
        player.style.top = `${Math.min(height - 40,player.offsetTop + 40)}px`;
    }else if (event.key === 'ArrowLeft'){
        player.style.left = `${Math.max(0,player.offsetLeft - 40)}px`;
    }else if (event.key === 'ArrowRight'){
        player.style.left = `${Math.min(width - 40,player.offsetLeft + 40)}px`;
    }

    if(isCollide(player,goal)){
        alert('ゴール！');
    }
    function isCollide(a, b) {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
      
        return !(
          aRect.bottom < bRect.top ||
          aRect.top > bRect.bottom ||
          aRect.right < bRect.left ||
          aRect.left > bRect.right
        );
      }
      
});
