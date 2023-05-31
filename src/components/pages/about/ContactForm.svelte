<script lang="ts">
	import { enhance } from '$app/forms'

	let email: any,
		subject: any,
		message: any,
		loading = false

	const contactForm = () => {
		loading = !loading
		return async ({ result, update }: any) => {
			// `result` is an `ActionResult` object
			email = ''
			subject = ''
			message = ''
			loading = !loading
		}
	}
</script>

<form
	class="bg-neutral p-4 max-w-lg m-auto rounded-xl flex flex-col gap-4 shadow-xl mt-20"
	action="?/contact"
	method="POST"
	use:enhance={contactForm}
>
	<h3 class="text-4xl text-neutral-content font-bold font-mono flex gap-4 items-center">
		Contact Me <span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current w-10">
				<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
				/>
			</svg>
		</span>
	</h3>

	<label class="form-control">
		<input
			bind:value={email}
			type="email"
			name="email"
			id="email"
			placeholder="Email"
			class="input input-bordered w-full"
		/>
	</label>

	<label class="form-control">
		<input
			bind:value={subject}
			type="test"
			name="subject"
			id="subject"
			placeholder="Subject"
			class="input input-bordered w-full"
		/>
	</label>

	<label class="form-control">
		<textarea
			bind:value={message}
			name="message"
			id="message"
			placeholder="Your Message..."
			class="input input-bordered h-32 resize-none p-2"
		/>
	</label>

	<button class="btn btn-info hover:bg-[#31A7DA] w-full" type="submit">
		{#if loading}
			<svg
				class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>

			<span>Loading...</span>
		{:else}
			Send
		{/if}
	</button>
</form>
