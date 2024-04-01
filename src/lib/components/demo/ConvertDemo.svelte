<script lang="ts">
	import { extractFunctionInfo, objectToJsonString } from '@jonibach/convert';
	import { onMount } from 'svelte';
	import ArrowIcon from '../icons/ArrowIcon.svelte';
	import Inputs from './Inputs.svelte';
	import Outputs from './Outputs.svelte';

	export let item;

	let loading: true;

	$: params = item.params;
	$: type = item.type;
	let testFunction;
	$: inputLabel = item.inputLabel;
	$: outputLabel = item.outputLabel;

	$: inputValues = params;
	$: outputValue =
		!loading &&
		testFunction &&
		inputValues &&
		testFunction(inputValues[0], inputValues[1], inputValues[2]);

	onMount(() => {
		testFunction = item?.testFunction;
		loading = false;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if !!testFunction}
	<div class="container">
		<div class="input-container">
			Input ({inputLabel})
			<Inputs {inputValues} {type} />
		</div>

		<div class="output-container">
			Output ({outputLabel})
			<Outputs {outputValue} {type} />
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
