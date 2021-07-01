<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import Title from '$lib/Common/Title/index.svelte';
	import Step from '$lib/GettingStarted/Step/index.svelte';
	import Testimonials from '$lib/Home/Testimonials/index.svelte';
	import { onMount } from 'svelte';

	import { gettingStartedSteps } from '../data';

	let stepWrapper: Element;
	let firstStepY = 0;

	onMount(() => {
		console.log({ stepWrapper });
		firstStepY = stepWrapper.children[0].getBoundingClientRect().top;
	});
</script>

<svelte:head>
	<title>Getting Started | TabFoolery</title>
</svelte:head>

<Title title="Getting Started" />
<section class="text-gray-600 body-font">
	<div bind:this={stepWrapper} class="container px-5 py-24 mx-auto flex flex-wrap">
		{#each gettingStartedSteps as step, index}
			<Step {firstStepY} {step} {index} />
		{/each}
	</div>
</section>
<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
			<h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
				Having some questions, concerns, or ideas? Let us know.
			</h1>
			<a
				href="/contact"
				class="flex-shrink-0 text-white bg-blue-chill-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-chill-600 rounded text-lg mt-10 sm:mt-0"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>
<Testimonials />

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
