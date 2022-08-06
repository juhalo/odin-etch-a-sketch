let rows = 16;
const container = document.querySelector('.container');
console.log(container);
for (let i = 0; i < rows * rows; i++) {
  const newDiv = document.createElement('div');
  newDiv.style.border = '1px solid'; //For testing; remove later
  container.appendChild(newDiv);
}
console.log(rows); // For testing; remove later
container.style.cssText = `grid-template-columns: repeat(${rows}, 1fr);`;
