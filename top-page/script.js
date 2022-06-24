const hamb = document.querySelector('.hamb');
const mobile_menu = document.querySelector('.nav-ul');
const mobile_item = document.querySelectorAll('.nav-list ul li a');


hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


// mobile_item.forEach(item=> {
//     item.addEventListener('click', ()=>{
//     hamb.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
//     })
// })