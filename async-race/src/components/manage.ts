import { Car } from './types';
import Cars from './cars';
import Controller from './controller';
import GLOBAL_STATE from './state';
import Popup from './popup';

const controller = new Controller();

class Manage {
    cars;

    carsID: number[];

    brand;

    model;

    constructor() {
        this.cars = new Cars();
        this.carsID = [];
        this.brand = [
            'Lada',
            'Toyota',
            'BMW',
            'Москвич',
            'Audi',
            'Ford',
            'Nissan',
            'Mitsubishi',
            'Subaru',
            'Lexus',
        ];

        this.model = [
            'Impreza',
            'Camry',
            'X3',
            'A6',
            'Priora',
            'Focus',
            'Leaf',
            'Lancer',
            'RX 350',
            '407',
        ];
    }

    init() {
        console.log(this.carsID);

        const mainDOM = document.querySelector('main') as HTMLElement;
        const template = `
            <button class="manage-start">Race</button>
            <button class="manage-reset" disabled="">Reset</button>
            <button class="manage-generate">Generate Cars</button>
        `;

        const section = document.createElement('section');
        section.classList.add('manage');
        section.innerHTML = template;
        mainDOM.append(section);
    }

    async getIDs() {
        const page = Number(localStorage.getItem('carsPageNumber') ?? '1');
        const cars = await (await controller.getCars(page)).cars;
        this.carsID = cars.map((car: Car) => car.id);
    }

    async race() {
        await this.getIDs();
        const response = this.carsID.map(async (id) => {
            await this.cars.startCar(id);
            return id;
        });

        const winnerID = await Promise.any(response);
        const winnerObj = {
            id: await Promise.any(response),
            time: 0,
        };

        GLOBAL_STATE.carMove.forEach((item) => {
            if (item.id === winnerID) {
                winnerObj.time = Number((item.time / 1000).toFixed(2));
            }
        });

        const name = await (await controller.getCar(winnerID)).name;

        new Popup(name, winnerObj.time).render();
        await controller.saveWinner(winnerObj);

        try {
            setTimeout(() => {
                const popup = document.querySelector('.popup') as HTMLElement;
                popup.remove();
            }, 3000);
        } catch (e) {
            console.log(e);
        }
    }

    async reset() {
        await this.getIDs();
        this.carsID.forEach(async (id) => {
            await this.cars.resetCar(id);
        });
    }

    async generateRandomCars(count: number) {
        const generateButton = document.querySelector('.manage-generate') as HTMLButtonElement;
        generateButton.disabled = true;

        for (let i = 0; i <= count; i += 1) {
            const name = `${Manage.randomIndex(this.brand, 10)} ${Manage.randomIndex(this.model, 10)}`;
            const color = Manage.randomColor();
            controller.createCar({ color, name });
        }
    }

    static randomIndex(arr: string[], length: number) {
        return arr[Math.floor((Math.random() * length))];
    }

    static randomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    async manageEvent(target: HTMLElement) {
        const raceButton = document.querySelector('.manage-start') as HTMLButtonElement;
        const resetButton = document.querySelector('.manage-reset') as HTMLButtonElement;

        if (target.closest('.manage-start')) {
            this.race();
            raceButton.disabled = true;
            // resetButton.disabled = false;
        }

        if (target.closest('.manage-reset')) {
            this.reset();
            raceButton.disabled = false;
            resetButton.disabled = true;
        }

        if (target.closest('.manage-generate')) {
            const generateButton = document.querySelector('.manage-generate') as HTMLButtonElement;
            const carsCurrentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');

            await this.generateRandomCars(100);
            await this.cars.render(await (await controller.getCars(carsCurrentPage)).cars);
            generateButton.disabled = false;
        }
    }
}

export default Manage;
