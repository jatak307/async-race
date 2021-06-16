import { getCars } from '../api/api';
import store from '../api/store';

export const updateStateGarage: () => Promise<void> = async () => {
  const { items } = await getCars();
  const carsCount: number = items.length;
  store.carsCount = carsCount;

  const prevButton = document.getElementById('prev') as HTMLInputElement;
  const nextButton = document.getElementById('next') as HTMLInputElement;

  if (store.carsPage * 7 < store.carsCount) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }

  if (store.carsPage > 1) {
    prevButton.disabled = false;
  } else {
    prevButton.disabled = true;
  }
};
