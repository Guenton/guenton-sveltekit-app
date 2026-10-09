<script lang="ts">
	import { onMount } from 'svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { getColorMode, setColorMode } from '#lib/theme/mode.js';

	let checked = $state(false);

	onMount(() => {
		checked = getColorMode() === 'dark';
	});

	const onCheckedChange = (details: { checked: boolean }) => {
		setColorMode(details.checked ? 'dark' : 'light');
		checked = details.checked;
	};
</script>

<Switch {checked} {onCheckedChange} class="flex items-center gap-1" label="Light Switch">
	<Switch.Label class="text-xs">{checked ? 'Go Light' : 'Go Dark'}</Switch.Label>
	<Switch.Control class="bg-surface-300 data-[state=checked]:bg-primary-500">
		<Switch.Thumb class="bg-primary-500 data-[state=checked]:bg-surface-700">
			<svg class="size-3 fill-surface-900" viewBox="0 0 512 512" aria-hidden="true">
				<path
					d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
				/>
			</svg>
		</Switch.Thumb>
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
