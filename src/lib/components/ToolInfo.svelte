<script lang="ts">
	import { extractFunctionInfo } from '@jonibach/convert';
	import { onMount } from 'svelte';

	export let data: any;
	export let item: any;

	let contentInfo;

	$: {
		contentInfo = extractFunctionInfo(item.testFunction);
	}

	$: console.log(contentInfo);
	onMount(() => {
		// Initialize Prism.js for code highlighting
		// @ts-ignore
		Prism.highlightAll();
	});
</script>

<div class="library-tool-info">
	<p class="description">{item.description}</p>
	<div class="code">
		<p>
			<code class="language-javascript"
				>{`import { ${contentInfo.name} } from '${data.importFrom}'`}</code
			>
		</p>
		<p><code class="language-javascript">{`const result = ${contentInfo.usage}`}</code></p>
	</div>
	<div class="params">
		<p class="param-title">params:</p>
		<ol class="params-list">
			{#each contentInfo.params as param}
				<li>
					<p>{param}</p>
				</li>
			{/each}
		</ol>
	</div>
	<p>
		async: <span style="color: {contentInfo.isAsync ? 'green' : 'red'}"
			>{contentInfo.isAsync ? 'yes' : 'no'}</span
		>
	</p>
</div>

<style>
	.library-tool-info {
		margin-bottom: 20px;
	}

	.code {
		margin-top: 10px;
		border: 1px solid #ddd;
		padding: 10px;
		background-color: #f8f8f8;
	}

	.params {
		margin-top: 10px;
	}

	.param-title {
		font-weight: bold;
		margin-bottom: 5px;
	}
</style>
