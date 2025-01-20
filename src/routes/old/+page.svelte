<script>
	import Content from '$lib/components/page/Content.svelte';
	import Headder from '$lib/components/page/Headder.svelte';
	import projects from '$lib/config/projects';
</script>

<Headder title="@jonibach demos">
	<title>Page</title>
</Headder>

<div>
	{#each projects as group}
		<a href={group.id}>
			<Headder title={group.title} level={2} />
		</a>
		<Content id={group.id}>{group.description}</Content>
	{/each}
</div>
