<script>
	import Code from '$lib/components2/Code.svelte';
	import Page from '$lib/components2/Page.svelte';
	import { facely } from 'facely';
	import { onMount } from 'svelte';
	export let ssr = false;

	const data = {
		id: 'facely',
		title: 'facely',
		demo: '/facely',
		description:
			'An npm library for creating 3d face meshes from 2d images powered by tensorflow and three',
		icons: [
			{ name: 'npm', link: 'https://www.npmjs.com/package/facely' },
			{ name: 'github', link: 'https://github.com/JoniBach/facely' }
		]
	};

	let result = null;
	let file = null;
	let progress = null;
	let loading = true;

	async function handleImageUpload(imageFile) {
		const handleProgress = (e) => (progress = e);
		const face = await facely(imageFile, handleProgress);
		return face;
	}

	function handleFileUpload(event) {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);
		if (file) {
			handleImageUpload(file);
		}
	}

	onMount(async () => {
		file = await fetch('/images/head.jpg').then((res) => res.blob());
		const processed = await handleImageUpload(file);
		result = processed;
		console.log(processed);
		loading = false;
	});
</script>

<Page title={data.title} description={data.description} icons={data.icons}>
	<div class="section">
		<h2>Install facely</h2>
		<p>Install facely using your favrouite package manager</p>
		<Code code={`npm install vectori potrace`} />
		<p>
			Facely is designed to take a two dimensional image of a face and convert it into a textured
			three dimensional uv mesh, all within the cumfort of your browser.
		</p>
		<p>
			It leverages <a href="https://www.tensorflow.org/js">TensorFlow.js</a> models like
			<a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection"
				>Face Landmark Detection</a
			>
			and
			<a href="https://github.com/tensorflow/tfjs-models/tree/master/depth-estimation"
				>Depth Estimation</a
			>
			in order to generate a mesh and depthmap of the image.
		</p>
		<p>
			It also uses <a href="https://threejs.org/">three.js</a> to produce real 3d assets that can be
			added to your three.js canvas or downloaded directly from your browser
		</p>
	</div>
	<div class="section">
		<h2>Get started</h2>
		<p>Simply provide an image of a person to get started</p>
		<Code
			code={`import { facely } from 'facely';

async function handleImageUpload(imageFile) {
    const handleProgress = (e) => (progress = e);
    const face = await facely(imageFile, handleProgress);
    return face;
}`}
		/>
		<p>
			Depending on how much performance your device has available, it can take some time to process
			an image. In the mean time, you can provide a callback function to facely to get progress
			updates on the processing of the image.
		</p>
		<img class="example-image" src="/images/head.jpg" alt="earth" />
		{#if progress}
			<p>{progress.stage} {progress.message}</p>
			<div class="progress-bar">
				<div class="progress" style="width: {progress.percent}%"></div>
			</div>
		{:else}
			<p>Upload a portrait to get started</p>
			<p>Note: some browsers are not currently supported</p>
		{/if}
		<div>
			<input type="file" accept="image/*" on:change={handleFileUpload} />
		</div>
	</div>
	<div class="section">
		<h2>Download assets</h2>
		<p>Retrieve your AI generated uv mesh and 2d assets with a single function call</p>
		<Code
			code={`const face = await facely(imageFile, handleProgress);

face.download()
`}
		/>
		{#if !loading}
			<button on:click={() => result?.download()}>Download</button>
		{:else}
			<p><i>getting download ready...</i></p>
		{/if}
	</div>

	<div class="section">
		<h2>Integrate with three.js</h2>
		<p>
			Provide your own canvas and three.js environment and add the generated models and images
			through facely
		</p>
		<Code
			code={`let mainScene = new THREE.Scene();
            
const face = await facely(imageFile, handleProgress);

face.add.image(mainScene)
face.add.wireframe(mainScene)
face.add.edges(mainScene)
face.add.vertices(mainScene)
face.add.faces(mainScene)
face.add.uvFace(mainScene)
`}
		/>
		<p>(live demo comming soon)</p>
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
