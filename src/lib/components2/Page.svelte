<script lang="ts">
	export let title = '';
	export let description = '';
	export let icons = null;
	import Icon from '@iconify/svelte';
</script>

<div class="container">
	<div class="headder">
		<div class="headder-content">
			<h1 class="title">{title}</h1>
			<p class="description">{description}</p>
			<div class="icons">
				{#if icons}
					{#each icons as icon}
						<a href={icon.link} target="_blank">
							<Icon icon="mdi:{icon.name}" />
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="content">
		<slot />
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
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.headder-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #222;
		position: sticky;
		top: 0;
		text-align: center;
	}

	.headder-content h1 {
		font-size: 4rem;
		margin: 0;
	}
	.headder-content p {
		font-size: 1.5rem;
		margin: 1rem 0rem;
	}

	.content {
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
		color: white;
	}
	.icons {
		display: flex;
		gap: 5px;
		font-size: 2rem;
		margin: 0;
	}
</style>
