import Pages from './pages';

class Header {
    bodyDOM;

    activeClass;

    pages;

    constructor() {
        this.bodyDOM = document.querySelector('body') as HTMLElement;
        this.activeClass = 'header__list-button--active';
        this.pages = new Pages();
    }

    init() {
        const template = `
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__list-item">
                        <button class="header__list-button" id="toCarage">to garage</button>
                    </li>
                    <li class="header__list-item">
                        <button class="header__list-button" id="toWinners">to winners</button>
                    </li>
                </ul>
            </nav>
        `;
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = template;
        this.bodyDOM.append(header);
    }

    async headerEvent(target: HTMLElement) {
        if (target.closest('#toCarage')) {
            if (target.classList.contains(this.activeClass)) {
                return;
            }

            await this.pages.renderGaragePage();
        }

        if (target.closest('#toWinners')) {
            if (target.classList.contains(this.activeClass)) {
                return;
            }

            await this.pages.renderWinnersPage();
        }
    }
}

export default Header;
