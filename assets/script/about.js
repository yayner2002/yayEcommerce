const menuIcon = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const navbar = document.querySelector('.nav-bar');
const social = document.querySelector('.social-login');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('show');
  navigation.classList.toggle('show');
  social.classList.toggle('show');
  navbar.classList.toggle('show');
});