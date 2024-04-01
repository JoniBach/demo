<script lang="ts">
	export let id: string;
</script>

<div id="{id}-content" class="content-container">
	<slot />
</div>

<style>
	.content-container {
		margin: 10px;
	}
</style>
