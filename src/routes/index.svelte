<script context="module" lang="ts">
	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from '$lib/Home/Hero/index.svelte';
	import Features from '$lib/Home/Features/index.svelte';
	import Testimonials from '$lib/Home/Testimonials/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Hero />
	<Features />
	<Testimonials />
</section>

<style>
</style>
