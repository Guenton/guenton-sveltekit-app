<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import IconLogout from '~icons/mdi/logout-variant';
	import IconAccount from '~icons/mdi/account';
	import IconInformation from '~icons/mdi/information-outline';
	import MaterialFab from '../buttons/MaterialFab.svelte';
	import Nav from './Nav.svelte';

	import { firebaseSignOut } from '$lib/firebase/auth';
	import { goto } from '$app/navigation';
	import { aboutPage, homePage, rootPage, userPage } from '$utils/pages';
	import DarkSwitch from '../buttons/DarkSwitch.svelte';
	import LogoGuenton from '../images/LogoGuenton.svelte';

	const logout = () => firebaseSignOut().then(() => goto(rootPage));
</script>

<AppBar shadow="shadow-2xl">
	<svelte:fragment slot="lead">
		<a href={homePage}><LogoGuenton /></a>
	</svelte:fragment>

	<div class="hidden md:flex mx-auto">
		<Nav />
	</div>

	<svelte:fragment slot="trail">
		<DarkSwitch />
		<MaterialFab on:click={() => goto(userPage)}>
			<IconAccount />
		</MaterialFab>
		<MaterialFab on:click={() => goto(aboutPage)}>
			<IconInformation />
		</MaterialFab>
		<MaterialFab on:click={logout}>
			<IconLogout />
		</MaterialFab>
	</svelte:fragment>
</AppBar>
