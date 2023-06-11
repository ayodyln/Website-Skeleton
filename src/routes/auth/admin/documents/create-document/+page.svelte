<script lang="ts">
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'

	let value: string
	$: console.log(value)
</script>

<section class="h-[calc(100vh-8.5rem)] flex">
	<SvelteHtmlEditor bind:value container="w-full border" body="w-full h-96" />
	<main class="border w-full">
		{@html value}
	</main>
</section>
