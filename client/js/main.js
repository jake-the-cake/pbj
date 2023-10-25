window.addEventListener('DOMContentLoaded', () => {
	useHiddenNavigation('hidden-nav')
	
	
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