<script lang="ts">
	import { resolve } from '$app/paths';
	import PageMeta from '#lib/components/PageMeta.svelte';
	import { email } from '#lib/content/site.js';
</script>

<PageMeta path="/policy" />

<h1 class="display-title mb-4">Privacy</h1>
<p class="mb-4 text-lg">
	This website is a static personal site. It does not create accounts and it does not run analytics.
</p>
<p class="mb-4 text-lg">
	Pages are served as built files. The only choice stored on your device is the light or dark mode
	setting, kept in local storage in this browser. That setting is not sent to a server.
</p>
<p class="text-lg">
	Email and profile links leave this site only when you choose them. The contact address is
	<a href="mailto:guenton@gmail.com">{email.label}</a>. Questions about this note can go to that
	address, or through the <a href={resolve('/contact')}>contact page</a>.
</p>
