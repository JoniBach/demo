<script>
	import Code from '$lib/components2/Code.svelte';
	import Page from '$lib/components2/Page.svelte';
	import { onMount } from 'svelte';
	import { vectori } from 'vectori';

	const data = {
		id: 'vectori',
		title: 'vectori',
		demo: '/vectori',
		description: 'An npm library for converting images to true svgs',
		icons: [
			{ name: 'npm', link: 'https://www.npmjs.com/package/vectori' },
			{ name: 'github', link: 'https://github.com/JoniBach/vectori' }
		]
	};
	let loading = true;

	let result = null;
	let file;

	const processFile = async (file) => {
		const vector = await vectori(file);
		return vector;
	};
	onMount(async () => {
		file = await fetch('/images/earth.png').then((res) => res.blob());
		console.log(file);
		const processed = await processFile(file);
		result = processed;
		console.log(processed);
		loading = false;
	});

	function resetFileInput(event) {
		event.target.value = null;
	}
</script>

<Page title={data.title} description={data.description} icons={data.icons}>
	<div class="section">
		<h2>Install vectori</h2>
		<p>Install vectori and potrace using your favrouite package manager</p>
		<Code code={`npm install vectori potrace`} />
		<p>
			Vectori uses potrace under the hood to help generate svg assets so youll need that too! You
			can check it out <a href="https://potrace.sourceforge.net/"> here</a> for more
		</p>
	</div>
	<div class="section">
		<h2>Get started</h2>
		<p>Simply provide a jpeg or png to vectori to start processing your image</p>
		<Code
			code={`import { vectori } from 'vectori';

async function processFile(image) {
    const vector = await vectori(image);
    return vector;
}`}
		/>
		<p>
			Then your all good to go! Keep in mind that the bigger the image, the longer the processing
			time.
		</p>
		<img class="example-image" src="/images/earth.png" alt="earth" />
		<div>
			<input
				type="file"
				accept="image/*"
				on:change={async (event) => {
					const file = event.target.files[0];
					if (file) {
						loading = true;
						result = await processFile(file);
						loading = false;
						resetFileInput(event);
					}
				}}
			/>
		</div>
	</div>
	<div class="section">
		<h2>Retrieve true pathed color SVGs</h2>
		<p>
			Each SVG generated is a true SVG. This means it can be scaled to any size without losing
			quality, and you can manipulate it with CSS and JavaScript.
		</p>
		<div class="images">
			<div class="svg">
				{@html result?.svg({ fill: 'color' }) || '<svg width="200" height="200"></svg>'}
			</div>
			<div class="svg">
				{@html result?.svg({ fill: 'greyscale' }) || '<svg width="200" height="200"></svg>'}
			</div>
			<div class="svg">
				{@html result?.svg({ fill: 'color-outline' }) || '<svg width="200" height="200"></svg>'}
			</div>
			<div class="svg">
				{@html result?.svg({ fill: 'greyscale-outline' }) || '<svg width="200" height="200"></svg>'}
			</div>
			<div class="svg">
				{@html result?.svg({ fill: 'outline' }) || '<svg width="200" height="200"></svg>'}
			</div>
		</div>
		<p>
			vectori can generate SVGs with different fill types. You can choose between color, greyscale,
			color-outline, greyscale-outline, and outline.
		</p>
		<Code
			code={`const vector = await vectori(image);

const colorSvg = vector.svg({ fill: 'color' }),
const outlinedColorSvg = vector.svg({ fill: 'color-outline' }),
const greyscaleSvg = vector.svg({ fill: 'greyscale' }),
const outlinedGreyscaleSvg = vector.svg({ fill: 'greyscale-outline' }),
const outlinedSvg = vector.svg({ fill: 'outline' })
  `}
		/>
	</div>
	<div class="section">
		<h2>Color palettes</h2>
		<p>
			vectori can also analyze the colors of the image and return them as a color palette in full
			color and greyscale
		</p>
		<div class="colors">
			{#if !loading}
				<div class="palette">
					<h4>Full Color</h4>
					{#each result?.palette.popular({ fill: 'color' }) as color}
						<div class="color">
							<div class="popular-color" style="background-color: {color}" />
							<span>{color}</span>
						</div>
					{/each}
				</div>
				<div class="palette">
					<h4>Greyscale</h4>
					{#each result?.palette.popular({ fill: 'greyscale' }) as color}
						<div class="color">
							<div class="popular-color" style="background-color: {color}" />
							<span>{color}</span>
						</div>
					{/each}
				</div>
				<div class="palette">
					<h4>Full Color</h4>
					{result?.palette.all({ fill: 'color' }).length} individual colors
					<h4>Full Greyscale</h4>
					{result?.palette.all({ fill: 'greyscale' }).length} individual colors
				</div>
			{/if}
		</div>
		<p>
			By default, the generated SVGs use the popular palette. However you may also retrieve a
			complete full color and greyscale set if you wish
		</p>

		<Code
			code={`const vector = await vectori(image);

const popularColorPalette = processed.palette.popular({ fill: 'color' }),
const popularGreyscalePalette = processed.palette.popular({ fill: 'greyscale' }),
const fullColorPalette = processed.palette.all({ fill: 'color' }),
const fullGreyscalePalette = processed.palette.all({ fill: 'greyscale' }),
`}
		/>
	</div>

	<div class="section">
		<h2>Retrieve posturised PNGs</h2>
		<div class="example-image">
			<img
				class="example-image"
				src={result?.image({ fill: 'color' }) ||
					'https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg'}
				alt="color"
			/>
			<img
				class="example-image"
				src={result?.image({ fill: 'greyscale' }) ||
					'https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg'}
				alt="greyscale"
			/>
		</div>
		<Code
			code={`const vector = await vectori(image);

const colorImage = vector.image({ fill: 'color' }),
const greyscaleImage = vector.image({ fill: 'greyscale' }),
  `}
		/>
	</div>
</Page>

<style>
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
