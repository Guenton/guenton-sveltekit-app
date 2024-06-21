<script lang="ts">
	import AppContainer from '$lib/components/containers/AppContainer.svelte';
	import HomeContainer from '$lib/components/containers/HomeContainer.svelte';
</script>

<HomeContainer>
	<AppContainer>
		<div
			class="h-full
			flex
			bg-gradient-to-r
			 from-surface-50
			 dark:from-surface-900 via-surface-50/50 dark:via-surface-900/50 to-surface-50/0 dark:to-surface-900/0"
		>
			<div class="m-10 md:m-32">
				<div class="flex flex-col gap-5">
					<h1 class="h1">Web & Mobile Pro</h1>
					<h1 class="h1">UI/UX Specialist</h1>
				</div>
			</div>
		</div>
	</AppContainer>
</HomeContainer>
