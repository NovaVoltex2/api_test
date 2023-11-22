let input = document.querySelector('.inputZone')
let inputmain = document.querySelector('.input')
let inputcont = document.querySelector('.cont')
let fill = document.querySelector('.fill')
let count = document.querySelector('.count')

let pecent=0
input.addEventListener('input',()=>{
	if (input.innerHTML.length>=10){
		count.textContent = input.innerHTML.length
		input.setAttribute('contenteditable',false)
		inputcont.style.animation =`animat 1s forwards cubic-bezier(0.075, 0.82, 0.165, 1)`
	}else{
		input.setAttribute('contenteditable', true)
		inputcont.style.animation = `animate 1s forwards cubic-bezier(0.075, 0.82, 0.165, 1)`
		pecent = input.innerHTML.length * 11
		fill.style.height = `${pecent}%`
		count.textContent = input.innerHTML.length
	}

})
inputmain.addEventListener('click', () => {
	if (input.innerHTML.length >= 10) {
	input.setAttribute('contenteditable', true) }
})