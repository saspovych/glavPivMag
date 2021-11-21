const searchForm = document.querySelector('form')
const searcher = document.querySelector('.searcher')
searchForm.addEventListener('click', () => {
  searcher.focus()
})

searcher.addEventListener('focus', () => {
    searcher.parentElement.classList.add('focused')
})
searcher.addEventListener('focusout', () => {
  searcher.parentElement.classList.remove('focused')
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