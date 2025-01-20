<script lang="ts">
	import Icon from '@iconify/svelte';
	const projects = [
		{
			id: 'vectori',
			title: 'vectori',
			description: 'An npm library for converting images to true svgs',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/vectori' },
				{ name: 'github', link: 'https://github.com/JoniBach/vectori' }
			]
		},
		{
			id: 'consist',
			title: 'consist',
			description: 'An npm library for organising conditional logic',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/consist' },
				{ name: 'github', link: 'https://github.com/JoniBach/consist' }
			]
		},
		{
			id: 'facely',
			title: 'facely',
			description: 'An npm library for creating 3d face meshes from 2d images',
			icons: [
				{ name: 'npm', link: 'https://www.npmjs.com/package/facely' },
				{ name: 'github', link: 'https://github.com/JoniBach/facely' }
			]
		}
	];
</script>

<div class="container">
	<div class="headder">
		<div class="headder-content">
			<h1 class="title">jonibach</h1>
			<p class="description">creative tech type</p>
		</div>
	</div>
	<div class="content">
		{#each projects as group}
			<div class="content-card">
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
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: scroll;
		background: #333;
	}
	.headder {
		padding: 1rem;
		background: #222;
		min-height: 50%;
	}

	.headder-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: sticky;
		top: 25%;
		transform: translate(0, -50%);
		z-index: 1;
		background: #222;
	}

	.headder-content h1 {
		font-size: 4rem;
		margin: 0;
	}
	.headder-content p {
		font-size: 2rem;
		margin: 0;
	}

	.content {
		flex: 1;
		overflow-y: scroll;
		padding: 1rem;
	}

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
