<script>
	import Code from '$lib/components2/Code.svelte';
	import { operationList } from 'consist';

	let leftInput = '1';
	let rightInput = '1';
	let selectedOperation = {
		operation: '=',
		function: (a, b) => a === b
	};

	$: result = selectedOperation.function(leftInput, rightInput);
</script>

<form class="form-container">
	<input type="text" bind:value={leftInput} placeholder="Left Input" class="input-field" />

	<select bind:value={selectedOperation} class="select-field">
		{#each operationList as operation, index}
			<option value={operation} selected={index === 0}>{operation.operation}</option>
		{/each}
	</select>
	{#if selectedOperation.function.length === 2}
		<input type="text" bind:value={rightInput} placeholder="Right Input" class="input-field" />
	{/if}
	<div class="input-result">=</div>
	<div class="input-result">{result ? 'true ' : 'false'}</div>
</form>

<Code
	code={`import { ${selectedOperation.function.name} } from 'consist';
import { operationList } from 'consist';

console.log(${selectedOperation.function.name}(${leftInput}, ${rightInput}));
console.log(operationList(${leftInput}, '${selectedOperation.operation}', ${rightInput}));
`}
/>

<style>
	.form-container {
		display: flex;
		gap: 1rem;
		margin: 0 auto;
		padding: 1rem;
		border-radius: 8px;
	}

	.input-field,
	.select-field {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		width: 100%;
	}
	.input-result {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		background: white;
		color: black;
	}

	.input-field:focus,
	.select-field:focus,
	.submit-button:focus {
		outline: none;
		border-color: #007bff;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}

	.submit-button {
		cursor: pointer;
		background-color: #007bff;
		color: white;
		border: none;
	}
</style>
