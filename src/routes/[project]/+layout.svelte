<script>
	import Sidebar from '$lib/components/page/Sidebar.svelte';
	import { page } from '$app/stores';
	import Headder from '$lib/components/page/Headder.svelte';
	import projects from '$lib/config/projects';

	$: project = $page.params.project;

	$: data = projects?.filter((p) => p.id === project)[0]?.items;
</script>

<div class="container">
	{#if data}
		<Sidebar {data} />
	{/if}
	<div class="content">
		<Headder title={project} level={1} />
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
	.content {
		flex: 1;
		overflow-y: scroll;
	}
</style>
