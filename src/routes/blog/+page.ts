import type { Post } from '$lib/types'

export const load = async ({ fetch }) => {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	return {
		posts
	}
}

// <div class="mt-8">
// 	<MostRecentPost {mostRecent} />
// </div>

// <section class="m-auto my-10 h-full w-full max-w-5xl space-y-4">
// 	<div id="filter" class="flex flex-wrap items-center gap-4">
// 		{#each filterTags as tag}
// 			<button
// 				class:variant-filled={activeTag === tag ? true : false}
// 				class:variant-ghost={activeTag === tag ? false : true}
// 				class="chip"
// 				on:click={() => filterHandler(tag)}
// 			>
// 				<span class="w-4 fill-current">
// 					{#if tag === 'Development'}
// 						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
// 							<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
// 							<path
// 								d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
// 							/>
// 						</svg>
// 					{:else if tag === 'Testing'}
// 						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
// 							//<!-- ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
// 							<path
// 								d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
// 							/>
// 						</svg>
// 					{/if}
// 				</span>
// 				<span>{tag}</span>
// 			</button>
// 		{/each}
// 	</div>

// 	<div id="posts" class="flex w-full flex-wrap gap-4">
// 		{#if library.length > 0}
// 			{#if !activeTag}
// 				{#each library as post}
// 					{#if post.id !== mostRecent.id}
// 						<LatestPosts mostRecent={library} />
// 					{/if}
// 				{/each}
// 			{:else}
// 				{#each libraryFilter as post}
// 					{#if post.id !== mostRecent.id}
// 						<LatestPosts mostRecent={libraryFilter} />
// 					{/if}
// 				{/each}
// 			{/if}
// 		{:else}
// 			<ul class="flex w-full gap-4">
// 				{#each Array(3) as recent, i}
// 					<li class="placeholder h-96 w-1/3 animate-pulse rounded-lg" />
// 				{/each}
// 			</ul>
// 		{/if}
// 	</div>
// </section>
