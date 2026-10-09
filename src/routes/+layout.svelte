<script lang="ts">
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import type { LayoutProps } from './$types';
	import './layout.css';

	let { children }: LayoutProps = $props();
</script>

<div class="flex h-dvh flex-col overflow-hidden text-black dark:text-white">
	<a
		href="#content"
		class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary-500 focus:px-4 focus:py-2 focus:text-primary-contrast-500"
	>
		Skip to content
	</a>

	<SiteHeader />

	<div class="relative min-h-0 flex-1">
		<div class="home-background absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"></div>
		<div
			class="absolute inset-0 bg-gradient-to-b from-[#0e100f] via-[#0e100f]/30 to-[#0e100f]"
		></div>
		<div
			id="content"
			class="page-copy absolute inset-0 overflow-y-auto bg-gradient-to-r from-[#dddedd] via-[#dddedd]/50 to-transparent pb-20 md:pb-0 dark:from-surface-900 dark:via-surface-900/50 dark:to-transparent"
		>
			<div class="m-10 max-w-3xl md:m-32">
				{@render children()}
			</div>
		</div>
	</div>

	<SiteFooter />
</div>
