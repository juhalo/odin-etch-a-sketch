let rows = 16;
const container = document.querySelector('.container');
for (let i = 0; i < rows * rows; i++) {
  const newDiv = document.createElement('div');
  newDiv.style.border = '1px solid'; //For testing; remove later
  container.appendChild(newDiv);
}
console.log(rows); // For testing; remove later
container.style.cssText = `grid-template-columns: repeat(${rows}, 1fr);`;

function main() {
  const divList = document.querySelectorAll('.container > div');
  divList.forEach((div) => div.addEventListener('mouseenter', colorDiv));
  document.addEventListener('click', uncolorDiv);
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

main();
