const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const circlefull = document.querySelector('.circlefull');


btn.onclick = function(){
   this.classList.toggle('active');
   container.classList.toggle('active');
  }
  
circlefull.onclick = function(){
  this.classList.toggle('active');
  circle.classList.toggle('active');
}