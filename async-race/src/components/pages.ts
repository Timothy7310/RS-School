import Modify from './modify';
import Cars from './cars';
import Controller from './controller';
import Winners from './winners';
import Manage from './manage';
import GLOBAL_STATE from './state';

const controller = new Controller();

class Pages {
    modify;

    cars;

    winners;

    manage;

    constructor() {
        this.modify = new Modify();
        this.manage = new Manage();
        this.cars = new Cars();
        this.winners = new Winners();
    }

    async renderGaragePage() {
        localStorage.setItem('lastPath', 'Garage');
        const mainDOM = document.querySelector('main') as HTMLElement;
        mainDOM.innerHTML = '';
        const carsCurrentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');
        await this.modify.init();
        await this.manage.init();
        await Pages.updateInputInfo();

        await this.cars.init();
        await this.cars.render(await (await controller.getCars(carsCurrentPage)).cars);

        const winnersButton = document.querySelector('#toWinners') as HTMLButtonElement;
        const garageButton = document.querySelector('#toCarage') as HTMLButtonElement;
        winnersButton.classList.remove('header__list-button--active');
        garageButton.classList.add('header__list-button--active');
    }

    static async updateInputInfo() {
        const createColor = document.querySelector('#createColor') as HTMLInputElement;
        const createName = document.querySelector('#createName') as HTMLInputElement;
        const updateColor = document.querySelector('#updateColor') as HTMLInputElement;
        const updateName = document.querySelector('#updateName') as HTMLInputElement;
        const updateButton = document.querySelector('#updateCar') as HTMLButtonElement;

        createColor.value = GLOBAL_STATE.createColor;
        createName.value = GLOBAL_STATE.createName;
        updateColor.value = GLOBAL_STATE.updateColor;
        updateName.value = GLOBAL_STATE.updateName;

        if (GLOBAL_STATE.isUpdate) {
            updateName.disabled = false;
            updateColor.disabled = false;
            updateButton.disabled = false;
        }
    }

    async renderWinnersPage() {
        localStorage.setItem('lastPath', 'Winners');
        const mainDOM = document.querySelector('main') as HTMLElement;
        mainDOM.innerHTML = '';
        const winnersCurrentPage = Number(localStorage.getItem('winnersPageNumber') ?? '1');
        const winnerViewOption = {
            page: winnersCurrentPage,
            limit: 10,
            sort: localStorage.getItem('winnersSortType') ?? '',
            order: localStorage.getItem('winnersSortOrder') ?? '',
        };

        await this.winners.init();
        await this.winners.render(await (await controller.getWinners(winnerViewOption)).result);

        const winnersButton = document.querySelector('#toWinners') as HTMLButtonElement;
        const garageButton = document.querySelector('#toCarage') as HTMLButtonElement;
        winnersButton.classList.add('header__list-button--active');
        garageButton.classList.remove('header__list-button--active');
    }
}

export default Pages;
