<script lang="ts">
	import { resolve } from '$app/paths';
	import PageMeta from '#lib/components/PageMeta.svelte';
</script>

<PageMeta path="/about" />

<h1 class="display-title mb-4">About Me</h1>
<p class="mb-4 text-lg">
	Hi! I'm a senior software engineer with over a decade of experience in building robust web and
	mobile applications. My expertise spans across modern JavaScript frameworks and libraries, with a
	strong focus on <strong class="font-semibold">SvelteKit</strong> for web frontends and
	<strong class="font-semibold">React Native</strong> with
	<strong class="font-semibold">Expo</strong> for mobile development. I thrive in
	<strong class="font-semibold">TypeScript</strong> environments and love creating clean, maintainable
	code.
</p>
<p class="mb-4 text-lg">
	On the backend, I work extensively with <strong class="font-semibold">Node.js</strong> and
	<strong class="font-semibold">Express</strong>, leveraging TypeScript to build scalable and
	performant APIs. Over the years, I've worked on a wide range of projects, from dynamic web
	applications to complex mobile solutions, always with an eye on performance, scalability, and user
	experience.
</p>
<p class="mb-4 text-lg">
	I'm passionate about staying current with new technologies, continuously refining my skills, and
	contributing to open-source projects. When I'm not coding, you can find me exploring new
	development trends or sharing knowledge with the tech community.
</p>
<p class="text-lg">
	Feel free to check out my <a href={resolve('/work')}>latest projects</a> or
	<a href={resolve('/contact')}>reach out</a> if you'd like to collaborate!
</p>
