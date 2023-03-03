import changeLang from './change-language';
import capsFunc from './caps-button';
import shiftFunc from './shift-button';
import typingSymbols from './typing-symbols';

let isDown = false;
let isCaps = false;
let symbol;

const keyboardListener = () => {
    const textarea = document.querySelector('.textarea');

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.code !== 'CapsLock') {
            document.querySelector(`.${e.code}`).classList.add('active');
        }

        if ((e.ctrlKey || e.metaKey) && e.altKey) {
            changeLang();
            if (document.querySelector('.eng').classList.contains('hidden')) {
                localStorage.setItem('isEng', 'false');
            } else {
                localStorage.setItem('isEng', 'true');
            }
        }

        if (e.code === 'CapsLock' && !isDown) {
            capsFunc();
            isDown = true;
            isCaps = !isCaps;
        }

        if ((!isDown && e.code === 'ShiftLeft') || (!isDown && e.code === 'ShiftRight')) {
            shiftFunc();
            isDown = true;
        }

        symbol = typingSymbols(document.querySelector(`.${e.code}`));
        let cursorPosition = textarea.selectionStart;
        const left = textarea.value.slice(0, cursorPosition);
        const right = textarea.value.slice(cursorPosition);
        cursorPosition += 1;

        if (
            e.code === 'CapsLock'
            || e.code === 'ShiftLeft'
            || e.code === 'ShiftRight'
            || e.code === 'Delete'
            || e.code === 'Backspace'
            || e.code === 'ArrowRight'
            || e.code === 'ArrowLeft'
            || e.altKey
            || e.ctrlKey
            || e.metaKey
        ) {
            symbol = '';
            cursorPosition -= 1;
        }
        if (e.code === 'Enter') {
            symbol = '\n';
        }
        if (e.code === 'Space') {
            symbol = ' ';
        }
        if (e.code === 'Tab') {
            symbol = '\t';
        }
        if (e.code === 'ArrowRight') {
            cursorPosition += 1;
        }
        if (e.code === 'ArrowLeft') {
            if (cursorPosition > 0) {
                cursorPosition -= 1;
            }
        }

        textarea.value = `${left}${symbol}${right}`;
        if (e.code === 'Backspace') {
            if (cursorPosition > 0) {
                textarea.value = `${left.slice(0, -1)}${right}`;
                cursorPosition -= 1;
            }
        }
        if (e.code === 'Delete') {
            textarea.value = `${left}${right.slice(1)}`;
        }
        textarea.setSelectionRange(cursorPosition, cursorPosition);
    });
    document.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.code !== 'CapsLock') {
            document.querySelector(`.${e.code}`).classList.remove('active');
        }

        if (e.code === 'CapsLock' && isDown) {
            isDown = false;
            isCaps = false;
        }

        if ((isDown && e.code === 'ShiftLeft') || (isDown && e.code === 'ShiftRight')) {
            shiftFunc();
            isDown = false;
        }
    });
};

export default keyboardListener;
