import {
  createCar,
  deleteCar,
  getCar,
  updateCar,
} from '../api/api';
import { Car } from '../shared/models/car.model';
import { renderGarageView } from '../view/garageView';
import { updateStateGarage } from '../update/update';
import { generateCars } from '../shared/helpers';

const updateGarageView: () => void = () => {
  const headerSection: HTMLElement | null = document.getElementById('headerSection');
  headerSection?.remove();
  const garageList: Element | null = document.querySelector('.garage');
  garageList?.remove();

  renderGarageView();
  updateStateGarage();
};

export const listeners: () => void = () => {
  const garageMenu = document.getElementById('garage-menu-button');
  const winnersMenu = document.getElementById('winners-menu-button');
  const createForm: HTMLElement | null = document.getElementById('create');
  const updateForm: HTMLElement | null = document.getElementById('update');
  const generatorButton: HTMLElement | null = document.getElementById('generator-button');

  let selectedCar: Car | null = null;

  garageMenu?.addEventListener('click', () => {
    (document.getElementById('garage-section') as HTMLDivElement).setAttribute('style', 'display:block');
    (document.getElementById('winners-section') as HTMLDivElement).setAttribute('style', 'display:none');
  });

  winnersMenu?.addEventListener('click', () => {
    (document.getElementById('winners-section') as HTMLDivElement).setAttribute('style', 'display:block');
    (document.getElementById('garage-section') as HTMLDivElement).setAttribute('style', 'display:none');
  });

  createForm?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
    const inputName: HTMLInputElement = (document.getElementById('create-name') as HTMLInputElement);
    const inputColor: HTMLInputElement = (document.getElementById('create-color') as HTMLInputElement);
    const car: Car = {
      name: inputName.value,
      color: inputColor.value,
    };
    await createCar(car);

    updateGarageView();
    inputName.value = '';
    inputColor.value = '#ffffff';
  });

  generatorButton?.addEventListener('click', async (event) => {
    const eventTarget = event.target as HTMLInputElement;
    eventTarget.disabled = true;
    const cars: Car[] = generateCars();
    await Promise.all(cars.map((car) => createCar(car)));
    updateGarageView();
    eventTarget.disabled = false;
  });

  updateForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const updateName: HTMLInputElement = (document.getElementById('update-name') as HTMLInputElement);
    const updateColor: HTMLInputElement = (document.getElementById('update-color') as HTMLInputElement);
    const updateButton: HTMLInputElement = (document.getElementById('update-button') as HTMLInputElement);
    const car: Car = {
      name: updateName.value,
      color: updateColor.value,
    };

    if (selectedCar) {
      const id: number = selectedCar.id as number;
      await updateCar(id, car);
    }

    updateGarageView();
    updateName.value = '';
    updateColor.value = '#ffffff';
    updateName.disabled = true;
    updateColor.disabled = true;
    updateButton.disabled = true;
  });

  document.body.addEventListener('click', async (event: Event) => {
    const eventTarget: Element = event.target as Element;

    if (eventTarget.classList.contains('remove-button')) {
      const id = +eventTarget.id.split('remove-car-')[1];
      await deleteCar(id);

      updateGarageView();
    }

    if (eventTarget.classList.contains('select-button')) {
      const id = eventTarget.id.split('select-car-')[1];
      selectedCar = await getCar(Number(id));
      const selectedCarName: string = selectedCar?.name as string;
      const selectedCarColor: string = selectedCar?.color as string;

      const updateName: HTMLInputElement = (document.getElementById('update-name') as HTMLInputElement);
      const updateColor: HTMLInputElement = (document.getElementById('update-color') as HTMLInputElement);
      const updateButton: HTMLInputElement = (document.getElementById('update-button') as HTMLInputElement);
      updateName.value = selectedCarName;
      updateColor.value = selectedCarColor;

      updateName.disabled = false;
      updateColor.disabled = false;
      updateButton.disabled = false;
    }
  });
};
