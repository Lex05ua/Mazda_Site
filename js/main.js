const order = document.querySelector('.order');
console.log(order);
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.getElementById('btn');
const overlay = document.querySelector('.overlay');
const span = document.querySelector('.span');
console.log(span)

order.addEventListener('click', () => {
    wrapper.classList.add('active');
})

const close = () => {
    wrapper.classList.remove('active');
}


overlay.addEventListener('click', close);
closeBtn.addEventListener('click', close);
