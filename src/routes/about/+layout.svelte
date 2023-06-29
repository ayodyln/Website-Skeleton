<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
</script>

<section class="space-y-8">
	<!-- About Page Hero -->
	<section id="about_hero" class="h-[25rem]">
		<div class="m-auto flex h-full w-full max-w-6xl p-4">
			<section class="w-2/3 space-y-4">
				<h1 class="text-9xl">
					<span
						class="variant-gradient-tertiary-secondary bg-gradient-to-br box-decoration-clone bg-clip-text font-bold text-transparent"
					>
						Dylan Smith
					</span>
				</h1>
			</section>

			<div class="card h-fit w-1/3 overflow-hidden bg-surface-700">
				<img class="w-full" src="PortfolioPortrait.webp" alt="Portfolio Portrait" />
			</div>
		</div>
	</section>

	<!-- About Route Page Navigator -->
	<section class="mx-auto w-full max-w-5xl">
		<TabGroup>
			<TabAnchor selected={$page.url.pathname === '/about'} href="/about">My Story</TabAnchor>
			<TabAnchor selected={$page.url.pathname === '/about/work'} href="/about/work">Work</TabAnchor>
			<TabAnchor selected={$page.url.pathname === '/about/connect'} href="/about/connect">
				Connect
			</TabAnchor>
		</TabGroup>
	</section>

	<!-- Page Content -->
	<slot />
</section>
