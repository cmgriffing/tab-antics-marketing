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

	let submitted = false;
	let errored = false;

	let name = '';
	let email = '';
	let message = '';
	let occupation = '';
	let title = 'Mr / Sir';

	function handleFormSubmission() {
		return fetch('/api/forms/contact', {
			method: 'POST',
			body: JSON.stringify({
				name,
				email,
				message,
				occupation,
				title
			})
		})
			.then(() => {
				submitted = true;
			})
			.catch(() => {
				submitted = true;
				errored = true;
			});
	}
</script>

<svelte:head>
	<title>Contact | TabFoolery</title>
</svelte:head>

<Title title="Contact Us" />
<div class="content">
	{#if !submitted}
		<form on:submit|preventDefault={handleFormSubmission}>
			<section class="text-gray-600 body-font relative">
				<div class="container px-5 mx-auto">
					<div class="flex flex-col text-center w-full mb-12">
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
							Have some questions, concerns, or ideas? Let us know!
						</p>
					</div>
					<div class="lg:w-1/2 md:w-2/3 mx-auto">
						<div class="flex flex-wrap -m-2">
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
									<input
										type="text"
										id="name"
										name="name"
										bind:value={name}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-chill-500 focus:bg-white focus:ring-2 focus:ring-blue-chill-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										bind:value={email}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-chill-500 focus:bg-white focus:ring-2 focus:ring-blue-chill-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>

							<div class="p-2 w-1/2 hidden">
								<div class="relative">
									<label for="occupation" class="leading-7 text-sm text-gray-600">Occupation</label>
									<input
										type="hidden"
										id="occupation"
										name="occupation"
										bind:value={occupation}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-chill-500 focus:bg-white focus:ring-2 focus:ring-blue-chill-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>

							<div class="p-2 w-1/2 hidden">
								<div class="relative">
									<label for="title" class="leading-7 text-sm text-gray-600">Title</label>
									<input
										type="hidden"
										id="title"
										name="title"
										bind:value={title}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-chill-500 focus:bg-white focus:ring-2 focus:ring-blue-chill-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-full">
								<div class="relative">
									<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
									<textarea
										id="message"
										name="message"
										bind:value={message}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-chill-500 focus:bg-white focus:ring-2 focus:ring-blue-chill-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-full">
								<button
									type="submit"
									class="flex mx-auto text-white bg-blue-chill-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-chill-600 rounded text-lg"
									>Send</button
								>
							</div>
						</div>
					</div>
				</div>
			</section>
		</form>
	{/if}
</div>

<style>
</style>
