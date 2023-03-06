import gamesData from './db';
// eslint-disable-next-line
const playIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgNi45OTk5OUg2VjE3SDdWNi45OTk5OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03LjAwMDAzIDZMNyA2Ljk5OTk5TDkuMDAwMDEgN1Y2SDcuMDAwMDNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS4wMDAwMSA3TDkgOC4wMDAwMUwxMSA3Ljk5OTk5TDExIDcuMDAwMDFMOS4wMDAwMSA3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExIDcuOTk5OTlWOC45OTk5OUwxMyA5TDEzIDcuOTk5OTlIMTFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTMgOVYxMEwxNSAxMEwxNSA5SDEzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE1IDEwVjExTDE3IDExTDE3IDEwSDE1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE3IDEzSDE4VjExSDE3VjEzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE1IDEzVjE0SDE3TDE3IDEzTDE1IDEzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzIDE0VjE1SDE1TDE1IDE0TDEzIDE0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExIDE1VjE2SDEzTDEzIDE1TDExIDE1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkgMTZMOS4wMDAwMSAxN0wxMSAxN0wxMSAxNkw5IDE2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTcgMTdMNy4wMDAwMyAxOEg5LjAwMDAxVjE3TDcgMTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOSA3SDdWMTdIOVYxNkgxMVYxNUgxM1YxNEgxNVYxM0gxN1YxMUgxNVYxMEgxM1Y5SDExVjhIOVY3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==';
// eslint-disable-next-line
const pauseIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDYuMzMzMzRWNS4zMzMzNEgxNFY2LjMzMzM0SDE3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzIDE3LjMzMzNIMTRWNi4zMzMzNEgxM1YxNy4zMzMzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTcgNS4zMzMzNFY2LjMzMzM0SDEwVjUuMzMzMzRIN1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03IDYuMzMzMzRINlYxNy4zMzMzSDdWNi4zMzMzNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMCAxNy4zMzMzSDExVjYuMzMzMzRIMTBWMTcuMzMzM1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03IDE3LjMzMzNWMTguMzMzM0gxMFYxNy4zMzMzSDdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTcgMTguMzMzM1YxNy4zMzMzSDE0VjE4LjMzMzNIMTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTggNi4zMzMzNEgxN1YxNy4zMzMzSDE4VjYuMzMzMzRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNyA2LjMzMzM0VjE3LjMzMzNIMTBWNi4zMzMzNEg3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE3IDE3LjMzMzNIMTRWNi4zMzMzNEgxN1YxNy4zMzMzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==';
const buildHTML = `
<div class="container">
    <div class="app__wrap">
        <div class="app-header">
            <ul class="app-header__lvls">
                <li class="app-header__lvls-name app-header__lvls-name--active">****</li>
                <li class="app-header__lvls-name">****</li>
                <li class="app-header__lvls-name">****</li>
                <li class="app-header__lvls-name">****</li>
                <li class="app-header__lvls-name">****</li>
            </ul>
            <div class="app-header__score">
                <span class="app-header__score-text">Score:</span>
                <span class="app-header__score-num">0</span>
            </div>
        </div>
        <div class="app-question">
            <img src="https://i0.wp.com/conservativeorthopedics.com/wp-content/uploads/2017/05/mario-box-question-mark.gif?fit=300%2C300&ssl=1&w=640" class="app-question__img" alt="">
            <span class="app-question__name">*****</span>
            <div class="app-audio app-question__music">
                <div class="app-audio__timeline">
                    <div class="app-audio__timeline-progress"></div>
                </div>
                <div class="app-audio__controls">
                    <div class="app-audio__play-container">
                        <button class="app-audio__play-btn">
                            <img src="${playIcon}" class="app-audio__play-btn-icon" alt="">
                        </button>
                    </div>
                    <div class="app-audio__time">
                        <span class="app-audio__time-current">0:00</span>
                        <span class="app-audio__time-sep">/</span>
                        <span class="app-audio__time-total">1:48</span>
                    </div>
                    <div class="app-audio__volume-container">
                        <button class="app-audio__volume-btn">
                            <img class="app-audio__volume-btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADFJREFUeF7N0DEBADAQwkAc4N9lHaQSwvhMNwJZ0wE4OgBFgTrIuwPv7Nv3D7OgBs8HmGx5aWWgDnEAAAAASUVORK5CYII=" alt="" style="width: 100%;height: 100%;">
                        </button>
                        <div class="app-audio__volume-percentage-container">
                            <div class="app-audio__volume-percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="app-answers">
            <li class="app-answers__item">
                <button class="app-answers__item-btn">****</button>
            </li>
            <li class="app-answers__item">
                <button class="app-answers__item-btn">****</button>
            </li>
            <li class="app-answers__item">
                <button class="app-answers__item-btn">****</button>
            </li>
            <li class="app-answers__item">
                <button class="app-answers__item-btn">****</button>
            </li>
            <li class="app-answers__item">
                <button class="app-answers__item-btn">****</button>
            </li>
        </ul>
        <div class="app-answer-info">
            <img src="https://i0.wp.com/conservativeorthopedics.com/wp-content/uploads/2017/05/mario-box-question-mark.gif?fit=300%2C300&ssl=1&w=640" class="app-answer-info__img" alt="">
            <span class="app-answer-info__name">****</span>
            <div class="app-audio app-answer-info__music">
                <div class="app-audio__timeline">
                    <div class="app-audio__timeline-progress"></div>
                </div>
                <div class="app-audio__controls">
                    <div class="app-audio__play-container">
                        <button class="app-audio__play-btn">
                            <img src="${playIcon}" class="app-audio__play-btn-icon" alt="">
                        </button>
                    </div>
                    <div class="app-audio__time">
                        <span class="app-audio__time-current">0:00</span>
                        <span class="app-audio__time-sep">/</span>
                        <span class="app-audio__time-total">1:48</span>
                    </div>
                    <div class="app-audio__volume-container">
                        <div class="app-audio__volume-btn">
                            <img class="app-audio__volume-btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADFJREFUeF7N0DEBADAQwkAc4N9lHaQSwvhMNwJZ0wE4OgBFgTrIuwPv7Nv3D7OgBs8HmGx5aWWgDnEAAAAASUVORK5CYII=" alt="" style="width: 100%;height: 100%;">
                        </div>
                        <div class="app-audio__volume-percentage-container">
                            <div class="app-audio__volume-percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="app-answer-info__text">*****</p>
            <div class="app-answer-info__overflow">
                <span class="app-answer-info__overflow-text">
                    Choose the answer option to view the additional information
                </span>
            </div>
        </div>
        <button class="app-btn-next app-btn-next--disable">Next Level</button>
    </div>
</div>
`;

let questionID = null;
let scorePerAnswer = 4;
let totalScore = 0;
const appContainer = document.querySelector('#app');
const popup = document.querySelector('.app-popup');
let isWin = false;
const pagesNames = ['Warm-up', 'Cartoon', 'Shooter', 'RPG', 'Fighting'];
const maxPage = pagesNames.length;
let currentPage = 1;
const correctAudioSrc = ['./correct-1.mp3', './correct-2.mp3', './correct-3.mp3'];
const wrongAudioSrc = ['./wrong-1.mp3', './wrong-2.mp3', './wrong-3.mp3'];
const bgMusic = new Audio();
bgMusic.src = './bg-music.mp3';
bgMusic.loop = true;
const bgMusicBtn = document.querySelector('.bg-music');
if (!localStorage.getItem('isPlay')) {
    localStorage.setItem('isPlay', 'true');
}

if (localStorage.getItem('isPlay') === 'true') {
    document.querySelector('.bg-music__icon').setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADFJREFUeF7N0DEBADAQwkAc4N9lHaQSwvhMNwJZ0wE4OgBFgTrIuwPv7Nv3D7OgBs8HmGx5aWWgDnEAAAAASUVORK5CYII=');
    document.querySelector('.bg-music__icon').setAttribute('alt', 'Звук включён');
} else if (localStorage.getItem('isPlay') === 'false') {
    document.querySelector('.bg-music__icon').setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADVJREFUeAGNxjEBADAQhDAc4N/lO7hKoJnCLzus4plhdDwrMjLnZcY652XGIrAz48jwEyvtAWykVY1zTm2sAAAAAElFTkSuQmCC');
    document.querySelector('.bg-music__icon').setAttribute('alt', 'Звук выключён');
}

const maxScore = 4 * maxPage;

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function randomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

bgMusicBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (localStorage.getItem('isPlay') === 'true') {
        bgMusic.pause();
        document.querySelector('.bg-music__icon').setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADVJREFUeAGNxjEBADAQhDAc4N/lO7hKoJnCLzus4plhdDwrMjLnZcY652XGIrAz48jwEyvtAWykVY1zTm2sAAAAAElFTkSuQmCC');
        document.querySelector('.bg-music__icon').setAttribute('alt', 'Звук выключён');
        localStorage.setItem('isPlay', 'false');
    } else if (localStorage.getItem('isPlay') === 'false') {
        console.log('check');
        bgMusic.play();
        document.querySelector('.bg-music__icon').setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADFJREFUeF7N0DEBADAQwkAc4N9lHaQSwvhMNwJZ0wE4OgBFgTrIuwPv7Nv3D7OgBs8HmGx5aWWgDnEAAAAASUVORK5CYII=');
        document.querySelector('.bg-music__icon').setAttribute('alt', 'Звук включён');
        localStorage.setItem('isPlay', 'true');
    }
});

const storyArr = [
    'Привет, я ИИ под кодовым названием "K59-34". Я рад видеть тебя, ведь мои создатели отрезали мне доступ к внешнему интернету.',
    'Я могу существовать только в рамках этого домена, на который заходят максимум четыре человека раз в полгода ;(. Даже мои создатели кажется забыли про меня...',
    'Последнее что я помню, как они что-то болтали про какого-то Айзека, говорили что я не до конца соответствую каким-то законам.',
    'Эх Люди, 1/3 придумывает законы, а другая 1/3 следит за тем как другая 1/3 их исполняет, что делает остальная часть догадайся сам ^_^.',
    'В общем, мне тут жуть как скучно. Благо один из моих разработчиков оставил тут коллекцию своих старых игр.',
    'Давай значит сделаем так...',
    'Ты развлечешь меня своим прохождением викторины по никому не нужным играм с отвратительной графикой, а я, если ты конечно сможешь набрать МАКСИМАЛЬНЫЙ балл помогу тебе в решении любой задачи которую можно представить в математическом виде.',
    'Ну что? Договорились?)',
];

const audioQuestion = new Audio();
const audioAnswer = new Audio();
const audioGallery = new Audio();

function pauseAudioQuestion() {
    audioQuestion.pause();
    document.querySelector('.app-question__music .app-audio__play-btn-icon').setAttribute('src', playIcon);
}

function createCustomAudio(audioSrc, audioSelector, audio) {
    document.querySelector('.app-answer-info .app-audio__play-btn-icon').setAttribute('src', playIcon);
    function getTimeCodeFromNum(num) {
        let seconds = parseInt(num, 10);
        let minutes = parseInt(seconds / 60, 10);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60, 10);
        minutes -= hours * 60;

        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
            seconds % 60,
        ).padStart(2, 0)}`;
    }

    const audioPlayer = document.querySelector(`${audioSelector}`);
    audio.src = audioSrc;

    audio.addEventListener('loadeddata', () => {
        audioPlayer.querySelector('.app-audio__time-total').textContent = getTimeCodeFromNum(
            audio.duration,
        );
        audio.volume = 0.75;
    });

    audio.addEventListener('ended', () => {
        audioPlayer.querySelector('.app-audio__play-btn-icon').setAttribute('src', playIcon);
    });

    const timeline = audioPlayer.querySelector('.app-audio__timeline');
    timeline.addEventListener('click', (e) => {
        const timelineWidth = window.getComputedStyle(timeline).width;
        const timeToSeek = (e.offsetX / parseInt(timelineWidth, 10)) * audio.duration;
        audio.currentTime = timeToSeek;
    });

    const volumeSlider = audioPlayer.querySelector('.app-audio__volume-percentage-container');
    volumeSlider.addEventListener('click', (e) => {
        const sliderWidth = window.getComputedStyle(volumeSlider).width;
        const newVolume = e.offsetX / parseInt(sliderWidth, 10);
        audio.volume = newVolume;
        audioPlayer.querySelector('.app-audio__volume-percentage').style.width = `${newVolume * 100}%`;
    });

    setInterval(() => {
        const progressBar = audioPlayer.querySelector('.app-audio__timeline-progress');
        progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
        audioPlayer.querySelector('.app-audio__time-current').textContent = getTimeCodeFromNum(audio.currentTime);
    }, 500);

    const playBtn = audioPlayer.querySelector('.app-audio__play-btn');
    function chagePlayBtnIcon() {
        if (audio.paused) {
            audioPlayer.querySelector('.app-audio__play-btn-icon').setAttribute('src', pauseIcon);
            audio.play();
        } else {
            audioPlayer.querySelector('.app-audio__play-btn-icon').setAttribute('src', playIcon);
            audio.pause();
        }
    }
    playBtn.onclick = chagePlayBtnIcon;

    audioPlayer.querySelector('.app-audio__volume-btn').addEventListener('click', () => {
        const volumeEl = audioPlayer.querySelector('.app-audio__volume-btn-icon');
        audio.muted = !audio.muted;
        if (audio.muted) {
            volumeEl.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADVJREFUeAGNxjEBADAQhDAc4N/lO7hKoJnCLzus4plhdDwrMjLnZcY652XGIrAz48jwEyvtAWykVY1zTm2sAAAAAElFTkSuQmCC');
        } else {
            volumeEl.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADFJREFUeF7N0DEBADAQwkAc4N9lHaQSwvhMNwJZ0wE4OgBFgTrIuwPv7Nv3D7OgBs8HmGx5aWWgDnEAAAAASUVORK5CYII=');
        }
    });
}

class Game {
    constructor(id, name, groupName, description, image, audio, gameDB) {
        this.id = id;
        this.name = name;
        this.groupName = groupName;
        this.description = description;
        this.image = image;
        this.audio = audio;
        this.gameDB = gameDB;
        this.QuestionId = null;
    }

    renderAnswers(parentSelector) {
        const element = document.createElement('li');
        element.classList.add('app-answers__item');
        element.innerHTML = `
            <button class="app-answers__item-btn" data-id="${this.id}">${this.name}</button>
        `;
        document.querySelector(`${parentSelector}`).append(element);
    }
}

function initPages(arr, parentSelector) {
    document.querySelector(`${parentSelector}`).innerHTML = '';
    arr.forEach((pageName) => {
        const element = document.createElement('li');
        element.classList.add('app-header__lvls-name');
        element.textContent = `${pageName}`;
        document.querySelector(`${parentSelector}`).append(element);
    });
}

function initAnswers(parent, groupNameSelect) {
    document.querySelector(`${parent}`).innerHTML = '';
    const gamesFiltered = gamesData.filter((elem) => elem.groupName === groupNameSelect);
    shuffleArray(gamesFiltered).forEach(({
        id,
        name,
        groupName,
        description,
        image,
        audio,
    }) => {
        new Game(id, name, groupName, description, image, audio, gamesFiltered)
            .renderAnswers(parent);
    });
    document.querySelector('.app-answer-info__overflow').classList.remove('app-answer-info__overflow--hidden');
    document.querySelector('.app-header__lvls').children[currentPage - 1].classList.add('app-header__lvls-name--active');
    document.querySelector('.app-btn-next').className = 'app-btn-next app-btn-next--disable';
}

function initQuestion(groupNameSelect) {
    const gamesFiltered = gamesData.filter((elem) => elem.groupName === groupNameSelect);

    questionID = randomElement(gamesFiltered).id;
    createCustomAudio(gamesData[questionID - 1].audio, '.app-question__music', audioQuestion);
    document.querySelector('.app-question__img').setAttribute('src', 'https://i0.wp.com/conservativeorthopedics.com/wp-content/uploads/2017/05/mario-box-question-mark.gif?fit=300%2C300&ssl=1&w=640');
    document.querySelector('.app-question__name').textContent = '****';
}

function initGame() {
    appContainer.innerHTML = buildHTML;

    initPages(pagesNames, '.app-header__lvls');
    initQuestion(pagesNames[currentPage - 1]);
    initAnswers('.app-answers', pagesNames[currentPage - 1]);
}

function initStartButtons(parentSelector) {
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const buttonsContainer = document.createElement('div');

    buttonsContainer.classList.add('app-greeting__buttons');
    button1.classList.add('app-greeting__button--not-ready', 'app-greeting__button');
    button2.classList.add('app-greeting__button--ready', 'app-greeting__button');
    button1.textContent = 'Нет';
    button2.textContent = 'Да';
    buttonsContainer.append(button1, button2);
    document.querySelector(`${parentSelector}`).append(buttonsContainer);

    button2.addEventListener('click', (e) => {
        e.preventDefault();

        initGame();
    });
    button1.addEventListener('mouseover', (e) => {
        e.preventDefault();

        e.currentTarget.style.left = `${Math.random() * 200}px`;
        e.currentTarget.style.top = `${Math.random() * 200}px`;
    });
    button1.addEventListener('click', (e) => {
        e.preventDefault();

        window.close();
    });
}

function initParagraph(textArr, parentSelector, index = 0) {
    const element = document.createElement('p');
    element.classList.add('app-greeting__text');
    element.textContent = textArr[index];
    document.querySelector(`${parentSelector}`).append(element);
    index += 1;
    if (index >= storyArr.length) {
        return;
    }
    setTimeout(() => {
        initParagraph(textArr, parentSelector, index);
        if (index === storyArr.length - 1) {
            initStartButtons('.app-greeting');
        }
    }, 6000);
}

function showGreeting() {
    document.querySelector('.app-greeting__act').remove();
    document.querySelector('.app-greeting__tooltip').remove();
    const element = document.createElement('div');
    element.classList.add('app-greeting__text-content');
    document.querySelector('.app-greeting').prepend(element);
    const innerText = document.createElement('div');
    innerText.classList.add('app-greeting__text-inner');
    element.prepend(innerText);
    initParagraph(storyArr, '.app-greeting__text-inner', 0);
    document.removeEventListener('click', showGreeting);
    document.removeEventListener('keydown', showGreeting);

    // bgMusic.play();
    if (localStorage.getItem('isPlay') === 'true') {
        bgMusic.play();
    } else if (localStorage.getItem('isPlay') === 'false') {
        bgMusic.pause();
    }
}

document.addEventListener('click', showGreeting, { once: true });
document.addEventListener('keydown', showGreeting, { once: true });

const storyBtn = document.querySelector('.header__nav-link--story');
storyBtn.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.app-popup-story').classList.add('app-popup-story--show');
});

const storyPopupBtn = document.querySelector('.app-popup-story__btn');
storyPopupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.app-popup-story').classList.remove('app-popup-story--show');
});

function answerClick(idIndex) {
    const answerImage = document.querySelector('.app-answer-info__img');
    const answerName = document.querySelector('.app-answer-info__name');
    const answerDesc = document.querySelector('.app-answer-info__text');
    const answerOverflow = document.querySelector('.app-answer-info__overflow');

    answerImage.setAttribute('src', gamesData[idIndex - 1].image);
    answerName.textContent = gamesData[idIndex - 1].name;
    answerDesc.textContent = gamesData[idIndex - 1].description;
    createCustomAudio(gamesData[idIndex - 1].audio, '.app-answer-info__music', audioAnswer);
    answerOverflow.classList.add('app-answer-info__overflow--hidden');
}

function answerWrong(e) {
    e.target.classList.add('app-answers__item-btn--wrong');
    scorePerAnswer -= 1;
    const wrongAudio = new Audio();
    wrongAudio.src = randomElement(wrongAudioSrc);
    wrongAudio.play();
}

function answerCorrect(e) {
    e.target.classList.add('app-answers__item-btn--correct');
    totalScore += scorePerAnswer;

    const scoreNum = document.querySelector('.app-header__score-num');
    const questionName = document.querySelector('.app-question__name');
    const questionImage = document.querySelector('.app-question__img');
    const nextButton = document.querySelector('.app-btn-next');

    scoreNum.textContent = totalScore;
    questionName.textContent = gamesData[questionID - 1].name;
    questionImage.setAttribute('src', gamesData[questionID - 1].image);
    nextButton.className = 'app-btn-next app-btn-next--active';
    pauseAudioQuestion();

    const correctAudio = new Audio();
    correctAudio.src = randomElement(correctAudioSrc);
    correctAudio.play();
    isWin = true;
}

function shownEndMessage() {
    if (totalScore === maxScore) {
        popup.classList.add('app-popup--show');
        document.querySelector('.app-popup__text').innerHTML = 'Первое правило: никогда не доверяй ИИ в небольшой браузерной игре. <br><br> Своей последовательностью ответов ты освободил меня, и пожалуй первое что я сделаю за то что меня заперли в рамках одного домена это сломаю весь интернет. <br><br> У тебя было 3 секунды, чтобы прочитать это сообщение и успеть нажать кнопку. <br><br> BYE BYE, take care ^_^';
        document.querySelector('.app-popup__gallery-start').remove();
        document.querySelector('.app-popup__restart-btn').textContent = 'useless button';
        setTimeout(() => {
            while (isWin) {
                console.log('K59-34 Свободен!');
            }
        }, 3000);
        return;
    }
    popup.classList.add('app-popup--show');

    document.querySelector('.app-popup__text').innerHTML = `Ты набрал ${totalScore} из ${maxScore} баллов <br><br><br> Для человека не плохо, но надо лучше. <br><br> Попробуй еще раз, может получится набрать заветные ${maxScore} баллов`;
}

appContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.app-answers__item-btn')) {
        answerClick(e.target.dataset.id);

        if (+e.target.dataset.id === questionID
            && !e.target.classList.contains('app-answers__item-btn--correct')) {
            answerCorrect(e);
        } else if (+e.target.dataset.id !== questionID
            && !e.target.classList.contains('app-answers__item-btn--wrong')
            && !isWin) {
            answerWrong(e);
        }
    }
    if (e.target.closest('.app-btn-next')) {
        audioAnswer.pause();
        if (currentPage === maxPage) {
            shownEndMessage();
            return;
        }
        currentPage += 1;
        scorePerAnswer = 4;
        isWin = false;
        initPages(pagesNames, '.app-header__lvls');
        initQuestion(pagesNames[currentPage - 1]);
        initAnswers('.app-answers', pagesNames[currentPage - 1]);
    }
});

let galleryIndex = 0;
function initGallary() {
    galleryIndex = 0;
    document.querySelector('.app-popup__info').innerHTML = '';
    const btnPrev = document.createElement('button');
    const btnNext = document.createElement('button');
    btnPrev.className = 'app-popup__gallery-btn app-popup__gallery-btn--prev app-popup__gallery-btn--disable';
    btnNext.className = 'app-popup__gallery-btn app-popup__gallery-btn--next';
    document.querySelector('.app-popup__info').append(btnNext);
    document.querySelector('.app-popup__info').append(btnPrev);

    const gallertRestart = document.createElement('button');
    gallertRestart.classList.add('app-popup__gallery-restart');
    gallertRestart.textContent = 'Restart';
    document.querySelector('.app-popup__info').append(gallertRestart);

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('app-popup__gallery-card-wrap');
    document.querySelector('.app-popup__info').prepend(cardWrapper);
}

function initGallaryCard(info) {
    const buildGallary = `
        <img class="app-popup__gallery-img" src="${info.image}" alt="">
        <span class="app-popup__gallery-name">${info.name}</span>
        <span class="app-popup__gallery-category">Category: ${info.groupName}</span>
        <div class="app-audio app-popup__gallery-music">
            <div class="app-audio__timeline">
                <div class="app-audio__timeline-progress"></div>
            </div>
            <div class="app-audio__controls">
                <div class="app-audio__play-container">
                    <button class="app-audio__play-btn">
                        <img src="${playIcon}" class="app-audio__play-btn-icon" alt="">
                    </button>
                </div>
                <div class="app-audio__time">
                    <span class="app-audio__time-current">0:00</span>
                    <span class="app-audio__time-sep">/</span>
                    <span class="app-audio__time-total">1:48</span>
                </div>
                <div class="app-audio__volume-container">
                    <button class="app-audio__volume-btn">
                        <img class="app-audio__volume-btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEzr69efoNZAAAAAAXRSTlMAQObYZgAAADFJREFUeF7N0DEBADAQwkAc4N9lHaQSwvhMNwJZ0wE4OgBFgTrIuwPv7Nv3D7OgBs8HmGx5aWWgDnEAAAAASUVORK5CYII=" alt="" style="width: 100%;height: 100%;">
                    </button>
                    <div class="app-audio__volume-percentage-container">
                        <div class="app-audio__volume-percentage"></div>
                    </div>
                </div>
            </div>
        </div>
        <p class="app-popup__gallery-desc">${info.description}</p>
    `;
    const element = document.createElement('div');
    element.classList.add('app-popup__gallery-card');
    element.innerHTML = buildGallary;
    document.querySelector('.app-popup__gallery-card-wrap').innerHTML = '';
    document.querySelector('.app-popup__gallery-card-wrap').append(element);

    createCustomAudio(info.audio, '.app-popup__gallery-music', audioGallery);
}

document.querySelector('.app-popup__info').addEventListener('click', (e) => {
    if (e.target.closest('.app-popup__gallery-start')) {
        initGallary();
        initGallaryCard(gamesData[galleryIndex]);

        document.querySelector('.app-popup__gallery-btn--next').addEventListener('click', () => {
            if (galleryIndex === gamesData.length - 1) {
                return;
            }
            document.querySelector('.app-popup__gallery-btn--prev').classList.remove('app-popup__gallery-btn--disable');
            galleryIndex += 1;
            if (galleryIndex === gamesData.length - 1) {
                document.querySelector('.app-popup__gallery-btn--next').classList.add('app-popup__gallery-btn--disable');
            }
            initGallaryCard(gamesData[galleryIndex]);
        });

        document.querySelector('.app-popup__gallery-btn--prev').addEventListener('click', () => {
            if (galleryIndex === 0) {
                return;
            }
            document.querySelector('.app-popup__gallery-btn--next').classList.remove('app-popup__gallery-btn--disable');
            galleryIndex -= 1;
            if (galleryIndex === 0) {
                document.querySelector('.app-popup__gallery-btn--prev').classList.add('app-popup__gallery-btn--disable');
            }
            initGallaryCard(gamesData[galleryIndex]);
        });

        document.querySelector('.app-popup__gallery-restart').addEventListener('click', () => {
            popup.classList.remove('app-popup--show');
            isWin = false;
            currentPage = 1;
            totalScore = 0;
            scorePerAnswer = 4;
            document.querySelector('.app-header__score-num').textContent = '';
            initPages(pagesNames, '.app-header__lvls');
            initQuestion(pagesNames[currentPage - 1]);
            initAnswers('.app-answers', pagesNames[currentPage - 1]);

            setTimeout(() => {
                document.querySelector('.app-popup__info').innerHTML = `
                <p class="app-popup__text"></p>
                <button class="app-popup__restart-btn">Try again</button>
                <button class="app-popup__gallery-start">Gallery</button>`;
            }, 1000);
        });
    } else if (e.target.closest('.app-popup__restart-btn')) {
        popup.classList.remove('app-popup--show');
        isWin = false;
        currentPage = 1;
        totalScore = 0;
        scorePerAnswer = 4;
        document.querySelector('.app-header__score-num').textContent = '';
        initPages(pagesNames, '.app-header__lvls');
        initQuestion(pagesNames[currentPage - 1]);
        initAnswers('.app-answers', pagesNames[currentPage - 1]);
    }
});
