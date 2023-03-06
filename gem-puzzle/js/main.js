document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const startHTML = `
    <div class="landscape__wrap">
        <div class="landscape"></div>
    </div>
    <div class="container">
        <section class="puzzle">
            <nav class="puzzle-nav">
                <ul class="puzzle-nav-list">
                    <li class="puzzle-nav-item">
                        <button class="puzzle-nav__btn" id="shuffle">Shuffle and start</button>
                    </li>
                    <li class="puzzle-nav-item">
                        <button class="puzzle-nav__btn" id="save">Save</button>
                    </li>
                    <li class="puzzle-nav-item">
                        <button class="puzzle-nav__btn" id="sound">Sound</button>
                    </li>
                    <li class="puzzle-nav-item">
                        <button class="puzzle-nav__btn" id="result">Result</button>
                    </li>
                </ul>
            </nav>

            <div class="puzzle-info">
                <div class="puzzle-info__moves">
                    <span class="puzzle-info__moves-text">Moves:</span>
                    <span class="puzzle-info__moves-count"></span>
                </div>
                <div class="puzzle-info__time">
                    <span class="puzzle-info__time-text">Time:</span>
                    <span class="puzzle-info__time-count">00:00:00</span>
                </div>
            </div>

            <div class="puzzle-app" id="puzzles" data-size="">
            </div>

            <div class="puzzle-current">
                <span class="puzzle-current-text">Frame size:</span>
                <span class="puzzle-current-size">4 x 4</span>
            </div>

            <div class="puzzle-sizes">
                <span class="puzzle-sizes__text">Other sizes:</span>
                <button class="puzzle-sizes__btn" data-render="3">3 x 3</button>
                <button class="puzzle-sizes__btn" data-render="4">4 x 4</button>
                <button class="puzzle-sizes__btn" data-render="5">5 x 5</button>
                <button class="puzzle-sizes__btn" data-render="6">6 x 6</button>
                <button class="puzzle-sizes__btn" data-render="7">7 x 7</button>
                <button class="puzzle-sizes__btn" data-render="8">8 x 8</button>
            </div>

            <div class="puzzle-leaderboard">
                <h2 class="puzzle-leaderboard__title">Top results:</h2>

                <ol class="puzzle-leaderboard__list">
                </ol>
            </div>
        </section>
    </div>
    <div class="popup">
        <div class="popup__overlay"></div>
        <div class="popup__container">
            <h2 class="popup__title">Oh, I see you'r a big brain man</h2>
            <p class="popup__info">You</p>
            <button class="popup__btn"></button>
        </div>
    </div>
    `;
    body.innerHTML = startHTML;

    const puzzlesObj = {
        "3": [
            1, 2, 3, 
            4, 5, 6, 
            7, 8, 0
        ],
        "4": [
            1, 2, 3, 4, 
            5, 6, 7, 8, 
            9, 10, 11, 12, 
            13, 14, 15, 0
        ],
        "5": [
            1, 2, 3, 4, 5, 
            6, 7, 8, 9, 10, 
            11, 12, 13, 14, 15, 
            16, 17, 18, 19, 20, 
            21, 22, 23, 24, 0
        ],
        "6": [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12, 
            13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 
            25, 26, 27, 28, 29, 30, 
            31, 32, 33, 34, 35, 0
        ],
        "7": [
            1, 2, 3, 4, 5, 6, 7, 
            8, 9, 10, 11, 12, 13, 14, 
            15, 16, 17, 18, 19, 20, 21, 
            22, 23, 24, 25, 26, 27, 28, 
            29, 30, 31, 32, 33, 34, 35, 
            36, 37, 38, 39, 40, 41, 42, 
            43, 44, 45, 46, 47, 48, 0
        ],
        "8": [
            1, 2, 3, 4, 5, 6, 7, 8, 
            9, 10, 11, 12, 13, 14, 15, 16, 
            17, 18, 19, 20, 21, 22, 23, 24, 
            25, 26, 27, 28, 29, 30, 31, 32, 
            33, 34, 35, 36, 37, 38, 39, 40, 
            41, 42, 43, 44, 45, 46, 47, 48, 
            49, 50, 51, 52, 53, 54, 55, 56, 
            57, 58, 59, 60, 61, 62, 63, 0
        ]
    };

    //Секундомер
    //изначальные переменные
    let min = 0;
    let hour = 0;
    let sec;
    let emptyEl;

    class PetsCard {
        constructor(number, parentSelector, size) {
        this.number = number;
        this.parent = document.querySelector(parentSelector);
        this.size = size;
        }

        render() {
            const element = document.createElement('button');
            element.classList.add('puzzle-app__btn');
            element.setAttribute('id', `puzzle${this.number}`)
            if (this.number === 0) {
                element.classList.add('puzzle-app__btn--empty');
                element.removeAttribute('id');
                element.setAttribute('id', 'empty-puzzle');
            } 
            element.textContent = this.number;
            this.parent.dataset.size = this.size;
            this.parent.append(element);

            document.querySelector('.puzzle-current-size').textContent = `${this.size} x ${this.size}`;
            document.querySelector('.puzzle-info__moves-count').textContent = 0;
            sec = 0;
            min = 0;
            hour = 0;

            let oldPosition = [...document.querySelector('#puzzles').children].map(item => {
                item.draggable = true;
                let position = document.getElementById(item.id).getBoundingClientRect();
                return position;
            });
        }
    };

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    function isRightArr(arr) {
        let result = 0;

        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] === 0) {
                continue;
            }
            for (let k = i + 1; k < arr.length - 1; k += 1) {
                if (arr[k] === 0) {
                    continue;
                }
                if (arr[i] > arr[k]) {
                    result += 1;
                }
            }
        }

        return result % 2 === 0;
    }

    if (localStorage.getItem('isSave') === 'false' || localStorage.getItem('isSave') === null) {
        let arr;
        do {
            arr = shuffleArray(puzzlesObj[3]);
        } while(!isRightArr(arr))
        arr.forEach((number) => {
            new PetsCard(number, '.puzzle-app', 3).render();
        });
    } else if (localStorage.getItem('isSave') === 'true') {
        document.querySelector('.puzzle-app').innerHTML = '';

        const saveSize = +localStorage.getItem('saveSize');
        const saveMoves = +localStorage.getItem('saveMoves');
        const savePuzzle = JSON.parse(localStorage.getItem('savePuzzle'));

        savePuzzle.forEach((number) => {
            new PetsCard(number, '.puzzle-app', saveSize).render();
        });
        document.querySelector('.puzzle-info__moves-count').textContent = saveMoves;
        min = +localStorage.getItem('saveMin') || 0;
        hour = +localStorage.getItem('saveHour') || 0;
        sec = +localStorage.getItem('saveSec') || 0;
    }

    let topResultArr = JSON.parse(localStorage.getItem('resultArr') || "[]");
    
    localStorage.getItem('isSave') ? localStorage.getItem('isSave') : localStorage.setItem('isSave', 'false')
    localStorage.getItem('isSound') ? localStorage.getItem('isSound') : localStorage.setItem('isSound', 'false')

    const puzzleContainer = document.querySelector('.puzzle-app');
    const leaderboard = document.querySelector('.puzzle-leaderboard__list');
    const restartGameBtn = document.querySelector('#shuffle');
    const soundBtn = document.querySelector('#sound');
    const saveBtn = document.querySelector('#save');
    const resultBtn = document.querySelector('#result');
    const popupBtn = document.querySelector('.popup__btn');

    const tapMusic = new Audio();
    tapMusic.src = "./assets/music/tap.mp3";
    const backgroundMusic = new Audio();
    backgroundMusic.src = "./assets/music/background.mp3";
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.25;

    if (localStorage.getItem('isSound') === 'true') {
        backgroundMusic.play();
        soundBtn.textContent = 'Sound off';
    } else if (localStorage.getItem('isSound') === 'false') {
        backgroundMusic.pause();
        soundBtn.textContent = 'Sound on';
    }

    const renderPuzzleContainer = document.querySelector('.puzzle-sizes');

    let emptyPuzzle = document.querySelector('.puzzle-app__btn--empty');
    let movesCount = document.querySelector('.puzzle-info__moves-count');

    function canShuffle(e) {
        emptyPuzzle = document.querySelector('.puzzle-app__btn--empty');
    
        topEmpty = +emptyPuzzle.getBoundingClientRect().top.toFixed(2);
        bottomEmpty = +emptyPuzzle.getBoundingClientRect().bottom.toFixed(2);
        leftEmpty = +emptyPuzzle.getBoundingClientRect().left.toFixed(2);
        rightEmpty = +emptyPuzzle.getBoundingClientRect().right.toFixed(2);
    
        topElem = +e.target.getBoundingClientRect().top.toFixed(2);
        bottomElem = +e.target.getBoundingClientRect().bottom.toFixed(2);
        leftElem = +e.target.getBoundingClientRect().left.toFixed(2);
        rightElem = +e.target.getBoundingClientRect().right.toFixed(2);
    
        return (topEmpty === bottomElem && leftEmpty === leftElem && rightEmpty === rightElem) ||
                (bottomEmpty === topElem && leftEmpty === leftElem && rightEmpty === rightElem) ||
                (rightEmpty === leftElem && topEmpty === topElem && bottomEmpty === bottomElem) ||
                (leftEmpty === rightElem && topEmpty === topElem && bottomEmpty === bottomElem)
    }

    function isWin() {
        const checkArr = [];
        document.querySelectorAll('.puzzle-app__btn').forEach(item => {
            checkArr.push(+item.textContent);
        });
        for (let i = 0; i < checkArr.length - 2; i += 1) {
            if (checkArr[checkArr.length - 1] !== 0) {
                return false;
            }

            if (checkArr[i] + 1 !== checkArr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    puzzleContainer.addEventListener('click', (e) => {
        if (e.target.closest('.puzzle-app__btn')) {
            if (canShuffle(e)) {
                let topEmpty = +emptyPuzzle.getBoundingClientRect().top.toFixed(2);
                let bottomEmpty = +emptyPuzzle.getBoundingClientRect().bottom.toFixed(2);
                let leftEmpty = +emptyPuzzle.getBoundingClientRect().left.toFixed(2);
                let rightEmpty = +emptyPuzzle.getBoundingClientRect().right.toFixed(2);
            
                let topElem = +e.target.getBoundingClientRect().top.toFixed(2);
                let bottomElem = +e.target.getBoundingClientRect().bottom.toFixed(2);
                let leftElem = +e.target.getBoundingClientRect().left.toFixed(2);
                let rightElem = +e.target.getBoundingClientRect().right.toFixed(2);

                if (localStorage.getItem('isSound') === 'true') {
                    tapMusic.play();
                }

                let count = +movesCount.textContent
                movesCount.textContent = count += 1;
                
                emptyPuzzle.innerHTML = e.target.innerHTML;

                if (rightEmpty === leftElem && topEmpty === topElem && bottomEmpty === bottomElem) {
                    e.target.classList.add('toLeft');
                    emptyPuzzle.classList.add('toRight');
                } else if (leftEmpty === rightElem && topEmpty === topElem && bottomEmpty === bottomElem) {
                    e.target.classList.add('toRight');
                    emptyPuzzle.classList.add('toLeft');
                } else if (topEmpty === bottomElem && leftEmpty === leftElem && rightEmpty === rightElem) {
                    e.target.classList.add('toBottom');
                    emptyPuzzle.classList.add('toTop');
                } else if (bottomEmpty === topElem && leftEmpty === leftElem && rightEmpty === rightElem) {
                    e.target.classList.add('toTop');
                    emptyPuzzle.classList.add('toBottom');
                }

                puzzleContainer.classList.add('puzzle-app--lock');

                setTimeout(() => {
                    emptyPuzzle.setAttribute('id', `puzzle${e.target.textContent}`);
                    emptyPuzzle.classList.remove('puzzle-app__btn--empty');
    
                    e.target.setAttribute('id', 'empty-puzzle');
                    e.target.classList.add('puzzle-app__btn--empty');
                    e.target.innerHTML = 0;

                    emptyPuzzle.className = 'puzzle-app__btn';
                    e.target.className = 'puzzle-app__btn puzzle-app__btn--empty';
                    puzzleContainer.classList.remove('puzzle-app--lock');
                    
                    if ( isWin() ) {
                        const data = [movesCount.textContent, document.querySelector('.puzzle-info__time-count').textContent];
                        topResultArr.push(data);
                        localStorage.setItem('resultArr', JSON.stringify(topResultArr));
                        
                        document.querySelector('.popup').classList.add('popup--visible');
                        document.querySelector('.popup__overlay').classList.add('popup__overlay--visible');
                        document.querySelector('.popup__info').textContent = `You solved the puzzle in ${document.querySelector('.puzzle-info__time-count').textContent} and ${movesCount.textContent} moves!`
    
                        clearInterval(timerId);
                    }
                }, 500)
            }
        }
    });

    restartGameBtn.addEventListener('click', (e) => {
        puzzleContainer.innerHTML = '';
        const currentSize = +puzzleContainer.dataset.size;

        shuffleArray(puzzlesObj[currentSize]).forEach((number) => {
            new PetsCard(number, '.puzzle-app', currentSize).render();
        });
    });

    soundBtn.addEventListener('click', () => {
        localStorage.setItem('isSound', localStorage.getItem('isSound') === 'true' ? 'false' : 'true');

        if (localStorage.getItem('isSound') === 'true') {
            backgroundMusic.play();
            soundBtn.textContent = 'Sound off';
        }

        if (localStorage.getItem('isSound') === 'false') {
            backgroundMusic.pause();
            soundBtn.textContent = 'Sound on';
        }
    });

    renderPuzzleContainer.addEventListener('click', (e) => {
        if (e.target.closest('.puzzle-sizes__btn')) {
            puzzleContainer.innerHTML = '';

            const renderSize = +e.target.dataset.render;

            if (renderSize === 3) {
                let arr;
                do {
                    arr = shuffleArray(puzzlesObj[3]);
                } while(!isRightArr(arr))
                arr.forEach((number) => {
                    new PetsCard(number, '.puzzle-app', 3).render();
                });
            } else {
                shuffleArray(puzzlesObj[renderSize]).forEach((number) => {
                    new PetsCard(number, '.puzzle-app', renderSize).render();
                });
            }
        }
    });

    saveBtn.addEventListener('click', (e) => {
        localStorage.setItem('isSave', 'true')

        const saveTimer = document.querySelector('.puzzle-info__time-count').textContent.split(':').map(num => +num);
        let [saveHour, saveMin, saveSec] = saveTimer;
        const puzzles = document.querySelectorAll('.puzzle-app__btn');
        const saveMoves = document.querySelector('.puzzle-info__moves-count').textContent;
        const saveArr = [];
        puzzles.forEach(puzzle => saveArr.push(+puzzle.textContent));
        

        localStorage.setItem('savePuzzle', JSON.stringify(saveArr));
        localStorage.setItem('saveSize', puzzleContainer.dataset.size);
        localStorage.setItem('saveMoves', saveMoves);
        localStorage.setItem('saveSec', saveSec);
        localStorage.setItem('saveMin', saveMin);
        localStorage.setItem('saveHour', saveHour);
    });

    resultBtn.addEventListener('click', (e) => {
        document.querySelector('.puzzle-leaderboard').classList.toggle('puzzle-leaderboard--active');

        let arr = JSON.parse(localStorage.getItem('resultArr'));

        if (arr) {
            arr = arr.sort(((x, y) => y[0] - x[0])).slice(0, 10);

            leaderboard.innerHTML = '';
            arr.forEach(item => {
                const element = document.createElement('li');
                element.classList.add('.puzzle-leaderboard__item');
                element.innerHTML = `
                    <span>Moves:</span>
                    <span>${item[0]}</span>
                    <span>Time:</span>
                    <span>${item[1]}</span>
                `
                leaderboard.prepend(element);
            })
        }
    });

    popupBtn.addEventListener('click', (e) => {
        document.querySelector('.popup').classList.remove('popup--visible');
        document.querySelector('.popup__overlay').classList.remove('popup__overlay--visible');

        document.querySelector('.puzzle-app').innerHTML = '';
        let arr;
        do {
            arr = shuffleArray(puzzlesObj[3]);
        } while(!isRightArr(arr))
        arr.forEach((number) => {
            new PetsCard(number, '.puzzle-app', 3).render();
        });

        sec = 0;
        min = 0;
        hour = 0;
        movesCount.textContent = 0;
        init();
    })

    let timerId;
    function init() {
        sec = +localStorage.getItem('saveSec') || 0;
        timerId = setInterval(tick, 1000);
    }

    function tick() {
        sec += 1;
        if (sec >= 60) {
            min += 1;
            sec -= 60;
        }
        if (min >= 60) {
            hour += 1;
            min -= 60;
        }
        if (sec < 10) {
            if (min < 10) {
                if (hour < 10) {
                    document.querySelector('.puzzle-info__time-count').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
                } else {
                    document.querySelector('.puzzle-info__time-count').innerHTML = hour + ':0' + min + ':0' + sec;
                }
            } else {
                if (hour < 10) {
                    document.querySelector('.puzzle-info__time-count').innerHTML = '0' + hour + ':' + min + ':0' + sec;
                } else {
                    document.querySelector('.puzzle-info__time-count').innerHTML = hour + ':' + min + ':0' + sec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    document.querySelector('.puzzle-info__time-count').innerHTML = '0' + hour + ':0' + min + ':' + sec;
                } else {
                    document.querySelector('.puzzle-info__time-count').innerHTML = hour + ':0' + min + ':' + sec;
                }
            } else {
                if (hour < 10) {
                    document.querySelector('.puzzle-info__time-count').innerHTML = '0' + hour + ':' + min + ':' + sec;
                } else {
                    document.querySelector('.puzzle-info__time-count').innerHTML = hour + ':' + min + ':' + sec;
                }
            }
        }
    }
    init();


 
    let dragElement;
    let nextElement;

    // let oldPosition = [...document.querySelector('#puzzles').children].map(item => {
    //     item.draggable = true;
    //     let position = document.getElementById(item.id).getBoundingClientRect();
    //     return position;
    // });

    function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function onDragEnd(evt) {
        evt.preventDefault();
        let tempDragSib = dragElement.nextElementSibling === emptyPuzzle ? dragElement.nextElementSibling.nextElementSibling : dragElement.nextElementSibling; 
        let tempEmpty = emptyPuzzle;

        let topEmpty = +emptyPuzzle.getBoundingClientRect().top.toFixed(2);
        let bottomEmpty = +emptyPuzzle.getBoundingClientRect().bottom.toFixed(2);
        let leftEmpty = +emptyPuzzle.getBoundingClientRect().left.toFixed(2);
        let rightEmpty = +emptyPuzzle.getBoundingClientRect().right.toFixed(2);
    
        let topElem = +dragElement.getBoundingClientRect().top.toFixed(2);
        let bottomElem = +dragElement.getBoundingClientRect().bottom.toFixed(2);
        let leftElem = +dragElement.getBoundingClientRect().left.toFixed(2);
        let rightElem = +dragElement.getBoundingClientRect().right.toFixed(2);

        emptyPuzzle.replaceWith(dragElement);

        if (leftEmpty === rightElem && topEmpty === topElem && bottomEmpty === bottomElem) {
            if (tempDragSib === null) {
                document.querySelector('#puzzles').lastChild.before(tempEmpty);
            } else {
                dragElement.before(tempEmpty);
            }
        } else {
            if (tempDragSib === null) {
                document.querySelector('#puzzles').lastChild.after(tempEmpty);
            } else {
                tempDragSib.before(tempEmpty);
            }
        }
        
        let count = +movesCount.textContent
        movesCount.textContent = count += 1;

        if ( isWin() ) {
            const data = [movesCount.textContent, document.querySelector('.puzzle-info__time-count').textContent];
            topResultArr.push(data);
            localStorage.setItem('resultArr', JSON.stringify(topResultArr));
            
            document.querySelector('.popup').classList.add('popup--visible');
            document.querySelector('.popup__overlay').classList.add('popup__overlay--visible');
            document.querySelector('.popup__info').textContent = `You solved the puzzle in ${document.querySelector('.puzzle-info__time-count').textContent} and ${movesCount.textContent} moves!`

            clearInterval(timerId);
        }

        document.querySelector('#puzzles').removeEventListener('dragover', onDragOver, false);
        document.querySelector('#puzzles').removeEventListener('dragend', onDragEnd, false);
        
        
    }

    document.querySelector('#puzzles').addEventListener('dragstart', (e) => {
        if (canShuffle(e)) {
            dragElement = e.target;
            nextElement = dragElement.nextSiblings;

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', dragElement.textContent);
            
            document.querySelector('#puzzles').addEventListener('dragover', onDragOver, false);
            document.querySelector('#puzzles').addEventListener('dragend', onDragEnd, false);
        }
    });
}, false);