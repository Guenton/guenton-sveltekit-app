<script lang="ts">
	import { resolve } from '$app/paths';
	import ExternalLink from '#lib/components/ExternalLink.svelte';
	import PageMeta from '#lib/components/PageMeta.svelte';
	import { email, github, linkedin } from '#lib/content/site.js';
</script>

<PageMeta path="/contact" />

<h1 class="display-title mb-4">Contact</h1>
<p class="mb-4 text-lg">Email is the direct way to reach me. GitHub is the public code.</p>
<p class="mb-4 text-lg">
	<a href="mailto:guenton@gmail.com">{email.label}</a>
</p>
<p class="mb-4 text-lg">
	<ExternalLink href={github.href}>{github.label}</ExternalLink>
</p>
<p class="mb-4 text-lg">
	<ExternalLink href={linkedin.href}>{linkedin.label}</ExternalLink>
</p>
<p class="text-lg">
	<a href={resolve('/policy')}>Privacy</a>
</p>
