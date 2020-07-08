let squares = 16; 
const gridContainer = document.querySelector('.grid-container');
const input = document.querySelector('.prompt');

// creating the grid container
let buildContainer = function(){
gridContainer.style.cssText = `
  grid-template-columns:  repeat(${squares}, 1fr);
  grid-template-rows:     repeat(${squares}, 1fr)
  `
};

//prompt for user input of grid size
input.addEventListener('click', e =>{
  removeGrid();
  prompt = prompt("how many squares per side to make the new grid?", 32);
  squares = prompt;
  draw();
});

// filling the grid  with squares
let fillGrid = function(){
  for (i = 0; i < squares ** 2; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  };
};
 
//keeping the color after hovering
let changeClr = function(){
  const square = document.querySelectorAll('.grid-item');
  square.forEach(foreachgriditem =>{
        foreachgriditem.addEventListener('mouseover', e =>{
          foreachgriditem.classList.add('grid-item--color'); // remember! no dot when adding a class!! 
        });
      });
    };

// resetting the squares
let removeGrid = function(){
  let gridelement = document.querySelectorAll(".grid-item");
      gridelement.forEach(forechsquare =>{
        forechsquare.remove('div.gird-item');
      })
  };


//function to draw squares
let draw = function(){
  buildContainer();
  fillGrid(); 
  changeClr();
};

draw();