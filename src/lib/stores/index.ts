import { browser } from '$app/environment'
import { writable } from 'svelte/store'

function prefersDark() {
	if (browser) {
		if (window.matchMedia('prefers-color-scheme: dark').matches) {
			document.documentElement.classList.add('dark')
			window.localStorage.setItem('theme', 'dark')
			return true
		} else {
			document.documentElement.classList.remove('dark')
			window.localStorage.setItem('theme', 'light')
			return false
		}
	}
}

export const theme = writable(prefersDark() ? 'dark' : 'light')

theme.subscribe((value) => {
	if (browser) {
		const lightSwitch: any = document.querySelector('.lightswitch-track')
		window.localStorage.setItem('theme', value)
		console.log(lightSwitch, value)
	}
})
