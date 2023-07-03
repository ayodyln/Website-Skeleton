<script lang="ts">
	import type { Post } from '$lib/types/'
	export let post: Post
</script>

<a
	href="/blog/{post.title.replace(/\s+/g, '-').toLowerCase()}"
	style="background-image: url({post.feature_image});"
	class="card card-hover block h-96 w-1/3 overflow-hidden bg-cover bg-center bg-no-repeat shadow-lg"
>
	<div
		class="flex h-full w-full flex-col justify-end bg-gradient-to-t from-surface-900 p-4 text-surface-50"
	>
		<h3 class="h3">{post.title}</h3>
		<span class="font-mono">
			{new Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}).format(new Date(post.date))}
		</span>
	</div>
</a>
