const container = document.querySelector('.container');

function main() {
  const divList = document.querySelectorAll('.container > div');
  const button = document.querySelector('button');
  divList.forEach((div) => div.addEventListener('mouseenter', colorDiv));
  document.addEventListener('click', uncolorDiv);
  button.addEventListener('click', restart);
}

function createDivs(rowNum) {
  for (let i = 0; i < rowNum * rowNum; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.border = '1px solid'; //For testing; remove later
    container.appendChild(newDiv);
  }
  console.log(rowNum); // For testing; remove later
  container.style.cssText = `grid-template-columns: repeat(${rowNum}, 1fr);`;
}

function colorDiv(e) {
  if (!e.shiftKey) {
    if (e.ctrlKey) {
      e.target.classList.remove('painted');
    } else {
      e.target.classList.add('painted');
    }
  }
}

function uncolorDiv(e) {
  e.target.classList.remove('painted');
}

function removeDivs() {
  for (const div of document.querySelectorAll('.container > div')) {
    container.removeChild(div);
  }
}

function restart() {
  let rows;
  while (true) {
    rows = +prompt('Number of rows');
    if (rows <= 100 && rows > 0) break;
  }
  removeDivs();
  createDivs(rows);
  main();
}

createDivs(16);
main();
