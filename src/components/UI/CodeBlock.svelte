<script lang="ts">
	import { CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton'
	import hljs from 'highlight.js'
	import 'highlight.js/styles/github-dark.css'

	storeHighlightJs.set(hljs)

	export let lang: string, code: string
</script>

<CodeBlock language={lang} {code} />
