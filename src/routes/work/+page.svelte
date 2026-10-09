<script lang="ts">
	import PageMeta from '#lib/components/PageMeta.svelte';
	import { focusAreas } from '#lib/content/site.js';
</script>

<PageMeta path="/work" />

<h1 class="display-title mb-4">Portofolio</h1>
<p class="mb-4 text-lg">
	Web and mobile work across SvelteKit, React Native, TypeScript, and Node.js.
</p>
{#each focusAreas as area (area.id)}
	<p class="mb-4 text-lg">
		<strong class="font-semibold">{area.title}.</strong>
		{area.summary}
	</p>
{/each}
