<script lang="ts">
	import { canonicalUrl, getPage } from '#lib/content/site.js';
	import type { SitePath } from '#lib/types/site.js';

	let { path }: { path: SitePath } = $props();

	const pageCopy = $derived(getPage(path));
	const fullTitle = $derived(path === '/' ? pageCopy.title : `${pageCopy.title} · GuenTon`);
	const canonical = $derived(canonicalUrl(path));
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={pageCopy.description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={pageCopy.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="website" />
</svelte:head>
