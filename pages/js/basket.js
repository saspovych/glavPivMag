const searchForm = document.querySelector('form')
const searcher = document.querySelector('.searcher')
searchForm.addEventListener('click', () => {
  searcher.focus()
})

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

plus.forEach(item => {
  item.addEventListener('click', event => {
      let numb = item.previousElementSibling
      let previousNumb = Number(numb.textContent)
      numb.textContent = previousNumb + 1;
  })
})

minus.forEach(item => {
  item.addEventListener('click', event => {
      let numb = item.nextElementSibling
      let previousNumb = Number(numb.textContent)
      numb.textContent = previousNumb - 1;
  })
})

searcher.addEventListener('focus', () => {
    searcher.parentElement.classList.add('focused')
})
searcher.addEventListener('focusout', () => {
  searcher.parentElement.classList.remove('focused')
})

const input = document.querySelectorAll('input[type="radio"]')
input.forEach(item => {
	item.addEventListener('change', () => {
		document.querySelectorAll('.basket_delivery-method_radio').forEach(div => {
			div.classList.remove('checked')
		})

		item.parentElement.classList.add('checked')
	})
})


function checkInputOnCorrect(input) {
  const authInput = document.getElementById(input)

  if (authInput.value.length > 0){
      authInput.parentElement.classList.add('correct')
      authInput.parentElement.classList.remove('wrong')
  } else {
      authInput.parentElement.classList.remove('correct')
      authInput.parentElement.classList.add('wrong')
  }
}