import Header from './header';
import Pages from './pages';
import Cars from './cars';
import Winners from './winners';
import Modify from './modify';
import Manage from './manage';

class App {
    header;

    pages;

    cars;

    winners;

    modify;

    manage;

    constructor() {
        this.header = new Header();
        this.pages = new Pages();
        this.cars = new Cars();
        this.winners = new Winners();
        this.modify = new Modify();
        this.manage = new Manage();
    }

    static setPage() {
        const carsPage = localStorage.getItem('carsPageNumber') ?? '1';
        localStorage.setItem('carsPageNumber', carsPage);

        const winnersPage = localStorage.getItem('winnersPageNumber') ?? '1';
        localStorage.setItem('winnersPageNumber', winnersPage);
    }

    async initEvent() {
        const bodyDOM = document.querySelector('body') as HTMLElement;
        bodyDOM.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            this.header.headerEvent(target);
            this.cars.carsEvent(target);
            this.winners.winnersEvent(target);
            this.modify.modifyEvent(target);
            this.manage.manageEvent(target);
        });

        bodyDOM.addEventListener('input', (e) => {
            const target = e.target as HTMLInputElement;
            this.modify.inputEvent(target);
        });
    }

    async init() {
        App.setPage();
        this.header.init();

        const mainDOM = document.createElement('main');
        mainDOM.classList.add('main');
        mainDOM.innerHTML = '';
        document.querySelector('body')?.append(mainDOM);

        const lastPath = localStorage.getItem('lastPath') ?? 'Garage';

        if (lastPath === 'Garage') {
            this.pages.renderGaragePage();
        } else if (lastPath === 'Winners') {
            this.pages.renderWinnersPage();
        }
        this.initEvent();
    }
}

export default App;
