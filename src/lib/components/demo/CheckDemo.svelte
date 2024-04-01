<script lang="ts">
	import { onMount } from 'svelte';
	import Inputs from './Inputs.svelte';
	import Outputs from './Outputs.svelte';

	export let item;

	let loading: true;

	$: params = item.params;
	$: type = item.type;
	let testFunction;
	$: inputLabel = item.inputLabel;
	$: outputLabel = item.outputLabel;

	$: inputValues = [];
	$: outputValue =
		!loading && testFunction && inputValues && testFunction(inputValues[0], params[1], params[2]);

	onMount(() => {
		testFunction = item?.testFunction;
		inputValues = [item.params[0]];
		loading = false;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if !!testFunction}
	<div class="container">
		<div class="input-container">
			Input ({inputLabel})
			<Inputs bind:inputValues {type} />
			{#if params.length > 1}
				<Outputs outputValue={params[1]} {type} />
			{/if}
			{#if params.length > 2}
				<Outputs outputValue={params[2]} {type} />
			{/if}
		</div>

		<div class="output-container">
			Output ({outputLabel})
			{outputValue}
		</div>
	</div>
{:else}
	<p>Demo not found</p>
{/if}

<style>
	.container {
		border: 1px solid #ccc;
		padding: 1rem;
	}
	.input-container {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		/* align-items: center; */
	}
</style>
