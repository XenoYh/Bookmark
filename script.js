`use strict`

const tab = document.querySelector('.tab')
const tabBtn = document.querySelectorAll('.tab-title')
const tabContent = document.querySelectorAll('.tabbed-item')


tab.addEventListener('click', function (e) {
    e.preventDefault()
    const clicked = e.target.classList.contains('tab-title') 
    if (!clicked) return; 

    for (let i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.remove("tab-title-active")
    }

    e.target.classList.add("tab-title-active")

    for (let i = 0; i < tabContent.length; i++) {
         tabContent[i].classList.remove('tabbed-item-active')   
    }

    const data = e.target.dataset.tab;
   
    document.querySelector(`.item-${data}`).classList.add('tabbed-item-active')
    


})


// faq

const questionBox = document.querySelector('.question-section')
const answer = document.querySelector('.answer')
const arrowDown = document.querySelectorAll('.icon-arrow')

questionBox.addEventListener('click', function (e){
    e.preventDefault
    const data = e.target.dataset.ans
    const picked = document.querySelector(`.ans-${data}`)
    const clickedArrow = document.querySelector(`.arr-${data}`)

    if (picked.classList.contains('active')) {
        
        picked.classList.remove('active')
        clickedArrow.classList.remove('down-arrow')    
        
        
    } else {
        picked.classList.add('active')
        clickedArrow.classList.add('down-arrow')    
        
        
    }
   
})


// login

// const loginBtn = document.querySelector('.login-btn') 
// const loginModal = document.querySelector('.login-modal')
// const body = document.querySelector('main')
// const nav = document.querySelector('.nav')





    
//     loginBtn.addEventListener('click', function (e) {
//         e.preventDefault
//         loginModal.style.display = 'flex'
//         body.classList.add('blur')
//         nav.classList.add('blur')
//         // loginModal.style.filter = 'none'
        
        
//     })
    
    
    

//     body.addEventListener('click', function () {
        
//         loginModal.style.display = "none";
//         body.classList.remove('blur')
//         nav.classList.remove('blur')
// })




const navBtn = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");
const modalEL = document.querySelector(".modal");
const btn = document.querySelector(".modal-btn");
const input = document.querySelectorAll(".each-input");
const firstname = document.querySelector(".firstname");
const surname = document.querySelector(".surname");
const mail = document.querySelector(".mail");
const password = document.querySelector(".password");
const confirmpassword = document.querySelector(".confirm");

navBtn.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
  modalEL.classList.remove("hidden");
});


overlay.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.add("hidden");
    modalEL.classList.add("hidden");
    console.log('green');
    
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    firstname.value === "" ||
    surname.value === "" ||
    mail.value === "" ||
    password.value === "" ||
    mail.value === "" ||
    password.value === "" ||
    confirmpassword.value === ""
  ) {
    alert("input field is empty");
    return;
} if (password.value !== confirmpassword.value) {
        alert("passwords must match");
  }
  
  else {
    overlay.classList.add("hidden");
    modalEL.classList.add("hidden");
     
    }

}); i