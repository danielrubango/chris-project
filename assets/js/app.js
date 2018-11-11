let form = document.querySelector('.form'),
	close = document.querySelectorAll('.close'),
	modal = document.querySelector('.modal'),
	body = document.body

const userData = {
	username: 'admin',
	password: 'secret',
	otp: 12
}

close.forEach((item) => {
	item.addEventListener('click', event => {
		document.querySelector('.modal.open').classList.remove('open')
		body.style.overflow = "auto"
	})
})

form.addEventListener('submit', (e) => {
	e.preventDefault()

	let formElements = form.elements,
		validationResult = false

	for(let i = 0; i < formElements.length; i++)
		if(Object.keys(userData).includes(formElements[i].name))
			if(userData[formElements[i].name] == formElements[i].value)
				validationResult += (userData[formElements[i].name] == formElements[i].value)

	body.style.overflow = "hidden"

	if (validationResult == 3) {
		document.querySelector('.modal .modal_body').innerText = "Good Job ! Let begin assets."
	} else {
		document.querySelector('.modal .modal_body').innerText = "Incorrect credentials"
	}

	modal.classList.toggle('open')
})

