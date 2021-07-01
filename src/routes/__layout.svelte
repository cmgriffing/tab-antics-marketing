<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.postcss';

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let currentPath = '/';

	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}

	onMount(() => {
		window.addEventListener('sveltekit:navigation-start', () => {
			currentPath = window.location.pathname;
		});
	});
</script>

<Header>
	<main in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: 50, duration: 250 }}>
		<slot />
	</main>

	<style>
		main {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 1rem;
			width: 100%;
			max-width: 1024px;
			margin: 0 auto;
			box-sizing: border-box;
		}

		footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 40px;
		}

		footer a {
			font-weight: bold;
		}

		@media (min-width: 480px) {
			footer {
				padding: 40px 0;
			}
		}
	</style>
</Header>
{#key currentPath}
	<div in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
		<slot />
	</div>
{/key}
<Footer />
