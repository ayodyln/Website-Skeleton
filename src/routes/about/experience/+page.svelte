<script lang="ts">
	import { ConicGradient, Accordion, AccordionItem } from '@skeletonlabs/skeleton'
	import type { ConicStop } from '@skeletonlabs/skeleton'
	//
	const conicStops: ConicStop[] = [
		{ label: 'Primary', color: 'rgb(var(--color-tertiary-500))', start: 0, end: 95.75 },
		{ label: 'Secondary', color: 'rgb(var(--color-tertiary-300))', start: 95.75, end: 100 }
	]
</script>

<div class="mx-auto w-full max-w-2xl space-y-20">
	<!-- Resume Work -->
	<div>
		<h2 class="h2 mb-8 font-mono">Where I have worked</h2>

		<div id="experience_component" class="card p-4">
			<hgroup class="flex items-start justify-between">
				<div class="flex flex-col gap-1.5">
					<h3 class="h3 leading-6">Lab Aid - Student Employee</h3>
					<a
						href="https://www.uvu.edu/digitalmedia/"
						target="_blank"
						class="font-semibold italic text-tertiary-500 underline-offset-4 hover:text-tertiary-700 hover:underline"
					>
						@ Utah Valley University - Digital Media Department
					</a>
				</div>

				<div>
					<span class="">
						{new Intl.DateTimeFormat('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						}).format(new Date('11-12-2021'))} - Current
					</span>
				</div>
			</hgroup>

			<div class="my-4 h-[2px] w-full rounded-lg bg-current opacity-20" />

			<section class="space-y-4">
				<p>
					The Advanced Digital Media Sandbox lab, is meant to be a place where students in the
					Digital Media program can study and use the lab equipment. It's using the latest equipment
					and software to help students learn and grow in their fields of study. Providing services
					to students and faculty that are in the development and design program tracks.
				</p>

				<ul class="mx-4 space-y-8">
					<li class="space-y-2">
						<h4 class="h4">Quality of Lab</h4>
						<p>
							Ensure the upkeep and quality of the lab I was responsible for. Updating all lab
							equipment and providing any IT services for my lab. Also providing help to students at
							my college with their questions about coding and lab equipment.
						</p>
					</li>
					<li class="space-y-2">
						<h4 class="h4">Equipment Mangament</h4>
						<p>
							Managed department equipment and inventory. Helping students borrow equipment for
							their projects and classes. Then returned the equipment and made sure it was in
							working order.
						</p>
					</li>
					<li class="space-y-2">
						<h4 class="h4">Developed Software</h4>
						<p>
							Developed applications that benefited the lab and department. Using the latest
							Javascript technologies and frameworks, I developed an inventory manager system for
							the department. Which enables the department to track its assets and automate
							processes.
						</p>
					</li>
				</ul>
			</section>
		</div>
	</div>

	<!-- Education -->
	<div>
		<h2 class="h2 mb-8 font-mono">Education</h2>

		<div id="education_component" class="card p-4">
			<!-- Card Header -->
			<hgroup class="flex h-14 items-start justify-between">
				<div class="flex h-full flex-col gap-1.5">
					<h3 class="h3 leading-6">Web Design and Development - BS</h3>
					<span class="font-semibold text-tertiary-500">
						Concentration - Web and App Development
					</span>
				</div>

				<div class="flex h-full flex-col items-end gap-1.5">
					<p class="flex items-center gap-2">
						<span class="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 fill-current"
								viewBox="0 0 640 512"
							>
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
									d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l77.4 27.9c16.8-17.8 37.8-31.9 61.7-40.9l159.4-59.8c8.3-3.1 17.5 1.1 20.6 9.4s-1.1 17.5-9.4 20.6L166.2 199.6c-14.6 5.5-27.8 13.4-39.3 23.1l169.5 61.2c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
								/>
								<path
									class="fa-secondary"
									d="M325.6 139.8c8.3-3.1 12.5-12.3 9.4-20.6s-12.3-12.5-20.6-9.4L154.9 169.6C92.4 193.1 50.4 251.8 48.1 318.2c-.1 .6-.1 1.2-.1 1.8c0 28.4-10.8 57.8-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14-7.5-28.3-13.4-41.5c2.8-52.5 36.4-98.7 86-117.3l159.4-59.8z"
								/>
							</svg>
						</span>

						Est.

						{Intl.DateTimeFormat('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						}).format(new Date('12-16-2023'))}
					</p>

					<span>GPA: 3.83</span>
				</div>
			</hgroup>

			<div class="my-4 h-[2px] w-full rounded-lg bg-current opacity-20" />

			<!-- Card Body -->
			<section class="space-y-4">
				<p>
					Studying Web Design and Application Development has given me the skills to create modern
					UI/UX designs and applications. Being able to create mobile applications to web
					applications and designing to content creation. My skills are very diverse and I'm always
					furthering my education.
				</p>

				<div class="card variant-glass-tertiary flex items-center justify-between p-4">
					<span class="flex items-end gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 fill-current" viewBox="0 0 640 512">
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
								d="M144 112C144 50.1 194.1 0 256 0h16c8.8 0 16 7.2 16 16V32c0 60.2-47.5 109.3-107 111.9c-23.9 32.2-37 71.5-37 112.1c0 97.2 78.8 176 176 176h11.6c43.5 0 86.3 10.1 125.2 29.6l9.9 5c11.9 5.9 16.7 20.3 10.7 32.2s-20.3 16.7-32.2 10.7l-9.9-5C403.1 488.4 367.6 480 331.6 480H320c-47.5 0-91.5-14.8-127.7-39.9c-59.6 28.2-131.9 6.3-165.4-51.8l-8-13.9c-4.4-7.7-1.8-17.4 5.9-21.9c13.8-8 28.4-13.1 43.3-15.5C27.5 315.6 0 273 0 224V208c0-8.8 7.2-16 16-16c15.9 0 31.1 2.9 45.2 8.2c-24.3-38.8-26.8-89.5-2.3-131.9l8-13.9c4.4-7.7 14.2-10.3 21.9-5.9C115 63.7 133.8 86.8 144 113v-1z"
							/>
							<path
								class="fa-secondary"
								d="M384 0c61.9 0 112 50.1 112 112v1c10.2-26.2 29-49.2 55.3-64.4c7.7-4.4 17.4-1.8 21.9 5.9l8 13.9c24.5 42.4 21.9 93.1-2.3 131.9c14.1-5.3 29.3-8.2 45.2-8.2c8.8 0 16 7.2 16 16v16c0 49-27.5 91.6-68 113.1c14.8 2.4 29.5 7.5 43.2 15.5c7.7 4.4 10.3 14.2 5.9 21.9l-8 13.9c-33.6 58.1-105.8 80-165.4 51.8c-5.3 3.7-10.7 7.1-16.3 10.3c-31.8-12.1-65.6-18.4-99.8-18.4H320c97.2 0 176-78.8 176-176c0-40.6-13.1-79.9-37-112.1C399.5 141.3 352 92.2 352 32V16c0-8.8 7.2-16 16-16h16zM208.6 450.4C241.4 469.2 279.5 480 320 480H308.4c-36 0-71.5 8.4-103.8 24.5l-9.9 5c-11.9 5.9-26.3 1.1-32.2-10.7s-1.1-26.3 10.7-32.2l9.9-5c8.3-4.2 16.8-7.9 25.4-11.2z"
							/>
						</svg>

						<h4 class="h4">Student Excellence Award</h4>
					</span>

					<span>2022 - 2023</span>
				</div>
			</section>
		</div>
	</div>
</div>
