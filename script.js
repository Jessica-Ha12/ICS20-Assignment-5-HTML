const x = document.getElementById('mybtn')
x.addEventListener('click', theCircumference)
x.addEventListener('click', theArea)
function theCircumference () {
  let radius = document.getElementById('theradius').value
  radius = parseInt(radius)
  var answer = 2 * Math.PI * radius
  document.getElementById('circumference').innerHTML = answer
}
function theArea () {
  let radius = document.getElementById('arearadius').value
  radius = parseInt(radius)
  var areaAnswer = Math.PI * radius * radius
  document.getElementById('area').innerHTML = areaAnswer
}
