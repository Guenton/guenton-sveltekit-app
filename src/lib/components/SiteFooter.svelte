<script lang="ts">
	import BrandMark from '#lib/components/BrandMark.svelte';
</script>

<footer class="hidden shrink-0 bg-[#d2d2d2] md:block dark:bg-surface-800">
	<div class="flex items-center justify-between py-1">
		<p class="ml-5 text-sm">Copyright © 2024. All rights reserved.</p>
		<div class="mr-4 flex items-center gap-2">
			<p class="text-sm">Powered By</p>
			<a href="mailto:guenton@gmail.com">
				<BrandMark />
			</a>
		</div>
	</div>
</footer>
