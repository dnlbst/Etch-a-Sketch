let squares = 16; 
const gridContainer = document.querySelector('.grid-container');
const prmpt = document.querySelector('.prompt');

// creating the grid container depending on user input (prompt & button)
let buildContainer = function(){
gridContainer.style.cssText = `
  grid-template-columns:  repeat(${squares}, 1fr);
  grid-template-rows:     repeat(${squares}, 1fr)
  `
};

// filling the grid container with squares
let fillGrid = function(){
  for (i = 0; i < squares ** 2; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  };
};

// resetting the grid container squares
let removeGrid = function(){
  for (i = 0; i < squares ** 2; i++) {
    gridContainer.removeChild('.gridItem');
  };
};

 

//changing and keeping the color after hovering those damn squares (took me while)
let changeClr = function(){
const square = document.querySelectorAll('.grid-item');

square.forEach(foreachgriditem =>{
      foreachgriditem.addEventListener('mouseover', e =>{
        foreachgriditem.classList.add('grid-item--color'); // remember! no dot when adding a class!! 
      });
    });
  };

//function to call all the functions above for grid drawing
let draw = function(){
  buildContainer();
  fillGrid(); 
  changeClr();
};
draw();

prmpt.addEventListener('click', e =>{
    removeGrid();
    prompt = prompt("how many squares per side to make the new grid?", 32);
    squares = prompt;
    draw();
  });
  
  

  