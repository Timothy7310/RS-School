class KeyBoard {
    constructor(setUp, parentSelector, system, isEng) {
        this.setUp = setUp;
        this.parent = document.querySelector(parentSelector);
        this.system = system;
        this.isEng = isEng;
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('keyboard');
        element.innerHTML = this.setUp;
        this.parent.append(element);
    }

    languageCheck() {
        if (this.isEng === 'true') {
            document.querySelectorAll('.rus').forEach((item) => item.classList.toggle('hidden'));
            document.querySelectorAll('.eng').forEach((item) => item.classList.toggle('hidden'));
        }
    }

    languageMessage(text) {
        const message = document.createElement('p');
        message.classList.add('language');
        message.innerHTML = text;
        this.parent.append(message);
    }

    operatingSystemMessage() {
        const message = document.createElement('p');
        let systemType;
        message.classList.add('operating');
        if (this.system.indexOf('Win') !== -1) {
            systemType = 'Windows';
        } else if (this.system.indexOf('Mac') !== -1) {
            systemType = 'Macintosh';
        } else if (this.system.indexOf('Linux') !== -1) {
            systemType = 'Linux';
        }
        message.innerHTML = `Клавиатура создана в операционной системе
                            <span class="accent-text">${systemType}</span>
                            `;
        this.parent.append(message);
    }
}

export default KeyBoard;
