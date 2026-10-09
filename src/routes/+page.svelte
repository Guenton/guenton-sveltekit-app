<script lang="ts">
	import PageMeta from '#lib/components/PageMeta.svelte';
	import { roles } from '#lib/content/site.js';
</script>

<PageMeta path="/" />

<div class="flex flex-col gap-5">
	{#each roles as role (role)}
		<h1 class="display-title">{role}</h1>
	{/each}
</div>
