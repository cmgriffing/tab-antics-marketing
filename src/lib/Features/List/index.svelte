<script lang="ts">
	import { features } from '../../../data';
</script>

{#each features as feature}
	<section class="text-gray-600 body-font" id={feature.slug}>
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<h2
				class="title sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 text-right"
			>
				{feature.title}
			</h2>
			<div class="md:w-3/5 md:pl-6">
				<p class="leading-relaxed text-base">
					{feature.description}
				</p>
				<div class="flex md:mt-4 mt-6">
					<button
						class="inline-flex text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-500 rounded pointer-events-none"
						disabled
					>
						Examples coming soon
					</button>
				</div>
			</div>
		</div>
	</section>
{/each}

<style>
	.title {
		font-family: 'Fontdiner Swanky', cursive;
	}
</style>
