<script>
	import Code from '$lib/components2/Code.svelte';
	import Page from '$lib/components2/Page.svelte';
	import { Svector } from 'svector';
	export let ssr = false;

	const data = {
		id: 'svector',
		title: 'svector',
		demo: '/svector',
		description: 'An SVG editor component for svelte powered by paper.js',
		icons: [
			{ name: 'npm', link: 'https://www.npmjs.com/package/svector' },
			{ name: 'github', link: 'https://github.com/JoniBach/svector' }
		]
	};

	const actions = [
		{ type: 'upload' },
		{ type: 'download' },
		{ type: 'text' },
		{ type: 'shape' },
		{ type: 'vector' },
		{
			type: 'custom',
			name: 'Generate Image',
			icon: 'mdi:sparkles',
			action: () => generateImage()
		}
	];

	async function handleSave(event) {
		// Trigger form action save
		console.log('Save event triggered', event.detail);
	}

	async function generateImage() {
		const promptText = prompt('Enter a prompt for image generation:');
		if (promptText !== null) {
			// eventDispatcher('generateImage', { prompt: promptText });
			alert(promptText);
		}
	}

	let file = '';
	let id;
</script>

<Page title={data.title} description={data.description} icons={data.icons}>
	<div class="section">
		<h2>Install svector</h2>
		<p>Install svector using your favorite package manager</p>
		<Code code={`npm install svector`} />
		<p>Svector is an SVG editor interface built upon <a href="http://paperjs.org/">paper.js</a></p>
		<p>
			Its packed full of features such as a simple pen tool, curvature adjustors, shape tools and
			export/download capabilities
		</p>
	</div>
	<div class="section">
		<h2>Minimal setup required</h2>
		<p>
			Simply import the svector editor into your project and configure it in only one line of code
		</p>

		<Code
			code={`<script>
	import { Svector } from 'svector';

</script>

<Svector on:save={() => alert('File saved')} file="" actions={[{ type: 'download' }, { type: 'vector' }]} />
		`}
		/>
		<!-- <p>
			Try out our barebones example. We've set this one up with the pen tool and the ability to
			upload and download your designs
		</p>
		<div>
			<Svector
				on:save={() => alert('File saved')}
				file=""
				actions={[{ type: 'download' }, { type: 'upload' }, { type: 'vector' }]}
			/>
		</div> -->
	</div>
	<div class="section">
		<h2>Everything but the kitchen sink</h2>
		<p>
			Check out our full demo containing all of our current features! Simplly add one of our
			homemade actions to the list, or create your own using the custom action object!
		</p>
		<p>
			Note: we are working hard to serve up all of our internal operations and expand on the
			customisability of our editor.
		</p>
		<div>
			<Svector on:save={handleSave} {file} {actions} />
		</div>
		<Code
			code={`<script>
	import { Svector } from 'svector';

	const actions = [
		{ type: 'upload' },
		{ type: 'download' },
		{ type: 'text' },
		{ type: 'shape' },
		{ type: 'vector' },
		{
			type: 'custom',
			name: 'Generate Image',
			icon: 'mdi:sparkles',
			action: () => generateImage()
		}
	];

	async function handleSave(event) {
		// Trigger form action save
		console.log('Save event triggered', event.detail);
	}

	async function generateImage() {
		const promptText = prompt('Enter a prompt for image generation:');
		if (promptText !== null) {
			// eventDispatcher('generateImage', { prompt: promptText });
			alert(promptText);
		}
	}
</script>

<Svector width='500px' height='500px' on:save={handleSave} {file} {actions} />
		`}
		/>
	</div>
	<div class="section">
		<h2>Add your own actions!</h2>
		<p>
			As previously mentioned, we are working hard to serve up all of our internal operations and
			expand on the customisability of our editor.
		</p>
		<p>
			However we have implamented the ability to add buttons to the editor using the custom action.
		</p>
		<Code
			code={`{
	type: 'custom',
	name: 'Generate Image',
	icon: 'mdi:sparkles',
	action: () => generateImage()
}`}
		/>
		<p>
			We use <a href="https://icon-sets.iconify.design/">iconify design</a> under the hood to mark the
			buttons so feel free to check out their icon library. We serve callbacks so you can trigger your
			own functions.
		</p>
	</div>
</Page>

<style>
	.progress-bar {
		width: 300px;
		background-color: #ddd;
		border-radius: 4px;
		overflow: hidden;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.progress {
		height: 10px;
		background-color: #007bff;
		width: 0;
		transition: width 0.4s ease;
	}
	.section {
		padding: 10px;
		border-bottom: 1px solid grey;
		padding-bottom: 20px;
		margin-bottom: 20px;
	}
	.section h2 {
	}
	.images {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-bottom: 10px;
	}
	.example-image {
		height: 200px;
		margin-bottom: 10px;
	}
	.svg {
		max-width: 200px;
		max-height: 200px;
		height: 100%;
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.popular-color {
		width: 1rem;
		height: 1rem;
	}
	.color {
		display: flex;
		gap: 10px;
	}
	.colors {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
