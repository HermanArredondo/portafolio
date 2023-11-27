let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

//REVIEWS SWIPER
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// EMAIL JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name,email,msg) {
    emailjs.send("service_3mnushq","template_jyo0ezn",{
    to_name: email,
    from_name: name,
    message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Error!",
        text: "Campos vacios",
        icon: "error",
        button: "Volver",
      });
}
function success() {
    swal({
        title: "Enviado!",
        text: "Se han enviado tus datos",
        icon: "success",
        button: "Ok",
      });
}
//HEADER
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY> 0)
});

//SCROLL TOP
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY> 400)
});