window.addEventListener('DOMContentLoaded', () => {
	useHiddenNavigation('hidden-nav')
	const headerQuoteForm = document.getElementById('header-quote')
	const navQuoteForm = document.getElementById('nav-quote')
	if (headerQuoteForm) headerQuoteForm.onsubmit = useModal('quote', 'formSubmitted')
	if (navQuoteForm) navQuoteForm.onsubmit = useModal('quote', 'formSubmitted')
	
	// relocateUnderNavbar()
})

function useHiddenNavigation(id) {
	const hiddenNavbar = document.getElementById(id)
	hiddenNavbar.style.top = '-' + hiddenNavbar.offsetHeight + 'px'
	window.addEventListener('scroll', (e) => {
		if (window.scrollY > 30 && !hiddenNavbar.classList.contains('top-0')) hiddenNavbar.classList.add('top-0')
		if (window.scrollY <= 30 && hiddenNavbar.classList.contains('top-0')) hiddenNavbar.classList.remove('top-0')
	})
}

function relocateUnderNavbar(spaceInPx = 16) {
	const navigationHeight = document.querySelector('nav')?.offsetHeight || null
	if (navigationHeight) {
		document.body.style.marginTop = `${ navigationHeight  + spaceInPx }px`
		document.body.style.minHeight = 'auto'
	}
	console.log(navigationHeight)
}

function isStringArray(array) {
	let pass = false
	if (Array.isArray(array) && array.length > 0) pass = true
	array.forEach(item => {
		if (pass === 'false') return
		if (typeof item !== 'string') pass = false
	})
	return pass
}

function htmlElement(type) {
	const element = document.createElement(type)
	element.addClass = (...classes) => {
		if (isStringArray(classes) && classes.length > 0) element.classList = classes
		return element
	}
	element.addId = (id) => {
		if (id && typeof id === 'string') element.id = id
		return element
	}
	element.displayModal = () => {
		document.body.appendChild(element)
		element.hideModal()
		return element
	}
	element.hideModal = () => {
		element.addEventListener('click', () => {
			element.classList.add('transparent')
			setTimeout(() => { document.body.removeChild(element) }, 700)
		})
		return element
	}
	return element
}

function useModal(name, callback) {
	return (e) => {
		e.preventDefault()
		const background = htmlElement('div').addClass('modal-bg').addId('modal')
		background.displayModal()
		switch (name) {
			case 'quote':

		}
		// callback(e.target)
	}
}