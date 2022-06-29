const hamb = document.querySelector('.hamb');
const mobile_menu = document.querySelector('.nav-ul');
const mobile_item = document.querySelectorAll('.nav-list ul li a');


hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


mobile_item.forEach(item=> {
    item.addEventListener('click', ()=>{
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})

function scrolll() {
    var left = document.querySelector(".cont");
    left.scrollBy(350, 0)
  }
  function scrollr() {
    var right = document.querySelector(".cont");
    right.scrollBy(-350, 0)
  }
  
  
  
  function slide(direction) {
    var container = document.getElementsByClassName('cont');
    scrollCompleted = 0;
    var slideVar = setInterval(function(){
      if(direction == 'left'){
        container.scrollLeft -=10;
      }else{
        container.scrollLeft +=10;
      }
      scrollCompleted +=10;
      if(scrollCompleted >=100){
        window.clearInterval(slideVar);
      }
    }, 50);
  }
