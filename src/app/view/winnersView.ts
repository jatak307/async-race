import store from '../api/store';

export const renderWinnersView: () => string = () => {
  const winnersHTML = `
    <h1>Winners ${store.winnersCount}</h1>
    <h2>Page #${store.winnersPage}</h2>
    <table class="table" cellspacing="0" border="0" cellpadding="0">
      <thead>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th class="table-button table-wins" id="sort-by-wins">Wins</th>
        <th class="table-button table-time" id="sort-by-time">Best time (seconds)</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>картинка</td>
          <td>имя</td>
          <td>количество побед</td>
          <td>лучшее время</td>
        </tr>
      </tbody>
    </table>
  `;
  return winnersHTML;
};
