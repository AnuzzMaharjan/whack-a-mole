document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', () => {
        let box = document.querySelectorAll('.box');
        let result = document.getElementById('result');
        let timer = document.getElementById('timer');

        let moleHit = 0;

        box.forEach(x => {
            x.addEventListener('click', whack);
        })

        const interval = setInterval(molePosition, 500);
        const counterInterval = setInterval(counter, 1000);

        function molePosition() {
            let position = Math.floor(Math.random() * 9);//math.random()*(max-min+1)+min 
            let image = document.createElement('img');
            image.src = "mole.png";
            box[position].appendChild(image);
            setTimeout(() => {
                box[position].removeChild(image);
            }, 500);
        }

        function counter() {
            let initial = timer.textContent;
            initial--;
            timer.textContent = initial;
            if (initial === 0) {
                clearInterval(interval);
                clearInterval(counterInterval);
                alert(`You've successfully hit ${moleHit} times!`);
            }
        }

        function whack() {
            if (this.childNodes[0]) {
                moleHit += 1;
                result.textContent = `Hits: ${moleHit}`;
            }
        }
    })

})