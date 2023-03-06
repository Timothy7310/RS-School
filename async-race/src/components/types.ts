type Car = {
    color: string;
    id?: number;
    name: string;
};

type WinnerView = {
    page: number,
    limit?: number,
    sort?: string,
    order?: string
};

type Winner = {
    id: number,
    wins: number,
    time: number,
};

type WinnersArray = {
    id?: number,
    wins: number,
    time: number,
    car: Car,
};

type AnimationCar = {
    id: number,
    animation: Animation,
    time: number
};

type GlobalState = {
    carMove: AnimationCar[],
    createColor: string,
    createName: string,
    updateName: string,
    updateColor: string,
    isUpdate: boolean,
};

export {
    Car, WinnerView, Winner, WinnersArray, AnimationCar, GlobalState,
};
