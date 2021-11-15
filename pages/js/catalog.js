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





const filterPriceSlider = document.getElementById('filter-slider');

noUiSlider.create(filterPriceSlider, {
    start: [0, 2000],
    step: 1,
    connect: true,
    range: {
        'min': [0],
        'max': [10000]
    }
});

const input0 = document.getElementById('input0');
const input1 = document.getElementById('input1');
const inputs = [input0, input1];

filterPriceSlider.noUiSlider.on('update', function(values, handle){
  inputs[handle].value = Math.round(values[handle]);
})

const setRangeSlider = (i, value) => {
  let arr =[null, null];
  arr[i] = value;
  filterPriceSlider.noUiSlider.set(arr)
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value)
  })
})



const catalogHiddenBlock = document.querySelectorAll('section')
catalogHiddenBlock.forEach(item => {
  item.addEventListener('click', () => {
    if(item.firstElementChild.nextElementSibling.classList.contains('catalog_unactive-block')) {
      item.firstElementChild.nextElementSibling.classList.add('catalog_active-block')
      item.firstElementChild.nextElementSibling.classList.remove('catalog_unactive-block')
      item.firstElementChild.classList.toggle('active');
    } else {
      item.firstElementChild.nextElementSibling.classList.add('catalog_unactive-block')
      item.firstElementChild.nextElementSibling.classList.remove('catalog_active-block')
      item.firstElementChild.classList.toggle('active');
    }
  })
})