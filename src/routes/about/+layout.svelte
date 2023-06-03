<div id="aboutWrapper" class="max-w-5xl m-auto my-8 space-y-4">
	<div class="variant-glass card overflow-hidden">
		<div
			class="h-96 w-full overflow-hidden p-4 flex flex-col justify-between"
			style="background: url(/PortfolioPortrait.png) no-repeat right bottom; background-size: 24em;"
		>
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

			<section>
				<a
					href="/resume.pdf"
					download
					class="btn variant-glass-surface flex gap-2 w-fit fill-current"
				>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
							<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<path
								d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
							/>
						</svg>
					</span>
					Resume
				</a>
			</section>
		</div>
	</div>

	<slot />
</div>
