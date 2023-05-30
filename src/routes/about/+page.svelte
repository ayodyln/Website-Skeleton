<!-- <script lang="ts">
	import AboutHero from '../../components/pages/about/AboutHero.svelte'
	import TechnologyCollapse from '../../components/pages/about/TechnologyCollapse.svelte'
	import ContactForm from '../../components/pages/about/ContactForm.svelte'

	const tech: { title: string; content: string }[] = [
		{
			title: `JavaScript`,
			content: `JavaScript is my primary language. I've been using it for years and I'm always learning new things about it.`
		},
		{
			title: `
				NextJS
			`,
			content: `For over a year now, I've been studying and building applications with NextJS. My current job is building a 
					a applications that involve this framework. I've also built a few personal projects with it.
				`
		},
		{
			title: `SvelteKit`,
			content: `Before this framework was released, I have been building applications for fun with it. The natural feeling from developing with this framework is amazing and has the ability to create fast and powerful web applications.`
		},
		{
			title: `AWS Services`,
			content: `Using AWS Amplify and it's related services has enabled me as a developer to build applications with ease.
			I have experience with other servies and comfortable to use anything because AWS has helped me grow as a developer.`
		}
	]
</script>

<section class="max-w-5xl w-full m-auto my-8 gap-6">
	<AboutHero />

	<div class="max-w-2xl m-auto min-h-[500px] my-8 space-y-4">
		<p class="text-2xl tracking-wider font-bold">
			Hello, I'm Dylan. I'm passionate about my craft, always dedicating myself to improving my skills, and love to
			bring apps to life for others to use.
		</p>

		<div class="tracking-wider text-lg flex flex-col gap-4">
			<p>
				Growing up, I've always had technology at my fingertips and it has influenced my life. While completing my
				general education classes at <a
					href="https://www.uvu.edu/"
					target="_blank"
					class="font-bold link hover:text-info">Utah Valley University</a
				>, I was trying to pick a major that felt right to me. Eventually, I found myself in some basic-level web
				development and computer science classes, which flipped a switch in my mind and had me instantly hooked.
			</p>

			<p>
				Today, I'm close to graduating with a Bachelor's degree in <span class="italic text-info">
					Web Design and App Development
				</span> and gearing up to join the industry. Most of my time has been dedicated to studying and improving my skills,
				to be better prepared for my career. Currently, I'm working as a lab assistant where I help students with their needs
				and I'm also developing a scalable inventory app for my college.
			</p>

			<section id="tech" class="space-y-4 mt-4">
				<h2 class="opacity-60 text-xl font-mono capitalize">The technology I work with:</h2>

				<div class="space-y-3">
					{#each tech as tech}
						<TechnologyCollapse {...tech} />
					{/each}
				</div>
			</section>
		</div>
	</div>

	<ContactForm />
</section> -->
