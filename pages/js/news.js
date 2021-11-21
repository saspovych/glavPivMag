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
