'use strict';
const playerimg = document.querySelector('.gameimg1');
const computerimg = document.querySelector('.gameimg2');
const userch1 = document.querySelector('.btn-rock');
const userch2 = document.querySelector('.btn-paper');
const userch3 = document.querySelector('.btn-scissor');
const win = document.querySelector('.winmsg');
const reset = document.querySelector('.btn-reset');
playerimg.classList.add('hidden');
computerimg.classList.add('hidden');
userch1.addEventListener('click', function () {
    let cc = Math.trunc(Math.random() * 3);
    console.log(cc);
    console.log();
    playerimg.src = 'rock.png';
    if (cc == 1)
        computerimg.src = "rock.png";
    else if (cc == 2)
        computerimg.src = "paper.png";
    else
        computerimg.src = 'scissor.png';
    playerimg.classList.remove('hidden');
    computerimg.classList.remove('hidden');

    if (playerimg.src.split('/').pop() == "scissor.png" && computerimg.src.split('/').pop() == "rock.png")
        win.textContent = "Computer Won!";

    else if (playerimg.src.split('/').pop() == "paper.png" && computerimg.src.split('/').pop() == "rock.png")
        win.textContent = "Player Won!";

    else if (playerimg.src.split('/').pop() == "rock.png" && computerimg.src.split('/').pop() == "scissor.png")
        win.textContent = "Player Won!";

    else if (playerimg.src.split('/').pop() == "rock.png" && computerimg.src.split('/').pop() == "paper.png")
        win.textContent = "Computer Won!";

    else if (playerimg.src.split('/').pop() == "paper.png" && computerimg.src.split('/').pop() == "scissor.png")
        win.textContent = "Computer Won!";

    else if (playerimg.src.split('/').pop() == "scissor.png" && computerimg.src.split('/').pop() == "paper.png")
        win.textContent = "Player Won!";
    else
        win.textContent = "Play again!"

})
userch2.addEventListener('click', function () {
    let cc = Math.trunc(Math.random() * 3);
    console.log(cc);
    playerimg.src = 'paper.png';
    if (cc == 1)
        computerimg.src = "rock.png";
    else if (cc == 2)
        computerimg.src = "paper.png";
    else
        computerimg.src = 'scissor.png';
    playerimg.classList.remove('hidden');
    computerimg.classList.remove('hidden');
    if (playerimg.src.split('/').pop() == "scissor.png" && computerimg.src.split('/').pop() == "rock.png")
        win.textContent = "Computer Won!";
    else if (playerimg.src.split('/').pop() == "paper.png" && computerimg.src.split('/').pop() == "rock.png")
        win.textContent = "Player Won!";
    else if (playerimg.src.split('/').pop() == "rock.png" && computerimg.src.split('/').pop() == "scissor.png")
        win.textContent = "Player Won!";
    else if (playerimg.src.split('/').pop() == "rock.png" && computerimg.src.split('/').pop() == "paper.png")
        win.textContent = "Player Won!";
    else if (playerimg.src.split('/').pop() == "paper.png" && computerimg.src.split('/').pop() == "scissor.png")
        win.textContent = "Computer Won!";
    else if (playerimg.src.split('/').pop() == "scissor.png" && computerimg.src.split('/').pop() == "paper.png")
        win.textContent = "Player Won!";
    else
        win.textContent = "Play again!"
})
userch3.addEventListener('click', function () {
    let cc = Math.trunc(Math.random() * 3);
    console.log(cc);
    playerimg.src = 'scissor.png';
    if (cc == 1)
        computerimg.src = "rock.png";
    else if (cc == 2)
        computerimg.src = "paper.png";
    else
        computerimg.src = 'scissor.png';
    playerimg.classList.remove('hidden');
    computerimg.classList.remove('hidden');
    if (playerimg.src.split('/').pop() == "scissor.png" && computerimg.src.split('/').pop() == "rock.png")
        win.textContent = "Computer Won!";
    else if (playerimg.src.split('/').pop() == "paper.png" && computerimg.src.split('/').pop() == "rock.png")
        win.textContent = "Player Won!";
    else if (playerimg.src.split('/').pop() == "rock.png" && computerimg.src.split('/').pop() == "paper.png")
        win.textContent = "Player Won!";
    else if (playerimg.src.split('/').pop() == "rock.png" && computerimg.src.split('/').pop() == "scissor.png")
        win.textContent = "Player Won!";
    else if (playerimg.src.split('/').pop() == "paper.png" && computerimg.src.split('/').pop() == "scissor.png")
        win.textContent = "Computer Won!";
    else if (playerimg.src.split('/').pop() == "scissor.png" && computerimg.src.split('/').pop() == "paper.png")
        win.textContent = "Player Won!";
    else
        win.textContent = "Play again!"
})
reset.addEventListener('click', function () {
    playerimg.classList.add('hidden');
    computerimg.classList.add('hidden');
    winmsg.textContent = "Can you beat me?"
})
