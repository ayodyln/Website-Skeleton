<script lang="ts">
	import { goto } from '$app/navigation'
	import { Avatar } from '@skeletonlabs/skeleton'
	import { format } from 'date-fns'
	import { onMount } from 'svelte'

	export let mostRecent: any[]

	onMount(() => {
		console.log(mostRecent)
	})
</script>

<ul class="flex w-full gap-4">
	{#each mostRecent as recent, i}
		<li
			class="w-1/3 h-96 rounded-lg overflow-hidden card card-hover bg-gradient-to-br variant-gradient-secondary-primary"
		>
			<a
				href={recent.path}
				style="background: url({recent.hero_image}) center no-repeat;"
				class="h-full w-full block flex items-end rounded-b-xl"
			>
				<div
					class="bg-gradient-to-t from-slate-950 w-full h-2/3 flex flex-col justify-end relative"
				>
					<section class="p-4 space-y-2">
						<h3 class="text-md">
							{recent.title}
						</h3>

						<div class="flex justify-between items-end">
							<span class="flex items-end gap-3 text-md">
								<Avatar initials="DS" background="bg-primary-500" width="w-8" />
								Dylan Smith
							</span>

							<p>{format(new Date(recent.publish_date), 'MMM do, yyyy')}</p>
						</div>
					</section>
				</div>
			</a>
		</li>
	{/each}
</ul>
