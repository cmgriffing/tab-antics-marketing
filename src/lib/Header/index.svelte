<script lang="ts">
	import { page } from '$app/stores';

	import Logo from '$lib/images/logo.svg';
	import { onMount } from 'svelte';

	let currentPath = '/';

	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}

	onMount(() => {
		window.addEventListener('sveltekit:navigation-end', () => {
			currentPath = window.location.pathname;
		});
	});
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
			<img class="w-8 h-8" src={Logo} alt="Brand logo" />
			<span class="logo ml-3 text-xl">TabFoolery</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<a
				href="/features"
				class="mr-5 hover:text-gray-900"
				class:active={currentPath === '/features'}>Features</a
			>
			<a href="/contact" class="mr-5 hover:text-gray-900" class:active={currentPath === '/contact'}
				>Contact</a
			>
		</nav>
		<a
			href="/getting-started"
			class="inline-flex text-white items-center bg-blue-chill-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-chill-600 rounded mt-4 md:mt-0"
			>Get Started
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-4 h-4 ml-1"
				viewBox="0 0 24 24"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>
	</div>
</header>

<style>
	a {
		transition: border 0.3s;
		border: 0px transparent solid;
	}
	.active {
		border-bottom: solid 6px #0ea2b5;
	}
</style>
