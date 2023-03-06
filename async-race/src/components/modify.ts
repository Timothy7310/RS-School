import Controller from './controller';
import Cars from './cars';
import GLOBAL_STATE from './state';

const controller = new Controller();

class Modify {
    bodyDOM;

    cars;

    constructor() {
        this.bodyDOM = document.querySelector('body') as HTMLElement;
        this.cars = new Cars();
    }

    init() {
        console.log(this.bodyDOM);
        const mainDOM = document.querySelector('main') as HTMLElement;

        const template = `
            <div class="modify-create">
                <input type="text" class="modify-create__name" name="name" id="createName">
                <input type="color" class="modify-create__color" name="color" id="createColor">
                <button class="modify-create__submit" id="createCar">Create</button>
            </div>
            <div class="modify-update">
                <input type="text" class="modify-update__name" name="name" id="updateName" disabled="">
                <input type="color" class="modify-update__color" name="color" id="updateColor" disabled="">
                <button class="modify-update__submit" disabled="" id="updateCar">Update</button>
            </div>
        `;
        const section = document.createElement('section');
        section.classList.add('modify');
        section.innerHTML = template;
        mainDOM.append(section);
    }

    async create() {
        const carsCurrentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');
        const colorInput = document.querySelector('#createColor') as HTMLInputElement;
        const nameInput = document.querySelector('#createName') as HTMLInputElement;
        const car = {
            color: colorInput.value,
            name: nameInput.value,
        };
        await controller.createCar(car);
        await this.cars.render(await (await controller.getCars(carsCurrentPage)).cars);
    }

    async update() {
        const carsCurrentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');
        const colorInput = document.querySelector('#updateColor') as HTMLInputElement;
        const nameInput = document.querySelector('#updateName') as HTMLInputElement;
        const updateButton = document.querySelector('#updateCar') as HTMLButtonElement;
        const car = {
            color: colorInput.value,
            name: nameInput.value,
        };

        const id = localStorage.getItem('selectID') as string;
        await controller.updateCar(+id, car);
        await this.cars.render(await (await controller.getCars(carsCurrentPage)).cars);

        nameInput.value = '';
        colorInput.value = '';
        colorInput.disabled = true;
        nameInput.disabled = true;
        updateButton.disabled = true;
    }

    modifyEvent(target: HTMLElement) {
        if (target.closest('#createCar')) {
            this.create();
        }

        if (target.closest('#updateCar')) {
            this.update();
            GLOBAL_STATE.isUpdate = false;
            GLOBAL_STATE.updateColor = '';
            GLOBAL_STATE.updateName = '';
        }
    }

    inputEvent(target: HTMLInputElement) {
        console.log(this.bodyDOM);

        if (target.closest('#createColor')) {
            GLOBAL_STATE.createColor = target.value;
        }

        if (target.closest('#createName')) {
            GLOBAL_STATE.createName = target.value;
        }

        if (target.closest('#updateName')) {
            GLOBAL_STATE.updateName = target.value;
        }

        if (target.closest('#updateColor')) {
            GLOBAL_STATE.updateColor = target.value;
        }
    }
}

export default Modify;
