<script lang="ts">
	import Page from '$lib/components2/Page.svelte';
	import Icon from '@iconify/svelte';
	const projects = [
		{
			id: 'svector',
			title: 'svector',
			demo: '/svector',
			description:
				'An npm library for creating 3d face meshes from 2d images powered by tensorflow and three',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/svector' },
				{ name: 'github', link: 'https://github.com/JoniBach/svector' }
			]
		},
		{
			id: 'vectori',
			title: 'vectori',
			demo: '/vectori',
			description: 'An npm library for converting images to true svgs',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/vectori' },
				{ name: 'github', link: 'https://github.com/JoniBach/vectori' }
			]
		},
		{
			id: 'facely',
			title: 'facely',
			demo: '/facely',
			description: 'An npm library for creating 3d face meshes from 2d images',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/facely' },
				{ name: 'github', link: 'https://github.com/JoniBach/facely' }
			]
		},
		{
			id: 'svelte-components',
			title: 'konui',
			demo: 'https://svelte-components-tawny.vercel.app/',
			description: 'A collection of reusable Svelte components',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/konui-svelte' },
				{ name: 'github', link: 'https://github.com/JoniBach/svelte-components/tree/main' }
			]
		},
		{
			id: 'consist',
			title: 'consist',
			demo: '/consist',
			description: 'An npm library for organising conditional logic',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/consist' },
				{ name: 'github', link: 'https://github.com/JoniBach/consist' }
			]
		}
	];
</script>

<Page title="jonibach" description="creative tech type">
	{#each projects as group}
		<div class="content-card" on:click|stopPropagation={() => (window.location.href = group.demo)}>
			<div>
				<h1 class="title">
					{group.title}

					<div class="icons">
						{#if group.icons}
							{#each group.icons as icon}
								<a on:click|stopPropagation href={icon.link} target="_blank">
									<Icon icon="mdi:{icon.name}" />
								</a>
							{/each}
						{/if}
					</div>
				</h1>
			</div>
			<p class="description">{group.description}</p>
		</div>
	{/each}
</Page>

<style>
	.content-card {
		background: #222;
		padding: 1px 20px;
		border-radius: 5px;
		margin-bottom: 1rem;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.icons {
		display: flex;
		gap: 5px;
	}
</style>
