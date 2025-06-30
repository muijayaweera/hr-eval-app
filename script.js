const container = document.querySelector('.container');
const viewBtn = document.querySelector('.view-btn');
const evaluateBtn = document.querySelector('.evaluate-btn');

viewBtn.addEventListener('click',() => {
  container.classList.add('active');
})

evaluateBtn.addEventListener('click',() => {
  container.classList.remove('active');
})