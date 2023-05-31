<script lang="ts">
	export let title: string, content: string

	$: toggle = false
</script>

<div class="collapse transition-colors ease-in {toggle ? 'bg-info text-info-content' : 'bg-base-300 text-base-content'} rounded-lg">
	<input type="checkbox" bind:checked={toggle} />
	<div class="collapse-title text-xl font-medium flex justify-between items-center w-full p-4">
		<div class="font-bold text-xl font-mono">
			{@html title}
		</div>

		<label class="swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" bind:checked={toggle} />

			<svg class="swap-on fill-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<!-- ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
				/>
			</svg>

			<svg class="swap-off fill-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
				><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
				/>
			</svg>
		</label>
	</div>
	<div class="collapse-content">
		{@html content}
	</div>
</div>
