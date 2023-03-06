import { Car } from './types';
import Controller from './controller';
import GLOBAL_STATE from './state';

const controller = new Controller();

class Cars {
    bodyDOM;

    totalCount: string | null;

    constructor() {
        this.bodyDOM = document.querySelector('body') as HTMLElement;
        this.totalCount = null;
    }

    async init() {
        console.log(this.bodyDOM);
        const mainDOM = document.querySelector('main') as HTMLElement;
        const currentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');
        const template = `
            <h1 class="cars__title">
                Garage 
                <span class="cars-count">(${await Cars.getCarsCount()})</span>
            </h1>
            <h2 class="cars__page">Page:
                <span class="cars__page-count">${currentPage}</span>
            </h2>
            <ul class="cars-list">
            </ul>
            <div class="cars__nav">
            </div>
        `;
        const section = document.createElement('section');
        section.classList.add('cars');
        section.innerHTML = template;
        mainDOM.append(section);
    }

    static async getCarsCount() {
        const currentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');
        const result = await (await controller.getCars(currentPage)).itemsCount;
        return result;
    }

    async render(cars: Car[]) {
        const listDOM = document.querySelector('.cars-list') as HTMLElement;
        const counterDOM = document.querySelector('.cars-count') as HTMLElement;
        let result = '';

        cars.forEach((car) => {
            result += `
            <li class="cars-item">
                <div class="cars-item__head">
                    <button class="cars-item__head-btn cars-item__head-btn--select" data-id="${car.id}">Select</button>
                    <button class="cars-item__head-btn cars-item__head-btn--remove" data-id="${car.id}">Remove</button>
                    <h3 class="cars-item__head-name">${car.name}</h3>
                </div>
                <div class="cars-item__manage">
                    <button class="cars-item__manage-btn cars-item__manage-btn--start" data-id="${car.id}">Start</button>
                    <button class="cars-item__manage-btn cars-item__manage-btn--reset" data-id="${car.id}" disabled="">Reset</button>
                </div>
                <div class="cars-item__road">                        
                    <svg class="cars-item__car cars-item__car--${car.id}" fill="${car.color}" version="1.0" xmlns="http://www.w3.org/2000/svg" width="150px" height="50px" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.15, written by Peter Selinger 2001-2017
                            </metadata>
                            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                <path d="M6770 5134 c-376 -33 -552 -63 -818 -141 l-123 -36 65 -66 c36 -37
                        66 -71 66 -77 0 -5 -80 -56 -177 -113 -553 -323 -1055 -648 -1208 -782 l-54
                        -47 -97 -7 c-221 -17 -445 26 -572 111 l-55 36 -256 -26 c-728 -77 -1334 -166
                        -1630 -242 -73 -19 -157 -34 -185 -34 -171 0 -434 -119 -644 -292 -58 -48 -87
                        -64 -145 -80 -176 -50 -380 -144 -533 -246 -105 -71 -245 -191 -299 -257 l-38
                        -46 12 -220 c7 -121 16 -259 21 -307 7 -64 6 -91 -3 -103 -7 -9 -31 -44 -54
                        -77 l-43 -61 58 -26 c297 -137 804 -233 1324 -252 l177 -6 3 94 3 94 47 7 c71
                        12 93 -1 127 -77 97 -214 327 -430 552 -518 256 -101 550 -100 797 2 212 88
                        418 281 524 490 21 42 43 82 49 89 7 9 34 12 87 10 l77 -3 -2 -67 -2 -66 62
                        -6 c95 -8 4885 -29 4897 -21 7 4 10 28 9 59 -2 28 0 57 4 64 5 8 35 12 87 12
                        l79 0 41 -77 c134 -258 382 -458 654 -528 166 -42 377 -44 536 -4 105 26 265
                        101 346 162 123 94 240 232 317 377 l32 61 128 6 c143 6 157 1 157 -53 0 -31
                        2 -33 28 -29 15 3 160 23 322 45 726 99 897 126 932 148 42 26 273 273 295
                        315 28 55 32 95 16 156 -23 84 -18 239 12 441 31 197 29 272 -4 340 -14 29
                        -75 96 -166 185 -125 121 -148 149 -175 208 -16 37 -32 67 -34 67 -2 0 -109
                        27 -237 60 l-234 59 0 51 0 50 -60 0 c-33 0 -91 3 -128 7 l-68 6 2 53 c2 30 1
                        56 -2 58 -2 2 -53 -2 -114 -10 -60 -7 -116 -13 -123 -14 -10 0 -13 18 -11 73
                        1 39 -1 74 -5 76 -4 2 -51 -4 -105 -14 l-98 -18 -214 75 c-880 310 -1980 624
                        -2671 762 -480 97 -816 135 -1228 140 -157 2 -305 2 -330 0z m580 -294 c287
                        -17 652 -61 678 -83 8 -6 11 -20 7 -36 -11 -44 -246 -795 -251 -800 -4 -4
                        -1902 -70 -2046 -71 l-87 0 -6 38 c-30 181 -125 302 -237 302 -140 0 -324
                        -119 -455 -295 -49 -66 -62 -73 -145 -74 -61 -1 -78 10 -56 36 22 27 863 583
                        1000 661 389 223 628 292 1103 321 201 12 297 12 495 1z m1204 -191 c482 -121
                        874 -249 1098 -359 228 -111 260 -177 115 -230 -59 -21 -961 -92 -1349 -107
                        -163 -6 -178 -5 -184 11 -7 18 43 696 53 722 9 23 57 16 267 -37z m-665 -766
                        c23 -27 60 -86 83 -132 l43 -84 0 -111 c-1 -193 -60 -381 -214 -682 -102 -198
                        -156 -277 -270 -397 -122 -126 -226 -204 -365 -272 -176 -87 -223 -96 -551
                        -106 -389 -11 -1984 -44 -2185 -44 l-165 0 -7 60 c-9 69 -53 651 -70 923 -18
                        280 7 415 109 583 82 136 194 251 219 226 4 -4 -22 -37 -58 -75 -165 -170
                        -245 -377 -236 -605 11 -248 80 -1042 92 -1055 11 -11 141 -11 747 2 404 9
                        941 18 1194 21 475 7 597 14 700 40 254 67 520 262 674 495 105 159 284 543
                        322 689 22 88 25 232 5 306 -19 72 -52 131 -102 185 -24 26 -44 54 -44 64 0
                        31 38 16 79 -31z m-6110 -197 c10 -12 0 -28 -51 -88 -136 -155 -349 -314 -553
                        -413 -171 -82 -361 -135 -380 -106 -11 19 42 87 138 175 235 215 486 361 732
                        426 86 23 99 24 114 6z m10681 -187 c24 -51 43 -106 44 -127 l1 -37 -120 -6
                        c-66 -4 -269 -7 -450 -8 -361 -1 -379 1 -519 59 -92 39 -141 69 -130 80 5 5
                        153 25 329 45 176 21 408 47 515 60 107 12 216 23 241 24 l46 1 43 -91z
                        m-9703 -339 c142 -19 263 -66 400 -156 106 -69 176 -139 238 -238 221 -355
                        164 -766 -150 -1082 -78 -79 -193 -144 -325 -186 -105 -32 -336 -33 -452 -1
                        -188 53 -288 111 -402 234 -264 286 -306 650 -118 1014 81 156 286 319 482
                        384 116 38 208 46 327 31z m7284 0 c429 -62 753 -460 726 -890 -26 -403 -291
                        -713 -682 -795 -112 -24 -291 -24 -375 0 -337 94 -610 416 -637 752 -13 157
                        39 373 124 521 130 224 335 361 611 407 96 16 149 17 233 5z m-9549 -381 c109
                        -23 197 -89 244 -181 13 -26 24 -52 24 -58 0 -6 -55 -10 -155 -10 l-155 0 0
                        -30 0 -31 -127 3 -127 3 -8 40 c-5 22 -20 50 -33 63 -46 43 -26 129 38 167 73
                        43 191 57 299 34z m-41 -356 c6 -6 12 -38 13 -70 l1 -58 -112 -3 c-127 -3
                        -125 -4 -138 82 -5 36 -3 51 7 58 19 13 215 5 229 -9z m-1 -173 c0 -19 -30
                        -84 -48 -103 -22 -24 -85 -57 -110 -57 -16 0 -22 13 -35 78 -8 42 -13 80 -10
                        85 7 11 203 9 203 -3z"></path>
                                <path d="M2521 3085 c-358 -78 -560 -298 -616 -672 -18 -120 -18 -186 -1 -283
                        51 -281 250 -481 571 -576 76 -23 109 -27 210 -27 146 0 237 22 375 89 81 40
                        108 60 185 138 50 50 105 117 124 148 72 124 119 315 107 439 -24 238 -131
                        452 -291 582 -79 64 -219 131 -325 157 -100 23 -242 25 -339 5z"></path>
                                <path d="M9781 3085 c-184 -42 -297 -101 -412 -215 -73 -73 -93 -100 -138
                        -190 -69 -140 -95 -260 -88 -415 3 -92 10 -124 36 -196 50 -134 112 -233 210
                        -330 131 -130 263 -189 466 -208 403 -39 737 183 836 554 16 62 21 111 22 215
                        1 163 -15 236 -78 365 -97 200 -250 330 -475 405 -85 29 -284 37 -379 15z"></path>
                                <path d="M5765 4931 c-93 -39 -549 -258 -1385 -668 -190 -93 -385 -187 -433
                        -208 l-89 -40 50 -23 c112 -51 361 -90 499 -79 62 5 66 7 354 197 392 258 752
                        488 934 595 83 48 156 94 164 101 12 11 8 22 -25 73 -21 34 -41 61 -44 60 -3
                        0 -14 -4 -25 -8z"></path>
                            </g>
                    </svg>
                    <svg class="cars-item__finish" version="1.0" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 1280.000000 1228.000000" preserveAspectRatio="xMidYMid meet">
                        <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                        </metadata>
                        <g transform="translate(0.000000,1228.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                        <path d="M10310 12228 c-179 -164 -475 -378 -710 -513 -460 -266 -1074 -491
                        -1790 -655 -102 -23 -202 -46 -222 -51 l-37 -9 14 -48 c7 -26 23 -81 34 -122
                        177 -660 423 -1570 533 -1975 38 -143 72 -263 74 -266 4 -7 162 26 339 72 188
                        48 624 194 648 218 4 4 -55 178 -132 387 -76 208 -216 591 -311 849 -95 259
                        -192 525 -217 593 -25 68 -44 124 -42 126 2 2 69 22 149 45 516 151 990 374
                        1437 676 68 46 125 80 127 77 3 -6 699 -1737 722 -1795 10 -26 -402 -322 -676
                        -487 -248 -149 -582 -306 -870 -409 -80 -28 -152 -55 -161 -59 -14 -6 -5 -38
                        66 -232 45 -124 157 -434 250 -690 326 -904 446 -1234 449 -1237 10 -10 401
                        185 606 302 400 227 659 416 1023 749 54 49 99 87 101 85 2 -2 90 -224 196
                        -494 106 -269 255 -647 331 -838 l137 -348 -60 -77 c-141 -179 -446 -460 -733
                        -675 -318 -238 -914 -601 -928 -565 -2 7 -154 425 -337 928 -183 503 -334 917
                        -336 919 -2 2 -57 -21 -121 -52 -161 -76 -321 -144 -510 -215 -178 -67 -457
                        -159 -497 -164 -26 -3 -48 44 -1305 2872 l-1279 2875 -134 6 c-73 4 -245 7
                        -383 8 -1652 7 -3126 -448 -4301 -1327 -186 -138 -424 -338 -424 -354 0 -7 85
                        -228 189 -492 193 -489 630 -1599 851 -2161 163 -413 822 -2088 1000 -2540 78
                        -198 315 -801 527 -1340 212 -539 411 -1044 442 -1123 l57 -142 81 102 c272
                        347 726 801 1178 1179 1249 1043 2811 1905 3465 1912 170 2 262 -38 312 -136
                        29 -58 22 -202 -15 -305 -81 -226 -310 -571 -567 -857 -106 -117 -210 -227
                        -210 -221 0 3 26 47 58 98 224 357 326 626 292 769 -22 92 -94 139 -214 139
                        -308 0 -924 -335 -1333 -724 l-106 -101 23 -45 c104 -206 284 -379 495 -476
                        523 -240 1348 -170 2345 201 941 350 1913 946 2490 1525 140 141 280 310 358
                        434 l53 83 -200 504 c-211 534 -463 1171 -811 2049 -117 294 -301 760 -410
                        1035 -109 275 -293 741 -410 1035 -117 294 -297 751 -402 1015 -104 263 -192
                        484 -196 491 -5 8 -26 -5 -62 -38z m-3912 -1415 c247 -533 378 -829 371 -833
                        -6 -4 -54 -10 -107 -14 -434 -30 -1127 -161 -1603 -302 -128 -38 -434 -140
                        -518 -174 -30 -11 -58 -17 -62 -13 -9 10 -750 1860 -756 1890 -5 19 4 24 83
                        48 514 157 1044 219 1900 223 l310 2 382 -827z m-1891 -1410 c22 -51 546
                        -1260 880 -2032 62 -145 110 -268 106 -272 -5 -5 -118 -65 -252 -134 -758
                        -392 -1324 -750 -1854 -1173 -65 -52 -121 -92 -124 -89 -9 9 -953 2467 -953
                        2480 1 22 338 273 610 454 310 207 641 396 995 569 238 117 534 252 553 253 7
                        1 25 -25 39 -56z m3261 -1690 c11 -27 174 -392 362 -813 188 -421 345 -773
                        347 -782 4 -13 -5 -19 -39 -27 -108 -27 -417 -135 -563 -197 -406 -172 -917
                        -450 -1349 -731 -87 -57 -162 -101 -167 -96 -4 4 -130 301 -279 658 -150 358
                        -339 810 -421 1005 -82 195 -147 360 -145 366 6 15 296 132 586 237 522 189
                        1022 329 1440 402 74 12 151 24 171 24 34 1 38 -2 57 -46z"></path>
                        <path d="M285 10362 c-154 -69 -281 -126 -282 -127 -3 -2 83 -247 837 -2400
                        210 -599 568 -1622 796 -2272 228 -651 601 -1717 830 -2370 229 -654 573
                        -1638 766 -2188 192 -550 351 -1001 352 -1002 3 -3 947 374 953 381 3 3 -47
                        137 -110 298 -136 345 -927 2359 -1462 3723 -207 528 -516 1313 -685 1745
                        -434 1105 -1184 3014 -1466 3733 -131 334 -241 606 -244 606 -3 -1 -131 -58
                        -285 -127z"></path>
                        </g>
                    </svg>
                </div>
            </li>
            `;
        });
        listDOM.innerHTML = result;
        this.totalCount = await Cars.getCarsCount();
        counterDOM.innerHTML = `(${this.totalCount})`;

        const limitPerPage = Number(localStorage.getItem('limitCarsPerPage'));
        const totalCars = await Cars.getCarsCount() as string;
        const lastPage = Math.ceil(+totalCars / limitPerPage);
        const currentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');

        const navButtonContainer = document.querySelector('.cars__nav') as HTMLElement;
        navButtonContainer.innerHTML = `
            <button class="cars__nav-btn cars__nav-btn--prev" ${currentPage === 1 ? 'disabled=""' : ''}>Prev</button>
            <button class="cars__nav-btn cars__nav-btn--next" ${currentPage === lastPage ? 'disabled=""' : ''}>Next</button>
        `;

        const pageCount = document.querySelector('.cars__page-count') as HTMLElement;
        pageCount.textContent = `${localStorage.getItem('carsPageNumber') ?? '1'}`;
    }

    static async selectCar(id: number) {
        const updateNameInput = document.querySelector('#updateName') as HTMLInputElement;
        const updateColorInput = document.querySelector('#updateColor') as HTMLInputElement;
        const updateButton = document.querySelector('#updateCar') as HTMLButtonElement;
        localStorage.setItem('selectID', `${id}`);

        updateNameInput.disabled = false;
        updateColorInput.disabled = false;
        updateButton.disabled = false;
        GLOBAL_STATE.isUpdate = true;

        updateNameInput.value = await (await controller.getCar(id)).name;
        updateColorInput.value = await (await controller.getCar(id)).color;

        GLOBAL_STATE.updateColor = updateColorInput.value;
        GLOBAL_STATE.updateName = updateNameInput.value;
    }

    async deleteCar(id: number) {
        const listDOM = document.querySelector('.cars-list') as HTMLElement;
        let currentPage = Number(localStorage.getItem('carsPageNumber') ?? '1');
        if (listDOM.childElementCount === 1) {
            currentPage -= 1;
            localStorage.setItem('carsPageNumber', `${currentPage}`);
        }
        await controller.deleteCar(id);
        await controller.deleteWinner(id);
        await this.render(await (await controller.getCars(currentPage)).cars);
    }

    async nextPage() {
        const newPage = Number(localStorage.getItem('carsPageNumber')) + 1;
        localStorage.setItem('carsPageNumber', `${newPage}`);

        await this.render(await (await controller.getCars(newPage)).cars);
    }

    async prevPage() {
        const newPage = Number(localStorage.getItem('carsPageNumber')) - 1;
        localStorage.setItem('carsPageNumber', `${newPage}`);

        await this.render(await (await controller.getCars(newPage)).cars);
    }

    static carsAnimationMove(time: number, id: number) {
        const car = document.querySelector(`.cars-item__car--${id}`) as HTMLElement;
        const animationObj = {
            id,
            animation: car.animate(
                [{ left: '10px' }, { left: 'calc(100% - 150px)' }],
                {
                    duration: time,
                    easing: 'linear',
                    fill: 'forwards',
                },
            ),
            time,
        };
        animationObj.animation.play();
        GLOBAL_STATE.carMove.push(animationObj);
    }

    static resetCarAnimation(id: number) {
        GLOBAL_STATE.carMove.forEach((item) => {
            if (item.id === id) {
                item.animation.cancel();
            }
        });
        GLOBAL_STATE.carMove = GLOBAL_STATE.carMove.filter((x) => x.id !== id);
        const car = document.querySelector(`.cars-item__car--${id}`) as HTMLElement;
        car.style.left = '0px';
    }

    async startCar(id: number): Promise<void> {
        console.log(this.bodyDOM);

        const startButton = document.querySelector(`.cars-item__manage-btn--start[data-id="${id}"]`) as HTMLButtonElement;
        const resetButton = document.querySelector(`.cars-item__manage-btn--reset[data-id="${id}"]`) as HTMLButtonElement;
        const resetAllButton = document.querySelector('.manage-reset') as HTMLButtonElement;
        startButton.disabled = true;

        const response = await controller.startEngine(id);
        const { velocity, distance } = response;
        const time = distance / velocity;

        Cars.carsAnimationMove(time, id);
        resetButton.disabled = false;
        const drive = await controller.drive(id);

        return new Promise((resolve, reject) => {
            if (drive.success === false) {
                reject();
                GLOBAL_STATE.carMove.forEach((item) => {
                    if (item.id === id) {
                        item.animation.pause();
                    }
                });
            } else if (drive.success === true) {
                resolve();
            }
            resetAllButton.disabled = false;
        });
    }

    async resetCar(id: number) {
        console.log(this.bodyDOM);

        const startButton = document.querySelector(`.cars-item__manage-btn--start[data-id="${id}"]`) as HTMLButtonElement;
        const resetButton = document.querySelector(`.cars-item__manage-btn--reset[data-id="${id}"]`) as HTMLButtonElement;
        Cars.resetCarAnimation(id);
        await controller.stopEngine(id);
        startButton.disabled = false;
        resetButton.disabled = true;
    }

    async carsEvent(target: HTMLElement) {
        if (target.closest('.cars-item__head-btn--select')) {
            const id = target.dataset.id as string;
            Cars.selectCar(+id);
        }

        if (target.closest('.cars-item__head-btn--remove')) {
            const id = target.dataset.id as string;
            this.deleteCar(+id);
        }

        if (target.closest('.cars__nav-btn--next')) {
            this.nextPage();
        }

        if (target.closest('.cars__nav-btn--prev')) {
            this.prevPage();
        }

        if (target.closest('.cars-item__manage-btn--start')) {
            const id = Number(target.dataset.id);
            await this.startCar(id);
        }

        if (target.closest('.cars-item__manage-btn--reset')) {
            const id = Number(target.dataset.id);
            await this.resetCar(id);
        }
    }
}

export default Cars;
