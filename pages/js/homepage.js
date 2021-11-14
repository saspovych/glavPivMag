const titleSwiper = new Swiper('.title-swiper_swiper', {
  loop: true,
  speed: 1200,
  simulateTouch: false,
  spaceBetween: 30,

  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const beer = document.querySelector('.title-swiper_beer')
titleSwiper.on('slideChange', function () {
  if (titleSwiper.realIndex == 0) {
    beer.classList.toggle('title-swiper_active')
  } else {
    beer.classList.remove('title-swiper_active')
  }
});









const card = document.querySelectorAll(".card__inner");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const addInBacket = document.querySelectorAll(".add-in-backet")

plus.forEach(item => {
  item.addEventListener('click', event => {
      let numb = item.previousElementSibling
      let previousNumb = Number(numb.textContent)
      numb.textContent = previousNumb + 1;


      let cardInner = item.closest('.card__inner')
      cardInner.classList.add('no-flip')
  })
})

minus.forEach(item => {
  item.addEventListener('click', event => {
      let numb = item.nextElementSibling
      let previousNumb = Number(numb.textContent)
      numb.textContent = previousNumb - 1;


      let cardInner = item.closest('.card__inner')
      cardInner.classList.add('no-flip')
  })
})


// TODO: Когда будет реализован переход в корзину
//  этот кусок кода нужно удалить
addInBacket.forEach(item => {
  item.addEventListener('click', event => {
    let cardInner = item.closest('.card__inner')
    cardInner.classList.add('no-flip')
  })
})



card.forEach(item => {
  item.addEventListener('click', event => {
      if(item.classList.contains('no-flip')) {
        item.classList.remove('no-flip')
      } else {
        item.classList.toggle('is-flipped');
      }
  })
})




const haveTimeSwiper = new Swiper('.have-time_swiper', {
  speed: 800,
  slidesPerView: 3,
  simulateTouch: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});







const breweries = new Swiper('.breweries-swiper', {
  loop: true,
  speed: 800,
  slidesPerView: 6,
  simulateTouch: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});






const recentlyWatched = new Swiper('.recently-watched_swiper', {
  speed: 800,
  slidesPerView: 3,
  simulateTouch: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});