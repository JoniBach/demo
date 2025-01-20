<script>
	import Page from '$lib/components2/Page.svelte';

	const data = {
		id: 'consist',
		title: 'consist',
		demo: '/consist',
		description: 'An npm library for organising conditional logic',
		icons: [
			{ name: 'npm', link: 'https://www.npmjs.com/package/consist' },
			{ name: 'github', link: 'https://github.com/JoniBach/consist' }
		]
	};
</script>

<Page title={data.title} description={data.description} icons={data.icons}
	>Details comming soon</Page
>
