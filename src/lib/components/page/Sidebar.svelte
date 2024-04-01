<script lang="ts">
	import { navigateToElement } from '$lib/utils/scroll';
	import Headder from './Headder.svelte';

	export let data: any[] = [];
</script>

<div class="sidebar">
	{#each data as item}
		<div>
			<Headder title={item.title} />
			<p>
				{#if item.items}
					{#each item.items as subitem}
						<p on:click={navigateToElement(subitem.title)} class="subtitle">
							{subitem.title}
						</p>
					{/each}
				{/if}
			</p>
		</div>
	{/each}
</div>

<style>
	.sidebar {
		width: 200px;
		background-color: #eee;
		height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
		scrollbar-width: thin;
	}
	/* .title {
		font-weight: bold;
		background-color: #ddd;
		margin-bottom: 10px;
		margin-top: 0;
		padding: 10px;
		&:hover {
			background-color: #ccc;
		}
		cursor: pointer;
	} */

	.subtitle {
		margin: 0;
		padding: 10px;
		&:hover {
			background-color: #ddd;
		}
		cursor: pointer;
	}
</style>
