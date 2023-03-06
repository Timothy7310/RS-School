import { Car, Winner, WinnerView } from './types';

class Controller {
    baseURL;

    garageURL;

    winnersURL;

    engineURL;

    constructor() {
        this.baseURL = 'http://127.0.0.1:3000';
        this.garageURL = `${this.baseURL}/garage`;
        this.winnersURL = `${this.baseURL}/winners`;
        this.engineURL = `${this.baseURL}/engine`;
    }

    async getCars(page: number, limit = 7) {
        localStorage.setItem('limitCarsPerPage', `${limit}`);
        const response = await fetch(`${this.garageURL}?_page=${page}&_limit=${limit}`);
        const cars = await response.json();
        return {
            cars,
            itemsCount: response.headers.get('X-Total-Count'),
        };
    }

    async getCar(id: number) {
        const response = (await fetch(`${this.garageURL}/${id}`)).json();
        return response;
    }

    async createCar(body: Car) {
        const response = (await fetch(this.garageURL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
        return response;
    }

    async deleteCar(id: number) {
        const response = (await fetch(`${this.garageURL}/${id}`, { method: 'DELETE' })).json();
        return response;
    }

    async updateCar(id: number, body: Car) {
        const response = (await fetch(`${this.garageURL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
        return response;
    }

    async startEngine(id: number) {
        const response = (await fetch(`${this.engineURL}?id=${id}&status=started`, { method: 'PATCH' })).json();
        return response;
    }

    async stopEngine(id: number) {
        const response = (await fetch(`${this.engineURL}?id=${id}&status=stopped`, { method: 'PATCH' })).json();
        return response;
    }

    async drive(id: number) {
        const response = await fetch(`${this.engineURL}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
        return response.status !== 200 ? { success: false } : { ...(await response.json()) };
    }

    static getSortOrder(sort: string, order: string) {
        if (sort && order) {
            return `&_sort=${sort}&_order=${order}`;
        }
        return '';
    }

    async getWinners({
        page,
        limit = 10,
        sort,
        order,
    } : WinnerView) {
        localStorage.setItem('limitWinnersPerPage', `${limit}`);
        const response = await fetch(`${this.winnersURL}?_page=${page}&_limit${limit}${Controller.getSortOrder((sort as string), (order as string))}`);

        const items = await response.json();

        const result = await Promise.all(
            items.map(async (winner: Winner) => (
                { ...winner, car: await this.getCar(((winner.id as number))) }
            )),
        );
        return {
            result,
            itemsCount: response.headers.get('X-Total-Count'),
        };
    }

    async getWinner(id: number) {
        const response = (await fetch(`${this.winnersURL}/${id}`)).json();
        return response;
    }

    async getWinnerStatus(id: number) {
        const response = (await fetch(`${this.winnersURL}/${id}`)).status;
        return response;
    }

    async deleteWinner(id: number) {
        const response = (await fetch(`${this.winnersURL}/${id}`, { method: 'DELETE' })).json();
        return response;
    }

    async createWinner(body: Winner) {
        const response = (await fetch(this.winnersURL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();

        return response;
    }

    async updateWinner(id: number, body: Winner) {
        const response = (await fetch(`${this.winnersURL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();

        return response;
    }

    async saveWinner({ id, time }: { id: number, time: number }) {
        const winnerStatus = await this.getWinnerStatus(id);

        if (winnerStatus === 404) {
            await this.createWinner({
                id,
                wins: 1,
                time,
            });
        } else {
            const winner = await this.getWinner(id);
            await this.updateWinner(id, {
                id,
                wins: winner.wins + 1,
                time: time <= winner.time ? time : winner.time,
            });
        }
    }
}

export default Controller;
