let division = document.querySelector('div');
division.classList.add('box');

// console.log(division); 

let box = document.querySelector('.box');

let heading = document.querySelector('h1');

// Ensure the heading is indeed a child of the box before trying to remove it
if (box.contains(heading)) {
     box.removeChild(heading);
}

// Selecting all paragraphs with class 'para'
let paras = document.querySelectorAll('.para');



let buttons = document.querySelector('button');

buttons.addEventListener('click', () => {
     paras.forEach(para => {

          if (para.style.color == "blue") {
               para.style.color = "red"
          } else {
               para.style.color = "blue"
          }
     });
     // console.log('hello')
     // paras.classList.toggle('paras')
})



// Adding click event listener to 'box' to change the color of all 'para' elements to blue












