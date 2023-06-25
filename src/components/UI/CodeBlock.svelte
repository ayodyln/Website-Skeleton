<script lang="ts">
	import { CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton'
	import hljs from 'highlight.js'
	import 'highlight.js/styles/github-dark.css'

	storeHighlightJs.set(hljs)
</script>

<CodeBlock language="html" code={`<div>This is meta</div>`} />
<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
<CodeBlock language="ts" code={`const skeleton: string = 'awesome';`} />
