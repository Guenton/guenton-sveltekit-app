<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { nav } from '#lib/content/site.js';

	const heading = $derived(page.status === 404 ? 'Page not found' : 'Something went wrong');
</script>

<svelte:head>
	<title>{page.status} · GuenTon</title>
</svelte:head>

<p class="mb-4 text-lg">{page.status}</p>
<h1 class="display-title mb-4">{heading}</h1>
<p class="mb-4 text-lg">{page.error?.message ?? 'This page is not available.'}</p>
<nav aria-label="Recovery">
	<ul class="flex flex-wrap gap-x-4 gap-y-2 text-lg">
		{#each nav as item (item.href)}
			<li>
				<a href={resolve(item.href)}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>
