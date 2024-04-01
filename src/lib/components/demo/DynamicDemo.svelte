<script lang="ts">
	import { onMount } from 'svelte';
	import QyeryArray from './QyeryArray.svelte';
	import { checkCondition, operationList } from '@jonibach/transform';

	export let item;
	let loading: true;
	let testFunction;
	const options = operationList.map((e) => e.operation);
	$: show1 = params[0] === 'query-array' || params[1] === 'query-array';

	$: queryArrays = show1
		? [['', options[0], '']]
		: [
				['', options[0], ''],
				['', options[0], '']
			];

	$: data = item?.data;
	$: params = item.params;

	function getParam(param) {
		if (param === 'query-array') {
			return queryArrays[0];
		}
		if (param === 'query-arrays') {
			return queryArrays;
		}
		if (param === 'data') {
			return data;
		}
		return null;
	}

	$: param1 = queryArrays && getParam(params[0]);
	$: param2 = queryArrays && getParam(params[1]);
	$: showData = params[0] === 'data';

	$: outputValue = !loading && testFunction && testFunction(param1, param2);

	// $: console.log(checkCondition(data, queryArrays[0]));
	// $: console.log(show1);

	onMount(() => {
		testFunction = item?.testFunction;
		console.log(item);
		loading = false;
	});

	const formatForDisplay = (value) => {
		return JSON.stringify(value, null, 2);
	};
</script>

{#if loading}
	<p>Loading...</p>
{:else if !!testFunction}
	{#each queryArrays as query, index}
		<div>These inputs:</div>

		<QyeryArray bind:query {options} />
		<div>Create this query array</div>
		<div class="data">{formatForDisplay(query)}</div>
	{/each}
	{#if showData}
		<div>Filterable Data:</div>
		<div class="data">{formatForDisplay(data)}</div>
	{/if}
	<div>Which returns:</div>
	<div class="data">{formatForDisplay(outputValue)}</div>
{:else}
	<p>Demo not found</p>
{/if}

<style>
	.data {
		border: 1px solid #aaa;
		padding: 10px;
		margin-bottom: 10px;
		margin-top: 10px;
	}
</style>
