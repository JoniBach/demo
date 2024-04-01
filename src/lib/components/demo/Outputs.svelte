<script>
	import { objectToJsonString } from '@jonibach/convert';

	export let outputValue;
	export let type;
</script>

<p class="output">
	{#if type?.to}
		{#if type.to === 'string'}
			{outputValue}
		{:else if type.to === 'number'}
			{outputValue}
		{:else if type.to === 'boolean'}
			{outputValue}
		{:else if type.to === 'date'}
			{outputValue}
		{:else if type.to === 'object'}
			{objectToJsonString(outputValue)}
		{:else if type.to === 'array'}
			{objectToJsonString(outputValue)}
		{/if}
	{/if}
</p>

<style>
	.output {
		padding: 0.5rem;
		margin: 0;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		margin-right: 0.5rem;
		flex-shrink: 0;
		margin-bottom: 20px;
	}
</style>
