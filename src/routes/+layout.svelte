<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	import type { Unsubscriber } from 'svelte/store';
	import { onDestroy, onMount } from 'svelte';
	import { isDarkModeState } from '$lib/store';

	import Analytics from '$lib/components/content/Analytics.svelte';

	let unsubDarkMode: Unsubscriber;

	onMount(() => {
		unsubDarkMode = isDarkModeState.subscribe((isDarkMode) => {
			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	});

	onDestroy(() => unsubDarkMode && unsubDarkMode());
</script>

<Analytics />

<AppShell>
	<slot />
</AppShell>
