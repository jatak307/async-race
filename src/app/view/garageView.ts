import { Car } from '../shared/models/car.model';
import { getCars } from '../api/api';
import store from '../api/store';

export const renderCarImage: (color: string | number) => string = (color: string | number) => `
  <?xml version="1.0" standalone="no"?>
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" style="fill:${color}" stroke="none">
      <path d="M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6 -10 -246 -105
      -590 -234 -448 -167 -1052-415 -1173 -483 -78 -43 -193 -91
      -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340 -49 -563 -57 l-203
      -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3
      -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418 0 -194 11 -396
      26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64
      -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622 756 722 90 26 112
      28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302
      140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263 l-15 -73 3006 7
      c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22
      259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239 -63 453 -205 601
      -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1
      -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45 525 79 48 24 97
      81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50
      680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0 -226 0 -347 85
      -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332
      -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341 10 -140 81 -187 94
      -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66
      -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36 -485 54 -98 26 -198
      119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83
      54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12 -67z m630 47 c264 -18
      777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134
      274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11 -27 -907 2 -906 3 -59
      160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"/>
      <path d="M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262
      -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493 -551 85 -44 178 -78
      271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23
      86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50 -354 64 -507 36z m350
      -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220
      1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360 0 -320 84 -544 355
      -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"/>
      <path d="M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24
      -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196 487 396 518 1128
      67 1560 -97 93 -166 140 -290 198 -137 64 -235 86
      -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388 -110
      -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176
      238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z"/>
    </g>
  </svg>
`;

const renderCar: (car: Car) => string = (car) => {
  const html = `
    <div class="general-buttons">
      <button class="button select-button" id="select-car-${car.id}">Select</button>
      <button class="button remove-button" id="remove-car-${car.id}">Remove</button>
      <span class="car-name">${car.name}</span>
    </div>
    <div class="road">
      <div class="launch-pad">
        <div class="control-panel">
          <button class="icon start-engine-button" id="start-engine-car-${car.id}" >A</button>
          <button class="icon stop-engine-button" disabled id="stop-engine-car-${car.id}" >B</button>
        </div>
        <div class="car" id="car-${car.id}">
          ${renderCarImage(car.color)}
        </div>
      </div>
      <div class="flag" id="flag-${car.id}">????</div>
    </div>
  `;

  return html;
};

const getCarsList: () => Promise<void> = async () => {
  await getCars().then((res) => {
    const root: Element | null = document.querySelector('#garage-section');
    const fragment: DocumentFragment = document.createDocumentFragment();
    const carsList = document.createElement('ul');
    carsList.classList.add('garage');

    res.items.forEach((car: Car):void => {
      const itemCar: HTMLLIElement = document.createElement('li');
      itemCar.innerHTML = renderCar(car);
      carsList.append(itemCar);
    });

    fragment.append(carsList);
    root?.appendChild(fragment);
  });
};

const controlGarage: () => string = () => {
  const html = `
    <div class="form-container">
      <form class="form" id="create">
        <input name="name" type="text" class="input-name" id="create-name">
        <input name="color" type="color" class="input-color" id="create-color" value="#ffffff">
        <button type="submit" class="button" id="create-button">Create</button>
      </form>
      <form class="form" id="update">
        <input name="name" type="text" class="input-name" id="update-name" disabled>
        <input name="color" type="color" class="input-color" id="update-color" value="#ffffff" disabled>
        <button type="submit" class="button" id="update-button" disabled>Update</button>
      </form>
    </div>
  `;

  return html;
};

const controlRace: () => string = () => {
  const html = `
    <div class="race-control">
      <button class="button" id="race-button">Race</button>
      <button class="button" id="reset-button">Reset</button>
      <button class="button" id="generator-button">Generate cars</button>
    </div>
  `;

  return html;
};

export const garageHeader: () => Promise<void> = async () => {
  await getCars().then((res) => {
    const root: Element | null = document.querySelector('#garage-section');
    const fragment: DocumentFragment = document.createDocumentFragment();
    const header: HTMLDivElement = document.createElement('div');
    header.id = 'headerSection';

    const garageH1: HTMLHeadingElement = document.createElement('h1');
    garageH1.classList.add('header');
    garageH1.innerHTML = `Garage ${res.count}`;

    const garageH2: HTMLHeadingElement = document.createElement('h2');
    garageH2.classList.add('mb');
    garageH2.innerHTML = `Page #${store.carsPage}`;

    header.append(garageH1);
    header.append(garageH2);
    fragment.append(header);
    root?.appendChild(fragment);
  });
};

export const renderGarageView: () => string = () => {
  garageHeader();
  getCarsList();
  const garageHTML = controlGarage() + controlRace();
  return garageHTML;
};
