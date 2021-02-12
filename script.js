document.getElementById('alert').addEventListener('click', reportInput)

function reportInput () {
  alert(document.getElementById('input-one').value)
}

document.getElementById('button-one').addEventListener('click', buttonOne)

function buttonOne () {
  document.getElementById('background').style.backgroundColor = 'powderblue'
  document.getElementById('image').src = './images/kitten.jfif'
  document.getElementById('image').style.display = 'block'
}

document.getElementById('disappear').addEventListener('click', buttonTwo)

function buttonTwo () {
  document.getElementById('image').style.display = 'none'
}
