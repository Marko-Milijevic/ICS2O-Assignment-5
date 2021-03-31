document.getElementById('submit').addEventListener('click', calculateArea)

let diameter = 0
let radius = 0 
const pi = 3.14
let area = 0
let circumference = 0

function calculateArea () {
  diameter = document.getElementById('input').value
  radius = parseInt(diameter) / 2
  area = pi * radius * radius
  circumference = 2 * pi * radius 
  document.getElementById('answer1').innerHTML = "Area: " + area
  document.getElementById('answer2').innerHTML = "Circumference: " + circumference
}
