document.addEventListener('DOMContentLoaded') 
 {
    let isMoving = false;
    let meme = document.getElementById('meme');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let direction = 1; // 1 for moving right, -1 for moving left
}
    function startMoving() {
        isMoving = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        moveMeme();
    }

    function stopMoving() {
        isMoving = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }

    function moveMeme() {
        if (isMoving) {
            let currentPosition = meme.getBoundingClientRect();
            let newX = currentPosition.right + 5; // Adjust the speed by changing this value
            meme.style.transform = `translateX(${newX}px)`;

            // Check if the meme reaches the right edge and change direction
            if (newX + meme.width >= window.innerWidth) {
                direction = -1;
            }

            // Check if the meme reaches the left edge and change direction
            if (newX <= 0) {
                direction = 1;
            }

            setTimeout(moveMeme, 20); // Call moveMeme again after a short delay
        }
    }

    startBtn.addEventListener('click', startMoving);
    stopBtn.addEventListener('click', stopMoving);
;