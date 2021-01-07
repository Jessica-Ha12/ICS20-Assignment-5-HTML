const x = document.getElementById('mybtn')
x.addEventListener('click', theCircumference)
x.addEventListener('click', theArea)
function theCircumference () {
  let radius = document.getElementById('theradius').value
  radius = parseInt(radius)
  answer = 2 * Math.PI * radius
  document.getElementById('circumference').innerHTML = answer
}
function theArea () {
  const radius = document.getElementById('arearadius').value
  radius = parseInt(radius)
  const areaAnswer = Math.PI * radius * radius
  document.getElementById('area').innerHTML = areaAnswer
}
