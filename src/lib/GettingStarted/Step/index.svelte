<script lang="ts">
	import { onMount } from 'svelte';

	export let step;
	export let index;
	export let firstStepY;

	let container;
	let percentageDone = 0;

	onMount(() => {
		function scrollHandler() {
			// console.log({ container });

			const { bottom, top, right, left } = container.getBoundingClientRect();
			const elementHeight = bottom - top;

			// const middleInnerWindowY =
			// 	(document.documentElement.clientHeight / 2) *
			// 	(elementHeight / document.documentElement.clientHeight);

			// const middleOfWindow = middleInnerWindowY + window.scrollY;
			// const bottomOfWindow = document.documentElement.clientHeight + window.scrollY;

			// TODO: Determine innerPosition value based on placement of child number element
			// const numberPosition = top;

			// const startingValue = middleOfWindow - (top + window.scrollY);

			// // Get progress value
			// percentageDone = Math.max(Math.floor(startingValue), 0);

			// Approach 2
			const elementRatio = elementHeight / window.document.documentElement.clientHeight;

			const firstStepPageY = window.scrollY + firstStepY;
			const elementPageY = top + window.scrollY;

			const startingPoint = firstStepPageY - elementPageY;

			const progress = startingPoint / elementHeight;

			percentageDone = Math.max(0, Math.floor(progress * 100));

			// ---

			if (index == 1) {
				console.log({
					firstStepY,
					firstStepPageY,
					elementPageY,
					startingPoint,
					percentageDone,
					elementHeight,
					progress
				});
			}
		}

		scrollHandler();

		window.addEventListener('scroll', scrollHandler);

		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	});
</script>

<div bind:this={container} class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
	<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
		<div class="progress-bar-wrapper h-full w-1 bg-gray-200 pointer-events-none">
			<div
				class="progress-bar bg-blue-chill-500 pointer-events-none w-1 h-0"
				style="
					height: {percentageDone}%
				"
			/>
		</div>
	</div>
	<div
		class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-chill-500 text-white relative z-10 title-font font-medium text-sm"
		style="filter: saturate({Math.min(percentageDone / 10, 1)}); transform: scale({Math.max(
			Math.min(percentageDone / 100 + 0.8, 1.3),
			0.8
		)})"
	>
		{index + 1}
	</div>
	<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
		<div
			class="step-image flex-shrink-0 w-24 h-24 bg-blue-chill-50 text-blue-chill-500 rounded-full inline-flex items-center justify-center"
			style="filter: saturate({Math.min(percentageDone / 10, 1)}); transform: scale({Math.min(
				percentageDone / 100 + 0.5,
				1
			)})"
		>
			{@html step.icon}
		</div>
		<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
			<h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{step.title}</h2>
			<p class="leading-relaxed">
				{@html step.description}
			</p>
		</div>
	</div>
</div>

<style>
	.progress-bar-wrapper {
		position: relative;
		overflow: hidden;
	}

	.progress-bar {
		position: absolute;
		top: 0;
		bottom: 0;
	}

	.step-image svg {
		transform: scale(1.5);
	}
</style>
