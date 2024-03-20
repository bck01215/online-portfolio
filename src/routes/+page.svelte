<script lang="ts">
	import Sparkles from '$lib/Sparkles/Sparkles.svelte';
    import Skills from '$lib/Skills.svelte';
    import { Person } from '$lib/skills';
</script>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Brandon Kauffman's Portfolio" />
</svelte:head>
<div
	class="flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black"
>
	<h2 class="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-7xl">
		{Person.name}
	</h2>
	<div class="relative h-40 w-[40rem]">
		<!-- Gradients -->
		<div
			class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
		/>
		<div
			class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
		/>
		<div
			class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
		/>
		<div
			class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
		/>

		<!-- Core component -->
		<Sparkles
			minSize={0.8}
			maxSize={2}
			particleDensity={300}
			className="w-full h-full"
			particleColor="#FFFFFF"
		/>

		<!-- Radial Gradient to prevent sharp edges -->
		<div
			class="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
		/>
	</div>
</div>
<Skills />

<style lang="postcss">
</style>
