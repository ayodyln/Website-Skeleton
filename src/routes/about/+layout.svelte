<script lang="ts">

</script>

<div id="aboutWrapper" class="max-w-5xl m-auto my-8">
	<div class="card variant-glass-surface p-4 relative h-96 overflow-hidden">
		<section class="space-y-4">
			<h1 class="text-9xl">
				<span
					class="bg-gradient-to-br variant-gradient-tertiary-secondary bg-clip-text text-transparent box-decoration-clone font-bold"
				>
					Dylan Smith
				</span>
			</h1>

			<p class="font-mono font-bold text-3xl opacity-80">Web and App Developer // UX Designer</p>
		</section>

		<figure class="absolute bottom-0 right-0 z-10">
			<img
				src="/PortfolioPortrait.png"
				alt="Portoflio Portrait"
				class="h-96 w-auto drop-shadow-xl"
			/>
		</figure>
	</div>

	<slot />
</div>
