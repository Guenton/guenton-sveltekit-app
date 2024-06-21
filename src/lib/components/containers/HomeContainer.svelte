<script>
</script>

<div class="h-screen">
	<!-- Small Screen -->
	<div class="block md:hidden">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed home-background">
			<div
				class="flex-1 h-full bg bg-gradient-to-b from-surface-900 via-surface-900/30 to-surface-900"
			>
				<slot />
			</div>
		</div>
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed home-background">
			<div
				class="flex-1 h-full bg bg-gradient-to-b from-surface-900 via-surface-900/30 to-surface-900"
			>
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.home-background {
		background-image: url('/images/homeBackground.jpg');
	}
</style>
