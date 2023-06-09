import { localStorageStore } from '@skeletonlabs/skeleton'
import type { Writable } from 'svelte/store'
import { browser } from '$app/environment'

// ! Start of Draft

const defaultValue = browser
	? window.localStorage.getItem('draft')
	: {
			title: '',
			content: '',
			files: []
	  }

const draft: Writable<string> = localStorageStore('draft', JSON.stringify(defaultValue))

draft.subscribe((value) => {
	if (value === 'undefined' || value === 'null') {
		value = JSON.stringify({
			title: '',
			content: '',
			files: []
		})

		return
	}

	if (browser) {
		window.localStorage.setItem('draft', JSON.stringify(value))
	}
})

// ! End of Draft

export { draft }
