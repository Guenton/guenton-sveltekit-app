<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ExternalAnchorProps } from '#lib/types/site.js';

	interface Props extends ExternalAnchorProps {
		children: Snippet;
	}
</script>

<script lang="ts">
	let { href, class: className = '', children }: Props = $props();
</script>

<a {href} class={className} rel="external noopener" target="_blank">
	{@render children()}
</a>
