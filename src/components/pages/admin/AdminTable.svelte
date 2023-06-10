<script lang="ts">
	import { goto } from '$app/navigation'
	import type { Article } from '$lib/types'
	import { Paginator } from '@skeletonlabs/skeleton'
	export let sourceData: Article[],
		page: {
			offset: number
			limit: number
			size: number
			amounts: number[]
		},
		checkedItems: unknown[]

	const pathStrHandler = (str: string) => str.split('/').filter((s) => s !== '' && s !== 'blog')

	const checkAll = () => {}

	$: paginatedSource = sourceData.slice(
		page.offset * page.limit, // start
		page.offset * page.limit + page.limit // end
	)
</script>

{#if sourceData.length > 0}
	<div class="table-container h-full">
		<table class="table table-hover shadow-lg">
			<thead>
				<tr>
					<th class="w-12">
						<input
							id="checkAll"
							on:click|stopPropagation={checkAll}
							class="checkbox"
							type="checkbox"
						/>
					</th>
					<th>ID</th>
					<th>Title</th>
					<th>Tags</th>
					<th>Published</th>
				</tr>
			</thead>
			<tbody>
				{#each paginatedSource as row, i}
					<tr
						class="cursor-pointer"
						id={row.id.toString()}
						on:click={async () => await goto(`/auth/admin/documents/${pathStrHandler(row.url)}`)}
					>
						<td class="w-12 flex items-center justify-center">
							<input
								id="documentCheck"
								on:click|stopPropagation={(event) => {
									if (event.currentTarget.checked) {
										checkedItems.push(row.id)
									} else {
										checkedItems = checkedItems.filter((item) => item !== row.id)
									}
									console.log(checkedItems)
								}}
								class="checkbox"
								type="checkbox"
							/>
						</td>
						<td>{row.id}</td>
						<td>{row.title}</td>
						<td class="space-x-1">
							{#each row.tags as tag}
								<span class="card p-2 variant-glass">{tag}</span>
							{/each}
						</td>
						<td>{row.inserted_at}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="mt-4">
			<Paginator bind:settings={page} showFirstLastButtons={false} showPreviousNextButtons={true} />
		</div>
	</div>
{/if}
