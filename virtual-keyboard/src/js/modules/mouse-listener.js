import changeLang from './change-language';
import capsFunc from './caps-button';
import shiftFunc from './shift-button';
import typingSymbols from './typing-symbols';

let isCaps = false;
let symbol;
const mouseListener = () => {
    const textarea = document.querySelector('.textarea');
    const keys = document.querySelectorAll('.keyboard-key');
    keys.forEach((key) => key.addEventListener('mousedown', (e) => {
        e.preventDefault();

        if (key.classList.contains('MetaLeft')) {
            changeLang();
            if (document.querySelector('.eng').classList.contains('hidden')) {
                localStorage.setItem('isEng', 'false');
            } else {
                localStorage.setItem('isEng', 'true');
            }
        }

        if (!key.classList.contains('CapsLock')) {
            key.classList.add('active');
        } else {
            capsFunc();
            isCaps = !isCaps;
        }

        if (e.target.closest('.ShiftLeft') || e.target.closest('.ShiftRight')) {
            shiftFunc();
        }

        let cursorPosition = textarea.selectionStart;
        const left = textarea.value.slice(0, cursorPosition);
        const right = textarea.value.slice(cursorPosition);
        cursorPosition += 1;

        if (e.target.classList.contains('keyboard-key')) {
            symbol = typingSymbols(e.target);
            if (
                e.target.closest('.CapsLock')
                || e.target.closest('.ShiftLeft')
                || e.target.closest('.ShiftRight')
                || e.target.closest('.Delete')
                || e.target.closest('.AltLeft')
                || e.target.closest('.AltRight')
                || e.target.closest('.ControlLeft')
                || e.target.closest('.ControlRight')
                || e.target.closest('.Backspace')
                || e.target.closest('.MetaLeft')
                || e.target.closest('.ArrowRight')
                || e.target.closest('.ArrowLeft')
            ) {
                symbol = '';
                cursorPosition -= 1;
            }
            if (e.target.closest('.Enter')) {
                symbol = '\n';
            }
            if (e.target.closest('.Tab')) {
                symbol = '\t';
            }
            if (e.target.closest('.Space')) {
                symbol = ' ';
            }
            if (e.target.closest('.ArrowRight')) {
                cursorPosition += 1;
            }
            if (e.target.closest('.ArrowLeft')) {
                if (cursorPosition > 0) {
                    cursorPosition -= 1;
                }
            }
            textarea.value = `${left}${symbol}${right}`;

            if (e.target.closest('.Backspace')) {
                if (cursorPosition > 0) {
                    textarea.value = `${left.slice(0, -1)}${right}`;
                    cursorPosition -= 1;
                }
            }
            if (e.target.closest('.Delete')) {
                textarea.value = `${left}${right.slice(1)}`;
            }
            textarea.setSelectionRange(cursorPosition, cursorPosition);
        } else {
            symbol = e.target.innerHTML;
            if (
                e.target.innerHTML === 'CapsLock'
                || e.target.innerHTML === 'Shift'
                || e.target.innerHTML === 'Del'
                || e.target.innerHTML === 'Alt'
                || e.target.innerHTML === 'Ctrl'
                || e.target.innerHTML === 'Backspace'
                || e.target.innerHTML === 'Win'
                || e.target.innerHTML === '◄'
                || e.target.innerHTML === '►'
            ) {
                symbol = '';
                cursorPosition -= 1;
            } else {
                symbol = e.target.innerHTML;
            }
            if (e.target.innerHTML === 'Enter') {
                symbol = '\n';
            }
            if (e.target.innerHTML === 'Tab') {
                symbol = '\t';
            }
            if (e.target.innerHTML === '►') {
                cursorPosition += 1;
            }
            if (e.target.innerHTML === '◄') {
                if (cursorPosition > 0) {
                    cursorPosition -= 1;
                }
            }
            textarea.value = `${left}${symbol}${right}`;
            if (e.target.innerHTML === 'Backspace') {
                if (cursorPosition > 0) {
                    textarea.value = `${left.slice(0, -1)}${right}`;
                    cursorPosition -= 1;
                }
            }
            if (e.target.innerHTML === 'Del') {
                textarea.value = `${left}${right.slice(1)}`;
            }
            textarea.setSelectionRange(cursorPosition, cursorPosition);
        }
    }));

    keys.forEach((key) => key.addEventListener('mouseup', (e) => {
        e.preventDefault();

        if (!key.classList.contains('CapsLock')) {
            key.classList.remove('active');
        }

        if (e.target.closest('.ShiftLeft') || e.target.closest('.ShiftRight')) {
            shiftFunc();
        }
    }));
};

export default mouseListener;
