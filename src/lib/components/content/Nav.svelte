<script lang="ts">
	import { page } from '$app/stores';
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { aboutMePage, contactPage, homePage, portofolioPage } from '$utils/pages';
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
	<TabAnchor href={'/'} selected={$page.url.pathname.startsWith(homePage)}>
		<span>Home</span>
	</TabAnchor>

	<TabAnchor href={aboutMePage} selected={$page.url.pathname.startsWith(aboutMePage)}>
		<span>About Me</span>
	</TabAnchor>

	<TabAnchor href={'/'} selected={$page.url.pathname.startsWith(portofolioPage)}>
		<span>Portofolio</span>
	</TabAnchor>

	<TabAnchor href={'/'} selected={$page.url.pathname.startsWith(contactPage)}>
		<span>Contact</span>
	</TabAnchor>
</TabGroup>
