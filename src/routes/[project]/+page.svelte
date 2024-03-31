<script lang="ts">
	import Content from './../../lib/components/page/Content.svelte';
	import { page } from '$app/stores';
	import Headder from '$lib/components/page/Headder.svelte';
	import projects from '$lib/config/projects';

	$: project = $page.params.project;

	$: data = projects?.filter((p) => p.id === project)[0]?.items;
</script>

{#if data}
	{#each data as group}
		<Headder title={group.title} level={2} />
		{#if group.items}
			{#each group.items as { title }}
				<Headder {title} level={3} />
				<Content>test</Content>
			{/each}
		{/if}
	{/each}
{/if}
