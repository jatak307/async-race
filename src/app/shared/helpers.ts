import { Car } from './models/car.model';

const models: string[] = [
  'Audi', 'Hyundai', 'Mersedes', 'Skoda', 'BMW', 'Kia', 'Mitsubishi', 'Toyota',
  'Ford', 'Lada', 'Nissan', 'Volkswagen', 'Honda', 'Mazda', 'Renault',
];
const names: string[] = [
  'A8', 'Sonata', 'Maybach S', 'Octavia', 'M5', 'Rio', 'Outlander', 'Camry', 'Transit',
  'Vesta', 'Murano', 'Polo', 'Pilot', 'Model 6', 'Logan',
];

const getRandomName: () => string = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * models.length)];
  return `${model} ${name}`;
};

const getRandomColor: () => string = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateCars: (count?: number) => Car[] = (count = 100) => new Array(count)
  .fill(1).map(() => ({ name: getRandomName(), color: getRandomColor() }));
