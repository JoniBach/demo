<script lang="ts">
	export let title: string = '';
	export let level: number = 1;
</script>

{#if level === 1}
	<h1 class="title-1">{title}</h1>
{:else if level === 2}
	<h2 class="title-2">{title}</h2>
{:else if level === 3}
	<h3 class="title-3">{title}</h3>
{:else}
	<h4>{title}</h4>
{/if}

<style>
	.title-1 {
		background-color: #ccc;
		padding: 10px;
		margin: 0;
		position: sticky;
		top: 0;
		font-size: large;
		height: 20px;
	}
	.title-2 {
		background-color: #ddd;
		padding: 10px;
		margin: 0;
		position: sticky;
		top: 40px;
		font-size: large;
		height: 20px;
	}
	.title-3 {
		background-color: #eee;
		padding: 10px;
		margin: 0;
		position: sticky;
		top: 80px;
		font-size: large;
		height: 20px;
	}
</style>
