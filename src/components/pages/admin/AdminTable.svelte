<script lang="ts">
	import { goto } from '$app/navigation'
	import type { Article } from '$lib/types/'
	import { Paginator } from '@skeletonlabs/skeleton'
	export let sourceData: Article[], checkAll: any, singleCheck: any, page: any

	$: paginatedSource = sourceData.slice(
		page.offset * page.limit, // start
		page.offset * page.limit + page.limit // end
	)

	const pathStrHandler = (str: string) => str.split('/').filter((s) => s !== '' && s !== 'blog')
</script>

{#if sourceData.length > 0}
	<div class="h-auto overflow-auto">
		<table class="table table-auto table-hover shadow-lg">
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
			<tbody class="">
				{#each paginatedSource as row, i}
					<tr
						class="cursor-pointer"
						id={row.id.toString()}
						on:click={async () => await goto(`/auth/admin/documents/${pathStrHandler(row.url)}`)}
					>
						<td class="w-12 flex items-center justify-center">
							<input
								data-id={row.id}
								id="documentCheck"
								on:click|stopPropagation={singleCheck}
								class="checkbox"
								type="checkbox"
							/>
						</td>
						<td>
							{row.id}
						</td>
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
	</div>

	<div class="mt-4">
		<Paginator bind:settings={page} showFirstLastButtons={false} showPreviousNextButtons={true} />
	</div>
{:else}
	<div class="flex flex-col items-center justify-center h-full card">
		<h1 class="text-2xl font-bold">No documents found</h1>
		<p class="text-gray-500">Create a new document to get started</p>
	</div>
{/if}
