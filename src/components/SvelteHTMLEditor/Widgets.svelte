<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton'
	interface PopupSettingsMap {
		[key: string]: PopupSettings
	}
	export let popups: PopupSettingsMap
</script>

<!-- Insert Image -->
<button use:popup={popups.insertImage} class="btn rounded-lg variant-ghost-surface fill-current">
	<span class="icon">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 512 512">
			<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
			<path
				d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
			/>
		</svg>
	</span>
</button>

<!-- Insert Hero Image Component -->
<button use:popup={popups.insertHero} class="btn rounded-lg variant-ghost-surface fill-current">
	<span class="icon">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 576 512">
			<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
			<path
				d="M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm328 64c-8 0-15.5 4-20 10.7l-56 84L234.7 265c-4.6-5.7-11.4-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H424c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144C343.5 196 336 192 328 192zM160 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
			/>
		</svg>
	</span>
</button>

<!-- Code Snippet -->
<button use:popup={popups.insertHero} class="btn rounded-lg variant-ghost-surface fill-current">
	<span class="icon">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 640 512">
			<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
			<path
				d="M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"
			/>
		</svg>
	</span>
</button>
