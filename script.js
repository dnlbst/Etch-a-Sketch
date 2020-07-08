// initial grid size
let squares = 16; 
const gridContainer = document.querySelector('.grid-container');
// buttons
const input = document.querySelector('.prompt');
const random = document.querySelector('.colour');
const gray = document.querySelector('.gray');

//

// 1. grid building

// creating the grid container
let buildContainer = function(){
gridContainer.style.cssText = `
  grid-template-columns:  repeat(${squares}, 1fr);
  grid-template-rows:     repeat(${squares}, 1fr)
  `
};

// filling the grid with squares
let fillGrid = function(){
  for (i = 0; i < squares ** 2; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  };
};


// 2. color changing

//keeping black after hovering
let changeClr = function(){
  const square = document.querySelectorAll('.grid-item');
  square.forEach(foreachgriditem =>{
        foreachgriditem.addEventListener('mouseover', e =>{
          foreachgriditem.classList.add('grid-item--color'); // remember! no dot when adding a class!! 
        });
      });
    };

//getting a random color over and over
let randomClr = function(){
  const square = document.querySelectorAll('.grid-item');
  square.forEach(foreachgriditem =>{
        foreachgriditem.addEventListener('mouseover', e =>{
          let color ='#'+Math.random().toString(16).substr(2,6);
          foreachgriditem.style.backgroundColor = color;
        });
      });
    };

//increasing opacity over mouseovers
let grayClr = function(){
  const square = document.querySelectorAll('.grid-item');
  square.forEach(foreachgriditem =>{           
      let opacity = 0.1;
      let color = 'black'
      foreachgriditem.addEventListener('mouseover', e =>{
          console.log(opacity);
          foreachgriditem.style.backgroundColor = color;
          foreachgriditem.style.opacity = `${opacity}`;
          opacity += 0.1 ;
      });
    });
};


// 3. interactions (html buttons)

//prompt for user input of grid size
input.addEventListener('click', e =>{
  removeGrid();
  squares = prompt("how many squares per side to make the new grid?", 32);
  draw();
});


//random colour button
random.addEventListener('click', e =>{
  removeGrid();
  squares = prompt("how many squares per side to make the new grid?", 32);
  drawRdmClr();
});

//increasing gray button
gray.addEventListener('click', e =>{
  removeGrid();
  squares = prompt("how many squares per side to make the new grid?", 32);
  drawGray();
});


// 4. resetting the grid

// resetting the squares
let removeGrid = function(){
  let gridelement = document.querySelectorAll(".grid-item");
      gridelement.forEach(forechsquare =>{
        forechsquare.remove('div.gird-item');
      })
  };


// 5. compilations for different the html buttons

//function to draw squares
let draw = function(){
  buildContainer();
  fillGrid(); 
  changeClr();
};

//function to draw rdm coloured squares
let drawRdmClr = function(){
  buildContainer();
  fillGrid(); 
  randomClr();
};

//function to draw increasing grayed squares
let drawGray = function(){
  buildContainer();
  fillGrid(); 
  grayClr();
};


draw();