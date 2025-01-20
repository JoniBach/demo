<script lang="ts">
	import Page from '$lib/components2/Page.svelte';
	import Icon from '@iconify/svelte';
	const projects = [
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
			id: 'consist',
			title: 'consist',
			demo: '/consist',
			description: 'An npm library for organising conditional logic',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/consist' },
				{ name: 'github', link: 'https://github.com/JoniBach/consist' }
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
		}
	];
</script>

<Page title="jonibach" description="creative tech type">
	{#each projects as group}
		<div class="content-card" on:click={() => (window.location.href = group.demo)}>
			<div>
				<h1 class="title">
					{group.title}

					<div class="icons">
						{#if group.icons}
							{#each group.icons as icon}
								<a href={icon.link} target="_blank">
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
