<script lang="ts">
	export let query;
	export let options;
</script>

<div class="display">
	<input class="from" bind:value={query[0]} />
	<select bind:value={query[1]}>
		{#each options as question}
			<option value={question}>
				{question}
			</option>
		{/each}
	</select>
	<input class="to" bind:value={query[2]} />
	<!-- <div class="break">
		<ArrowIcon />
	</div>
	<p>{formatForDisplay(checkCondition(conversionArray))}</p> -->
</div>

<style>
	.break {
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: auto;
		padding: 5px;
	}
	.display {
		display: flex;
	}

	.from {
		padding: 10px;
	}

	.to {
		padding: 10px;
	}
	.implamentation {
		padding: 10px;
		border: 1px solid #ccc;
		margin-top: 10px;
	}
	.title {
		margin: 0;
		padding: 10px;
		background-color: #aaa;
	}
</style>
