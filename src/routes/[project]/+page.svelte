<script lang="ts">
	import Content from './../../lib/components/page/Content.svelte';
	import { page } from '$app/stores';
	import Headder from '$lib/components/page/Headder.svelte';
	import projects from '$lib/config/projects';
	import ToolInfo from '$lib/components/ToolInfo.svelte';
	import ConvertDemo from '$lib/components/demo/ConvertDemo.svelte';
	import CheckDemo from '$lib/components/demo/CheckDemo.svelte';

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
				<Content id={item.title}>
					<ToolInfo {data} {item} />
					{#if item?.demo === 'convert'}
						<ConvertDemo {item} />
					{:else if item?.demo === 'check'}
						<CheckDemo {item} />
					{/if}
				</Content>
			{/each}
		{/if}
	{/each}
{/if}
