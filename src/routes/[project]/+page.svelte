<script lang="ts">
	import Content from './../../lib/components/page/Content.svelte';
	import { page } from '$app/stores';
	import Headder from '$lib/components/page/Headder.svelte';
	import projects from '$lib/config/projects';
	import { objectToJsonString, extractFunctionInfo } from '@jonibach/convert';
	import ToolInfo from '$lib/components/ToolInfo.svelte';

	$: project = $page.params.project;

	$: data = projects?.filter((p) => p.id === project)[0];
	$: items = data?.items;
</script>

{#if items}
	{#each items as group}
		<Headder title={group.title} level={2} />
		{#if group.items}
			{#each group.items as item}
				<Headder title={item.title} level={3} />
				<Content>
					<ToolInfo {data} {item} />
				</Content>
			{/each}
		{/if}
	{/each}
{/if}
