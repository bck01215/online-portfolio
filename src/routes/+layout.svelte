<script>
	import '../app.css';
    import Navbar from '$lib/Navbar.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import LogRocket from 'logrocket';
	let dark = true;
	onMount(() => {
		if ($page.url.hostname.includes('blueridgec')) {
			LogRocket.init('kmd6br/portfolio');
		}
		let localDark = localStorage.getItem('dark');
		if (localDark === 'true') {
			dark = true;
		} else if (localDark === 'false') {
			dark = false;
		}
	});
</script>

<main class="{dark ? 'dark' : ''} flex">
    <Navbar />
	<div class="bg-white h-screen w-screen dark:bg-black dark:text-stone-300 overflow-y-scroll">
		<slot />
	</div>
</main>
