<script lang="ts">
	import HeroImage from '$lib/images/hero-logo.svg';
</script>

<section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
		<img
			class="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
			alt="hero"
			src={HeroImage}
		/>
		<div class="text-center lg:w-2/3 w-full">
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
				Let Twitch Chat fiddle with your browser tabs for Bits
			</h1>
			<p class="mb-8 leading-relaxed">
				Your browser sits there unmonetized as a source of chat trollability. We have a curated set
				of tasks that allow chat to exert control over your browser tabs for the price you decide.
				The actions are carefully chosen to prevent any major abuse such as injected URLs.
			</p>
			<div class="flex justify-center">
				<a
					href="/getting-started"
					class="inline-flex text-white bg-blue-chill-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-chill-600 rounded text-lg"
					>Get Started</a
				>
				<a
					href="/features"
					class="ml-4 inline-flex text-gray-700 bg-gray-100 border-solid border-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg border-blue-chill-500"
				>
					Learn more
				</a>
			</div>
		</div>
	</div>
</section>
