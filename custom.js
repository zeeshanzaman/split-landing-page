const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
// add class
left.addEventListner('mouseenter', () => conatiner.classList.add('hover-left'));
// remove class
left.addEventListner('mouseleave', () => conatiner.classList.remove('hover-left'));