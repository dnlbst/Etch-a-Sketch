let prompt = 16;
let gridContainer = document.querySelector('.grid-container');


for (i = 0; i < prompt ** 2; i++) {
  let gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
};

const square = document.querySelectorAll('.grid-item');
console.log(square);
  
square.forEach(foreachgriditem =>{
      foreachgriditem.addEventListener('mouseover', e =>{
      square.classList.add('gird-item--color');
      });
    });


// color.foreach(a => {
//   a.addEventListener('mouseover', e =>{
//   classList.add(`${'.grid-item--color'}`);
// });
// });






// const setColor = function('mouseover', e =>{
//   let gridy = document.getElementsByClassName('grid-item');
//   gridy.classList.add('gird-item--color');
// };



// for (i = 0; i < square.lenght; i++){
//   square.addEventListener('mouseover', e =>{
//     square.classList.add('.gird-item--color');
//   });
//   };