<script lang="ts">
	import { page } from '$app/stores';
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { homePage, vehiclesPage, servicePage } from '$utils/pages';
</script>

<TabGroup
	class="bg-transparent w-full"
	justify="justify-center"
	active="underline hover:text-secondary-500"
	hover="hover:text-secondary-500"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
>
	<TabAnchor href={homePage} selected={$page.url.pathname.startsWith(homePage)}>
		<span>Home</span>
	</TabAnchor>

	<TabAnchor href={homePage} selected={$page.url.pathname.startsWith(homePage)}>
		<span>About Me</span>
	</TabAnchor>

	<TabAnchor href={homePage} selected={$page.url.pathname.startsWith(homePage)}>
		<span>Portofolio</span>
	</TabAnchor>

	<TabAnchor href={homePage} selected={$page.url.pathname.startsWith(homePage)}>
		<span>Contact</span>
	</TabAnchor>
</TabGroup>
