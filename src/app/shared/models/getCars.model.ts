import { Car } from './car.model';

export interface GetCars {
  items: Car[];
  count: string | null;
}
