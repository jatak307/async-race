import { GetCars } from '../shared/models/getCars.model';
import { Car } from '../shared/models/car.model';
import { garage } from './constants';

export const getCars: (
  page?: number, limit?: number
) => Promise<GetCars> = async (page = 1, limit = 7): Promise<GetCars> => {
  const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const createCar: (body: Car) => Promise<Response> = async (body: Car) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar: (
  id: number
) => Promise<Response> = async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const getCar: (id: number) => Promise<Car> = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const updateCar: (
  id: number, body: Car
) => Promise<Response> = async (id: number, body: Car) => (await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();
