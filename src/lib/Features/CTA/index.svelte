<script lang="ts">
	import { features } from '../../../data';
</script>

<section class="text-gray-600 body-font">
	<div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
		<div
			class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200"
		>
			<h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
				Let your viewers unleash their wrath on your tabs instead of you.
			</h2>
			<p class="leading-relaxed text-base">
				This carefully selected set of antics and actions is fully configurable. You set the amount
				of bits and the specific actions that you want to enable. If you don't want a Rick Roll, you
				don't have to have a Rick Roll.
			</p>
			<a href="/getting-started" class="text-blue-chill-500 inline-flex items-center mt-4">
				Get Started
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-4 h-4 ml-2"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
		</div>
		<div class="flex flex-col md:w-1/2 md:pl-12">
			<h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
				Available Actions
			</h2>
			<nav class="flex flex-wrap list-none -mb-1">
				{#each features as feature}
					<li class="lg:w-1/3 mb-1 w-1/2">
						<a
							href={'#' + feature.slug}
							class="text-gray-600 hover:text-gray-800 border-b border-solid border-blue-chill-500"
						>
							{feature.title}
						</a>
					</li>
				{/each}
			</nav>
		</div>
	</div>
</section>
