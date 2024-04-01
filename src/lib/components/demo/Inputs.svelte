<script lang="ts">
	import { objectToJsonString } from '@jonibach/convert';

	export let inputValues;
	export let type;
</script>

{#each inputValues as param, index}
	{#if type?.from}
		{#if type.from === 'string'}
			<input class="input" type="text" placeholder={param} bind:value={param} />
		{:else if type.from === 'number'}
			<input class="input" type="number" placeholder={param} bind:value={param} />
		{:else if type.from === 'boolean'}
			<input class="input" type="checkbox" placeholder={param} bind:value={param} />
		{:else if type.from === 'date'}
			<input class="input" type="text" placeholder={param} bind:value={param} />
		{:else if type.from === 'object'}
			{#each Object.keys(param) as key}
				<label>
					{key}
					<input class="input" type="text" placeholder={key} bind:value={param[key]} />
				</label>
			{/each}
			Object:
			<div class="input">
				{objectToJsonString(param)}
			</div>
		{/if}
	{/if}
{/each}

<style>
	.input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		flex-shrink: 0;
		margin-bottom: 20px;
	}
</style>
