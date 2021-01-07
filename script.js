const x = document.getElementById('myBtn')
x.addEventListener('click', theCircumference)
x.addEventListener('click', theArea)
function theCircumference () {
  let radius = document.getElementById('rAdius').value
  radius = parseInt(radius)
  answer = 2 * Math.PI * radius
  document.getElementById('circumference').innerHTML = answer
}
function theArea () {
  const radius = document.getElementById('areaRadius').value
  radius = parseInt(radius)
  let areaAnswer = Math.PI * radius * radius
  document.getElementById('area').innerHTML = areaAnswer
}
