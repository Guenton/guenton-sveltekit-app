<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import BrandMark from '#lib/components/BrandMark.svelte';
	import ThemeToggle from '#lib/components/ThemeToggle.svelte';
	import { isCurrentPath, nav } from '#lib/content/site.js';

	const pathname = $derived(page.url.pathname);

	const linkClass = (href: string) =>
		[
			'px-4 py-2 text-center transition-colors hover:text-secondary-500',
			isCurrentPath(pathname, href) ? 'underline' : '',
		].join(' ');
</script>

<AppBar class="z-10 shrink-0 bg-[#d2d2d2] shadow-2xl dark:bg-surface-800">
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
		<AppBar.Lead>
			<a href={resolve('/')}>
				<BrandMark />
			</a>
		</AppBar.Lead>

		<AppBar.Headline class="hidden justify-center md:flex">
			<nav class="flex justify-center" aria-label="Primary">
				{#each nav as item (item.href)}
					<a
						href={resolve(item.href)}
						class={linkClass(item.href)}
						aria-current={isCurrentPath(pathname, item.href) ? 'page' : undefined}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</AppBar.Headline>

		<AppBar.Trail class="flex items-center gap-4">
			<ThemeToggle />
			<a href={resolve('/')} class="btn-icon" aria-label="Account">
				<svg viewBox="0 0 24 24" class="size-6" aria-hidden="true">
					<path
						fill="currentColor"
						d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
					/>
				</svg>
			</a>
			<a href={resolve('/about')} class="btn-icon" aria-label="About Me">
				<svg viewBox="0 0 24 24" class="size-6" aria-hidden="true">
					<path
						fill="currentColor"
						d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
					/>
				</svg>
			</a>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

<nav
	class="fixed right-0 bottom-0 left-0 z-10 flex h-16 items-center bg-[#d2d2d2] md:hidden dark:bg-surface-800"
	aria-label="Primary"
>
	{#each nav as item (item.href)}
		<a
			href={resolve(item.href)}
			class={['flex-1', linkClass(item.href)]}
			aria-current={isCurrentPath(pathname, item.href) ? 'page' : undefined}
		>
			{item.label}
		</a>
	{/each}
</nav>
