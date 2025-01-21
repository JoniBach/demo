<script>
	import Code from '$lib/components2/Code.svelte';
	import Page from '$lib/components2/Page.svelte';
	import { operationList, isEqualTo } from 'consist';
	import ConsistDemo from './ConsistDemo.svelte';

	const data = {
		id: 'consist',
		title: 'consist',
		demo: '/consist',
		description: 'An npm library for organising conditional logic',
		icons: [
			{ name: 'npm', link: 'https://www.npmjs.com/package/consist' },
			{ name: 'github', link: 'https://github.com/JoniBach/consist' }
		]
	};
	$: console.log(operationList);
</script>

<Page title={data.title} description={data.description} icons={data.icons}>
	<div class="section">
		<h2>Install consist</h2>
		<p>Install consist using your favrouite package manager</p>
		<Code language="bash" code={`npm install consist`} />
		<p>
			Consist is a collection of pure js functions packaged into a library that are designed to help
			you organise your conditional logic.
		</p>
	</div>
	<div class="section">
		<h2>Demo</h2>
		<p>
			consist hgas a number of usecases but was originally designed for aiding in the development of
			advanced forms
		</p>
		<ConsistDemo />
	</div>
	<div class="section">
		<h2>With {operationList?.length} operations to choose from</h2>
		<p>Each function can be accessed through the operationsList array</p>
		<Code
			code={`import { operationList } from 'consist';


console.log(operationList)

/* 	
[
	{
		operation: "=",
		function: f
	},
	...etc
] 
		`}
		/>
		<div class="operations">
			{#each operationList as op}
				<p class="operation">{op.operation}</p>
			{/each}
		</div>
	</div>
	<div class="section">
		<h2>Import each function directly</h2>
		<p>Each check function is conveniently named to allow for enhanced code readability</p>
		<Code
			code={`import { isEqualTo } from 'consist';

console.log(isEqualTo('a', 'a')) // true
console.log(isEqualTo(1, 2)) // false
		`}
		/>
		<p>Simply import them into your project and use them as you would any other function.</p>
	</div>
	<div class="section">
		<h2>Check each condition dynamically</h2>
		<p>
			Configure the checkCondition function to process individual conditions in a configurable way
		</p>
		<Code
			code={`import { isEqualTo } from 'consist';

checkCondition([5, "=", 5]), true) // true
checkCondition([5, "!=", 4]), true) // true
checkCondition([5, ">", 4]), true) // true
checkCondition([5, "<", 4]), true) // false

checkCondition([[true, "=", false], "or", [1, "!=", 2]]) // true
		`}
		/>
		<p>Or check multiple conditions in series using checkConditions</p>

		<Code
			code={`import { checkConditions } from 'consist';

const conditions: ConditionParams[] = [
    [5, "=", 5, true], // Expected to be true
    ["hello", "startsWith", "h", true], // Expected to be true
    [10, ">", 5, true], // Expected to be true
];

checkConditions(conditions); // true
		`}
		/>
		<p>You can even validate multiple different conditions and different types in the same check</p>
		<Code
			code={`import { checkConditions } from 'consist';

const conditions: ConditionParams[] = [
    [5, "=", 4, true], // Expected to be true, but is false
    ["hello", "startsWith", "h", true], // Expected to be true
];

checkConditions(conditions); // false
	`}
		/>
	</div>

	<div class="section">
		<h2>Check conditions within objects</h2>
		<p>Use checkObjectCondition to check conditions within an object.</p>
		<Code
			code={`import { checkObjectCondition } from 'consist';

const obj = { firstName: "sam" };

checkObjectCondition(obj, ["firstName", "=", "sam"]); // true
checkObjectCondition([obj, ["firstName", "exists"]]); // true
			`}
		/>
		<p>And ofcourse you can check in series with checkObjectConditions also</p>
		<Code
			code={`import { checkObjectConditions } from 'consist';

const obj = { firstName: "sam", age: 30 };

checkObjectConditions(obj, [
	["firstName", "=", "sam"],
	["age", "=", 30],
]); // true
			`}
		/>
	</div>
	<div class="section">
		<h2>Filter objects based on conditions</h2>
		<p>
			You can also use consist to filter arrays based on conditions using filterByObjectCondition
		</p>
		<Code
			code={`import { filterByObjectCondition } from 'consist';

const sampleData = [
	{ name: "Apple", category: "fruit" },
	{ name: "Carrot", category: "vegetable" },
	{ name: "Banana", category: "fruit" },
	{ name: "Cherry", category: "fruit" },
];

const result = filterByObjectCondition(sampleData, ["category", "=", "fruit"]);
console.log(result); // [{ name: "Apple", category: "fruit" }, { name: "Banana", category: "fruit" }, { name: "Cherry", category: "fruit" }]
			`}
		/>
		<p>Filter objects based on multiple conditions using filterByObjectConditions.</p>
		<Code
			code={`import { filterByObjectConditions } from 'consist';

const sampleData = [
	{ name: "Apple", category: "fruit" },
	{ name: "Carrot", category: "vegetable" },
	{ name: "Banana", category: "fruit" },
	{ name: "Cherry", category: "fruit" },
];

const result = filterByObjectConditions(sampleData, [
	["category", "=", "fruit"],
	["name", "startsWith", "C"],
]);
console.log(result); // [{ name: "Cherry", category: "fruit" }]
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
	.operation {
		size: 0.5rem;
		padding: 0;
		margin: 0;
	}
	.operations {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
