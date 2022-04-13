const featuredProducts = [
  {
    name: 'Mens T-shirt',
    postion: 'Red Printed T-shirt',
    imagePath: '../assets/images/buy-1.jpg',
    description:
      'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
  {
    name: 'Men Shoes',
    postion: 'Best Seling Shoes',
    imagePath: '../assets/images/buy-2.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicingadipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Men Pants',
    postion: 'Mens Sport Pants',
    imagePath: '../assets/images/buy-3.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicingelit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Girl Clothes',
    postion: 'Swag Girl Shirt',
    imagePath: '../assets/images/ethGirl.png',
    description:
      'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicingadipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Cultural Dress',
    postion: 'Habesha Dress Printed',
    imagePath: '../assets/images/loveeth.png',
    description:
      'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicingadipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Fashion Jeans',
    postion: 'Men Fashion Jeans',
    imagePath: '../assets/images/category-1.jpg',
    description:
      'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

for (let i = 0; i < featuredProducts.length; i += 1) {
  if (i > 1) {
    document.querySelector(
      '#featured-products',
    ).innerHTML += `<div class="flex-div read-more">
                   <div class="flex-images">
                     <img src="${featuredProducts[i].imagePath}">
                   </div>
                  <div class="product-info">
                      <h3>${featuredProducts[i].name}</h3>
                      <p class="position">${featuredProducts[i].postion}</p>
                      <hr class="product-info-line">
                      <p>${featuredProducts[i].description}</p>
                  </div>
              </div>
        `;
  } else {
    document.querySelector(
      '#featured-products',
    ).innerHTML += `<div class="flex-div">
                   <div class="flex-images">
                     <img src="${featuredProducts[i].imagePath}">
                   </div>
                  <div class="product-info">
                      <h3>${featuredProducts[i].name}</h3>
                      <p class="position">${featuredProducts[i].postion}</p>
                      <hr class="product-info-line">
                      <p>${featuredProducts[i].description}</p>
                  </div>
              </div>
        `;
  }
}
// ------------add class to elements having i>1--
const readMore = document.querySelector('.more-btn-container');
const featuredProduct = document.querySelector('#featured-products');
const showMoreText = document.querySelector('.show-more-text');
const fontAwsomeDownIcon = document.getElementsByClassName('fa-angle-down');
const arrowDownUp = document.querySelector('.arrow-down-up');
window.console.log(fontAwsomeDownIcon.length);
readMore.addEventListener('click', () => {
  featuredProduct.classList.toggle('show-hide');
  if (showMoreText.textContent === 'SHOW MORE' && fontAwsomeDownIcon.length === 1) {
    showMoreText.innerText = 'SHOW LESS';
    arrowDownUp.style.visibility = 'hidden';
  } else {
    showMoreText.innerText = 'SHOW MORE';
    arrowDownUp.style.visibility = 'visible';
  }
});
// ----------add event listener to the menu icon-----
const menuIcon = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const navbar = document.querySelector('.nav-bar');
const social = document.querySelector('.social-login');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navigation.classList.toggle('active');
  social.classList.toggle('active');
  navbar.classList.toggle('active');
});
