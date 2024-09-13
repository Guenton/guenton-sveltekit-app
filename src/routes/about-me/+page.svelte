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
				<section id="about-me">
					<h1 class="h1 mb-4">About Me</h1>
					<p class="text-lg mb-4">
						Hi! I'm a senior software engineer with over a decade of experience in building robust
						web and mobile applications. My expertise spans across modern JavaScript frameworks and
						libraries, with a strong focus on <strong class="font-semibold">SvelteKit</strong>
						for web frontends and <strong class="font-semibold">React Native</strong>
						with <strong class="font-semibold">Expo</strong> for mobile development. I thrive in
						<strong class="font-semibold">TypeScript</strong> environments and love creating clean, maintainable
						code.
					</p>

					<p class="text-lg mb-4">
						On the backend, I work extensively with <strong class="font-semibold">Node.js</strong>
						and <strong class="font-semibold">Express</strong>, leveraging TypeScript to build
						scalable and performant APIs. Over the years, I’ve worked on a wide range of projects,
						from dynamic web applications to complex mobile solutions, always with an eye on
						performance, scalability, and user experience.
					</p>

					<p class="text-lg mb-4">
						I'm passionate about staying current with new technologies, continuously refining my
						skills, and contributing to open-source projects. When I'm not coding, you can find me
						exploring new development trends or sharing knowledge with the tech community.
					</p>

					<p class="text-lg">
						Feel free to check out my latest projects or reach out if you'd like to collaborate!
					</p>
				</section>
			</div>
		</div>
	</AppContainer>
</HomeContainer>
