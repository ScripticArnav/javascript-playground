console.log('Project 5');
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  console.log(e);
  console.log(e.target);
  insert.innerHTML = `
  <table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key == ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  `;
});
