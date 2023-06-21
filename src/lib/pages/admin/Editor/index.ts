import { basicSetup, EditorView } from 'codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { indentWithTab } from '@codemirror/commands'
import { syntaxHighlighting } from '@codemirror/language'
import { placeholder, keymap } from '@codemirror/view'
import { tags } from '@lezer/highlight'
import { HighlightStyle } from '@codemirror/language'
import type { PopupSettingsMap, ToastSettingsMap } from '$lib/pages/admin/Editor/editor'
import type { PopupSettings } from '@skeletonlabs/skeleton'

// Svelte HTML Editor
const myHighlightStyle = HighlightStyle.define([
	{ tag: tags.keyword, color: '#fc6' },
	{ tag: tags.comment, color: '#f5d', fontStyle: 'italic' },
	{ tag: tags.attributeName, color: 'red', fontStyle: 'italic' },
	{ tag: tags.name, color: 'grey' },
	{ tag: tags.angleBracket, color: 'red' }
])

const svelteHTMLEditor = () =>
	new EditorView({
		extensions: [
			basicSetup,
			markdown({ codeLanguages: languages }),
			EditorView.baseTheme({
				'.cm-editor': {
					border: 'none'
				},
				'&.cm-focused': {
					outline: 'none'
				},
				'&.cm-focused .cm-cursor': {
					borderLeftColor: 'green'
				},
				'.cm-gutters': {
					backgroundColor: 'transparent'
				},
				'.cm-gutter': {
					backgroundColor: 'transparent'
				},
				'.cm-gutterElement': {
					backgroundColor: 'transparent'
				},
				'.cm-activeLine.cm-line': {
					backgroundColor: 'transparent'
				}
			}),
			placeholder('Start typing document in HTML and TailWindCSS/SkeletonUI...'),
			keymap.of([indentWithTab]),
			syntaxHighlighting(myHighlightStyle)
		],
		parent: document.getElementById('editor') as HTMLElement
	})

const toasts: ToastSettingsMap = {
	autoSaveToast: {
		message: 'Auto Saving Draft...',
		background: 'variant-ghost-primary',
		callback: () => {
			console.log('Auto Save Toast')
		}
	},
	saveToast: {
		message: 'Saving Draft...',
		background: 'variant-ghost-primary',
		callback: () => {
			console.log('Saving Toast')
		}
	}
}

const popups: PopupSettingsMap = {
	insertImage: {
		event: 'click',
		target: 'insertImage',
		placement: 'right',
		state(event: { state: boolean }) {
			if (event.state) {
				console.log(true)
			} else {
				console.log(false)
			}
		}
	},
	insertHero: {
		event: 'click',
		target: 'insertHero',
		placement: 'right'
	}
}

export { svelteHTMLEditor, toasts, popups }
