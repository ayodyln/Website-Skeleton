function techChip(tech: string) {
	switch (tech) {
		case 'NextJS':
			return 'variant-filled-tertiary'
		case 'AWS Amplify':
			return 'variant-filled-warning'
		case 'SvelteKit':
			return 'bg-orange-600 text-black'
		case 'TailwindCSS':
			return 'variant-filled-secondary'
		default:
			return 'variant-filled'
	}
}

export { techChip }
