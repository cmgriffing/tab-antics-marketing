<script lang="ts">
	import { features } from '../../../data';

	let featuredFeatures = features.slice(0, 3);
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="text-center mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features</h1>
			<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
				Here is a small sample of what havoc a viewer might be able to wreak.
			</p>
			<div class="flex mt-6 justify-center">
				<div class="w-16 h-1 rounded-full bg-blue-chill-500 inline-flex" />
			</div>
		</div>
		<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
			{#each featuredFeatures as feature}
				<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
					<div
						class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-chill-50 text-blue-chill-500 mb-5 flex-shrink-0"
					>
						{@html feature.icon}
					</div>
					<div class="flex-grow">
						<h2 class="text-gray-900 text-lg title-font font-medium mb-3">{feature.title}</h2>
						<p class="leading-relaxed text-base">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="text-center pt-4">
			<a
				href="/features"
				class="inline-block mx-auto mt-16 text-white bg-blue-chill-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-chill-600 rounded text-lg"
			>
				More Features
			</a>
		</div>
	</div>
</section>
