// change the picture in 'promo' block
let pictures = document.querySelector('.promo-images');
let SliderPicture1 = document.querySelector('.promo__img--picture-1');
let SliderPicture2 = document.querySelector('.promo__img--picture-2');
let SliderPicture3 = document.querySelector('.promo__img--picture-3');
let changePicturesButton = document.querySelectorAll('.slider__button');

if (pictures) {
  changePicturesButton[0].onclick = function () {
    SliderPicture1.classList.add('promo__img--current');
    SliderPicture2.classList.remove('promo__img--current');
    SliderPicture3.classList.remove('promo__img--current');
  };
  changePicturesButton[1].onclick = function () {
    SliderPicture1.classList.remove('promo__img--current');
    SliderPicture2.classList.add('promo__img--current');
    SliderPicture3.classList.remove('promo__img--current');
  };
  changePicturesButton[2].onclick = function () {
    SliderPicture1.classList.remove('promo__img--current');
    SliderPicture2.classList.remove('promo__img--current');
    SliderPicture3.classList.add('promo__img--current');
  };
};

// change the picture in 'bar-promo' block
let picturesBar = document.querySelector('.promo-bar-images');
let pictureBar1 = document.querySelector('.promo-bar-images__img-1');
let pictureBar2 = document.querySelector('.promo-bar-images__img-2');
let buttonsBar = document.querySelectorAll('.slider__button');

if (picturesBar) {
  buttonsBar[0].onclick = function () {
    pictureBar1.classList.add('promo-bar-images__img--current');
    pictureBar2.classList.remove('promo-bar-images__img--current');
  };
  buttonsBar[1].onclick = function () {
    pictureBar1.classList.remove('promo-bar-images__img--current');
    pictureBar2.classList.add('promo-bar-images__img--current');
  };
};

// Like added
let buttonLike = document.querySelector('.grill__button-like');
let likeIcon = document.querySelector('.grill__icon-like');

if (buttonLike) {
  buttonLike.onclick = function () {
    likeIcon.classList.toggle('grill__icon-like--added');
  };
};

// Scroll to top
let buttonScrollToTop = document.querySelector('.footer__scroll-button');

buttonScrollToTop.onclick = function () {
  window.scrollTo(0, 0);
};

// Scroll to down
let buttonScrollToDown = document.querySelector('.promo__scroll-button');
let buttonScrollWrapperPosition = document.querySelector('.promo__scroll');
let clickButton = 0;
let positonButton = '-1000px';
let scrollToPositionY = 1200;

if (buttonScrollToDown) {
  while (clickButton < 10) {
    buttonScrollToDown.onclick = function () {
      window.scrollTo(0, scrollToPositionY);
      buttonScrollWrapperPosition.style.bottom = positonButton;
    }
    clickButton++;
  };
};

// Scroll to add comment
let buttonComment = document.querySelector('.grill__button-comment');
let commentAdd = document.querySelector('.add-comment');

if (buttonComment) {
  buttonComment.onclick = function () {
    commentAdd.scrollIntoView({block: 'center', behavior: 'smooth'});
  };
};
