<script lang="ts">
	import { enhance } from '$app/forms'
	import { ConicGradient } from '@skeletonlabs/skeleton'
	import type { ConicStop } from '@skeletonlabs/skeleton'
	import type { ContactResponse } from '$lib/types/index'

	$: sending = '' as string
	$: loading = false
	$: response = {
		success: true,
		errors: {
			name: '',
			subject: '',
			email: '',
			message: ''
		}
	} as ContactResponse

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-tertiary-500))', start: 75, end: 100 }
	]

	const enhanceContact = ({ formElement, formData, action, cancel, submitter }: any) => {
		return async ({ result, update }: any) => {
			// sending = 'sent'
			// Morphing Response to server's result/form-response
			if (result.data.success) {
				sending = 'sent'
				formElement.reset()
			} else {
				sending = ''
				loading = false
			}

			response = {
				success: result.data.success,
				errors: { ...response.errors, ...result.data.errors }
			}
			console.log(response)
		}
	}
</script>

<div class="mx-auto w-full max-w-2xl space-y-8">
	<h2 class="h2 flex gap-2">
		<span class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-current" viewBox="0 0 640 512">
				<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<defs>
					<style>
						.fa-secondary {
							opacity: 0.4;
						}
					</style>
				</defs>
				<path
					class="fa-primary"
					d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64V256c0 35.3-28.7 64-64 64H202.7l-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V320H64c-35.3 0-64-28.7-64-64V64z"
				/>
				<path
					class="fa-secondary"
					d="M256 352v32c0 35.3 28.7 64 64 64H437.3l81.1 60.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3V448h32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H448V256c0 53-43 96-96 96H256z"
				/>
			</svg>
		</span>
		Connect with me!
	</h2>

	<div class="logo-cloud grid-cols-1 gap-1 lg:!grid-cols-3">
		<a class="logo-item" href="https://linkedin.com/in/dylan-smith-358515196" target="_blank">
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-current" viewBox="0 0 448 512">
					<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
					/>
				</svg>
			</span>
			<span>LinkedIn</span>
		</a>
		<a class="logo-item" href="https://github.com/ayodyln" target="_blank">
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-current" viewBox="0 0 496 512">
					<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/>
				</svg>
			</span>
			<span>GitHub</span>
		</a>
		<a class="logo-item" href="https://discordapp.com/users/360592378601406465" target="_blank">
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-current" viewBox="0 0 640 512">
					<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
					/>
				</svg>
			</span>
			<span>Discord</span>
		</a>
	</div>

	<section class="card h-[500px] p-4">
		{#if !sending}
			<form action="/about?/contact" method="POST" use:enhance={enhanceContact}>
				<div id="inputs" class="my-4 space-y-4">
					<label class="label">
						<input
							class="input {response.errors.email && 'input-error'}"
							name="email"
							type="email"
							placeholder="Email"
						/>
					</label>
					<label class="label">
						<input
							class="input {response.errors.name && 'input-error'}"
							type="text"
							name="name"
							placeholder="Full Name"
						/>
					</label>
					<label class="label">
						<input
							class="input {response.errors.subject && 'input-error'}"
							type="text"
							name="subject"
							placeholder="Subject"
						/>
					</label>

					<label class="label">
						<textarea
							class="textarea {response.errors.message && 'input-error'} resize-none"
							rows="8"
							name="message"
							placeholder="Your Message..."
						/>
					</label>
				</div>

				<div class="flex justify-end">
					<button
						class="btn variant-ghost h-11 w-56 gap-2 text-xl"
						type="submit"
						on:click={() => {
							loading = !loading
						}}
					>
						{#if !loading}
							Send
						{:else}
							<ConicGradient stops={conicStops} spin width="w-6" />
						{/if}
					</button>
				</div>
			</form>
		{:else if sending === 'sent'}
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-32 fill-success-500"
						viewBox="0 0 512 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs
							><style>
								.fa-secondary {
									opacity: 0.4;
								}
							</style></defs
						><path
							class="fa-primary"
							d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z"
						/><path
							class="fa-secondary"
							d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
						/></svg
					>
				</span>
				<h2 class="h2">Message Sent!</h2>
			</div>
		{/if}
	</section>
</div>
