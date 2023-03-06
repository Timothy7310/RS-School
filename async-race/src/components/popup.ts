class Popup {
    name;

    time;

    constructor(name: string, time: number) {
        this.name = name;
        this.time = time;
    }

    render() {
        const bodyDOM = document.querySelector('body') as HTMLElement;
        const template = `
            <div class="popup__overlay"></div>
            <div class="popup__content">
                <p class="popup__content-text">WOW 😲</p>
                <p class="popup__content-text">${this.name} went first 🏎️</p>
                <p class="popup__content-text">(${this.time}s)</p>
            </div>
        `;
        const section = document.createElement('div');
        section.classList.add('popup');
        section.innerHTML = template;
        bodyDOM.append(section);
    }
}

export default Popup;
