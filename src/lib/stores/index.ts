import { localStorageStore } from '@skeletonlabs/skeleton'
import type { Writable } from 'svelte/store'
import { browser } from '$app/environment'

const defaultValue = browser
	? window.localStorage.getItem('draft')
	: {
			title: '',
			content: ''
	  }

const draft: Writable<string> = localStorageStore('draft', JSON.stringify(defaultValue))

draft.subscribe((value) => {
	if (value === 'undefined' || value === 'null') {
		value = ''
		return
	}

	if (browser) {
		window.localStorage.setItem('draft', JSON.stringify(value))
	}
})

export { draft }
