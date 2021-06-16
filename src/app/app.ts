import { renderGarageView } from './view/garageView';
import { renderWinnersView } from './view/winnersView';

export const renderHTML: () => void = async () => {
  const mainHTML = `
    <div class="menu">
      <button class="button" id="garage-menu-button">To garage</button>
      <button class="button" id="winners-menu-button">To winners</button>
    </div>

    <div id="garage-section">
      ${renderGarageView()}
    </div>

    <div id="winners-section" style="display: none">
      ${renderWinnersView()}
    </div>

    <div class="pagination">
      <button class="button prev-button" id="prev">Prev</button>
      <button class="button next-button" id="next">Next</button>
    </div>
  `;

  const root = document.createElement('div');
  root.innerHTML = mainHTML;
  document.body.append(root);
};
