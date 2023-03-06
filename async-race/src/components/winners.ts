import { WinnerView, WinnersArray } from './types';
import Controller from './controller';

const controller = new Controller();

class Winners {
    bodyDOM;

    totalCount: string | null;

    winnerView: WinnerView;

    constructor() {
        this.bodyDOM = document.querySelector('body') as HTMLElement;
        this.totalCount = '0';
        this.winnerView = {
            page: Number(localStorage.getItem('winnersPageNumber') ?? '1'),
            limit: 10,
            sort: localStorage.getItem('winnersSortType') ?? '',
            order: localStorage.getItem('winnersSortOrder') ?? '',
        };
    }

    async init() {
        console.log(this.bodyDOM);
        const currentPage = Number(localStorage.getItem('winnersPageNumber') ?? '1');
        const mainDOM = document.querySelector('main') as HTMLElement;
        const template = `  
        <section class="winners">
            <h1 class="winners__title">
                Winners <span class="winners__title-count">(${this.totalCount})</span>
            </h1>
            <h2 class="winners__page">
                Page: <span class="winners__page-count">${currentPage}</span>
            </h2>
            <table class="winners-table">
                <thead>
                    <tr>
                        <th class="winners-table__header">Number</th>
                        <th class="winners-table__header">Car</th>
                        <th class="winners-table__header">Names</th>
                        <th class="winners-table__header">
                            <button class="winners-sort__win">Wins</button>
                        </th>
                        <th class="winners-table__header">
                            <button class="winners-sort__time">Best Time</button>
                        </th>
                    </tr>
                </thead>
                <tbody class="winners-table__container">
                </tbody>
            </table>
            <div class="winners-nav">
                <button class="winners-nav__btn winners-nav__btn--prev" disabled="">Prev</button>
                <button class="winners-nav__btn winners-nav__btn--next">Next</button>
            </div>
        </section>
        `;
        mainDOM.innerHTML = template;
        Winners.checkClass();
    }

    static checkClass() {
        const type = localStorage.getItem('winnersSortType');
        const order = localStorage.getItem('winnersSortOrder');

        const winButton = document.querySelector('.winners-sort__win') as HTMLElement;
        const timeButton = document.querySelector('.winners-sort__time') as HTMLElement;

        if (!type) {
            return;
        }

        if (type === 'time') {
            if (order === 'asc') {
                timeButton.classList.add('winners-sort__time--asc');
            } else if (order === 'desc') {
                timeButton.classList.add('winners-sort__time--desc');
            }
            winButton.classList.remove('winners-sort__win--asc');
            winButton.classList.remove('winners-sort__win--desc');
        }

        if (type === 'wins') {
            if (order === 'asc') {
                winButton.classList.add('winners-sort__win--asc');
            } else if (order === 'desc') {
                winButton.classList.add('winners-sort__win--desc');
            }
            timeButton.classList.remove('winners-sort__time--asc');
            timeButton.classList.remove('winners-sort__time--desc');
        }
    }

    async getWinnersCount() {
        const result = await (await controller.getWinners(this.winnerView)).itemsCount;
        return result;
    }

    async render(winners: WinnersArray[]) {
        const tbodyDOM = document.querySelector('.winners-table__container') as HTMLElement;
        const counterDOM = document.querySelector('.winners__title-count') as HTMLElement;
        let result = '';

        winners.forEach(async (winner, index) => {
            result += `
                <tr class="winners-table__row">
                    <td class="winners-table__item">${index + 1}.</td>
                    <td class="winners-table__item">
                        <svg fill="${winner.car.color}" class="winners-car" version="1.0" xmlns="http://www.w3.org/2000/svg" width="150px" height="50px" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">
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
                    </td>
                    <td class="winners-table__item">${winner.car.name}</td>
                    <td class="winners-table__item">${winner.wins}</td>
                    <td class="winners-table__item">${winner.time}s</td>
                </tr>
            `;
        });
        tbodyDOM.innerHTML = result;
        this.totalCount = await this.getWinnersCount();
        counterDOM.innerHTML = `(${this.totalCount})`;

        const limitPerPage = Number(localStorage.getItem('limitWinnersPerPage'));
        const totalWinners = await this.getWinnersCount() as string;
        const lastPage = Math.ceil(+totalWinners / limitPerPage);
        const currentPage = Number(localStorage.getItem('winnersPageNumber') ?? '1');

        const navButtonContainer = document.querySelector('.winners-nav') as HTMLElement;
        navButtonContainer.innerHTML = `
            <button class="winners-nav__btn winners-nav__btn--prev" ${currentPage === 1 ? 'disabled=""' : ''}>Prev</button>
            <button class="winners-nav__btn winners-nav__btn--next" ${currentPage === lastPage ? 'disabled=""' : ''}>Next</button>
        `;

        const pageCount = document.querySelector('.winners__page-count') as HTMLElement;
        pageCount.textContent = `${currentPage}`;
    }

    async nextPage() {
        const newPage = Number(localStorage.getItem('winnersPageNumber')) + 1;
        localStorage.setItem('winnersPageNumber', `${newPage}`);
        this.winnerView.page = newPage;

        await this.render(await (await controller.getWinners(this.winnerView)).result);
    }

    async prevPage() {
        const newPage = Number(localStorage.getItem('winnersPageNumber')) - 1;
        localStorage.setItem('winnersPageNumber', `${newPage}`);
        this.winnerView.page = newPage;

        await this.render(await (await controller.getWinners(this.winnerView)).result);
    }

    async sortWinners(sort: string, order: string) {
        const winnersCurrentPage = Number(localStorage.getItem('winnersPageNumber') ?? '1');
        const winnerViewOption = {
            page: winnersCurrentPage,
            limit: 10,
            sort,
            order,
        };

        localStorage.setItem('winnersSortType', sort);
        localStorage.setItem('winnersSortOrder', order);

        await this.render(await (await controller.getWinners(winnerViewOption)).result);
    }

    async winnersEvent(target: HTMLElement) {
        const winButton = document.querySelector('.winners-sort__win') as HTMLElement;
        const timeButton = document.querySelector('.winners-sort__time') as HTMLElement;

        if (target.closest('.winners-sort__win')) {
            if (timeButton.className.split(' ').length > 1) {
                timeButton.className = 'winners-sort__time';
            }

            if (target.className.split(' ').length === 1) {
                await this.sortWinners('wins', 'asc');
                target.classList.add('winners-sort__win--asc');
                return;
            }

            if (target.classList.contains('winners-sort__win--asc')) {
                await this.sortWinners('wins', 'desc');
                target.classList.remove('winners-sort__win--asc');
                target.classList.add('winners-sort__win--desc');
                return;
            }

            if (target.classList.contains('winners-sort__win--desc')) {
                await this.sortWinners('wins', 'asc');
                target.classList.add('winners-sort__win--asc');
                target.classList.remove('winners-sort__win--desc');
                return;
            }
        }

        if (target.closest('.winners-sort__time')) {
            if (winButton.className.split(' ').length > 1) {
                winButton.className = 'winners-sort__win';
            }

            if (target.className.split(' ').length === 1) {
                await this.sortWinners('time', 'asc');
                target.classList.add('winners-sort__time--asc');
                return;
            }

            if (target.classList.contains('winners-sort__time--asc')) {
                await this.sortWinners('time', 'desc');
                target.classList.remove('winners-sort__time--asc');
                target.classList.add('winners-sort__time--desc');
                return;
            }

            if (target.classList.contains('winners-sort__time--desc')) {
                await this.sortWinners('time', 'asc');
                target.classList.add('winners-sort__time--asc');
                target.classList.remove('winners-sort__time--desc');
                return;
            }
        }

        if (target.closest('.winners-nav__btn--next')) {
            this.nextPage();
        }

        if (target.closest('.winners-nav__btn--prev')) {
            this.prevPage();
        }
    }
}

export default Winners;
