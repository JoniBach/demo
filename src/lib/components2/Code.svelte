<script>
	import Highlight from 'svelte-highlight';
	import {
		csharp,
		go,
		java,
		javascript,
		json,
		markdown,
		php,
		python,
		bash
	} from 'svelte-highlight/languages';
	import darkTheme from 'svelte-highlight/styles/github-dark';

	export let language = 'node';
	export let code = ``;

	const languages = [
		'node',
		'bash',
		'markdown',
		'python',
		'java',
		'csharp',
		'golang',
		'php',
		'json'
	];

	const languageLookup = {
		node: javascript,
		python: python,
		java: java,
		csharp: csharp,
		golang: go,
		php: php,
		json: json,
		markdown: markdown,
		bash: bash
	};

	$: selectedLanguage = language.toLowerCase();
	$: isCorrectLanguage = languages.includes(selectedLanguage);
	$: languagePattern = isCorrectLanguage ? languageLookup[selectedLanguage] : null;

	let hasCoppied = false;

	function copyId() {
		navigator.clipboard.writeText(code || '');
		hasCoppied = true;
		setTimeout(() => (hasCoppied = false), 2000);
	}
</script>

<svelte:head>
	{@html darkTheme}
</svelte:head>

{#if languagePattern}
	<div class="container">
		<div class="code-wrapper">
			<Highlight language={languagePattern} {code} />
		</div>
		<div class="header">
			<button class="button" on:click={() => copyId()}>
				{hasCoppied ? 'Copied!' : ''}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					height="20px"
					class="icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
					/>
				</svg>
			</button>
		</div>
	</div>
{:else}
	<p>No valid language or code selected.</p>
{/if}

<style>
	.container {
		align-items: center;
		display: flex;
		flex-direction: row; /* Side by side layout */
		align-items: flex-start;
		width: 100%;
		position: relative;
		margin-bottom: 10px;
	}

	.code-wrapper {
		flex-grow: 1;
		overflow: auto;
		background: #222;
		padding: 10px;
		border-radius: 10px;
		white-space: pre-wrap;
		word-wrap: break-word;
		word-break: break-word;
	}

	.header {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		margin-left: 1em; /* Add space between code and button */
	}

	.button {
		background: transparent;
		color: white;
		border: none;
		border-radius: 10px;
		padding: 0.5em 1em;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.icon {
		margin-left: 8px;
	}

	:global(pre code.hljs) {
		background-color: #222;
		padding: 0;
	}
</style>
