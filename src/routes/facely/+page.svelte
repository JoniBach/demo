<script>
	import Page from '$lib/components2/Page.svelte';

	const data = {
		id: 'facely',
		title: 'facely',
		demo: '/facely',
		description: 'An npm library for creating 3d face meshes from 2d images',
		icons: [
			{ name: 'npm', link: 'https://www.npmjs.com/package/facely' },
			{ name: 'github', link: 'https://github.com/JoniBach/facely' }
		]
	};
</script>

<Page title={data.title} description={data.description} icons={data.icons}>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
</Page>
