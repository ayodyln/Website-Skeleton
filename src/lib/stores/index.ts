import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const initTheme = browser ? window.localStorage.getItem('theme') : 'dark'

export const theme = writable(initTheme)

theme.subscribe((value: any) => {
	if (value === 'null') theme.set('dark')
	if (browser) {
		window.localStorage.setItem('theme', value)
		document.documentElement.setAttribute('data-theme', value)
	}
})
