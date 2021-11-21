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



document.getElementById("defaultOpen").click();

function openAuthTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



function maxLenght(input) {
  const authInput = document.getElementById(input)

  if (authInput.value.length > authInput.maxLength)
    authInput.value = authInput.value.slice(0, authInput.maxLength);
}



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