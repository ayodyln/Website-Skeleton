<script lang="ts">
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

