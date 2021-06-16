const card = document.querySelector('.card');
const container = document.querySelector('.card-wrapper');
const title = document.querySelector('.img-1');

console.log(window.pageXOffset);

container.addEventListener('mousemove', (e) => {
console.log(e.pageY);
let xAxis = (window.innerWidth/2 - e.pageX)/10;
let yAxis = (window.innerHeight/2 - e.pageY)/10;
card.style.transform = (`rotateY(${yAxis}deg) rotateX(${xAxis}deg)`);
title.style.transform = `translateZ(120px) rotateZ(10deg)`
});

container.addEventListener('mouseenter',(e => {
card.style.transform = "none";
title.style.transform = `none`;
}))

container.addEventListener('mouseleave',(e) => {
card.style.transition = "all 0.5s ease"
title.style.transition =`all 2s ease`
card.style.transform = (`rotateY(0deg) rotateX(0deg)`);
title.style.transform = `translateZ(0px) rotateZ(0)`
})