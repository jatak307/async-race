import { renderHTML } from './app/app';
import { listeners } from './app/listeners/listeners';
import { updateStateGarage } from './app/update/update';
import './styles.scss';

document.addEventListener('DOMContentLoaded', async () => {
  renderHTML();
  await updateStateGarage();
  listeners();
});
