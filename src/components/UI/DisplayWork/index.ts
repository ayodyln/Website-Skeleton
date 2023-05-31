function techChip(tech: string) {
	switch (tech) {
		case 'NextJS':
			return 'variant-filled-tertiary'
		case 'AWS Amplify':
			return 'variant-filled-warning'
		case 'SvelteKit':
			return 'bg-orange-600 text-black'
		case 'TailWindCSS':
			return 'bg-sky-400 text-black'
		default:
			return 'variant-filled'
	}
}

export { techChip }
