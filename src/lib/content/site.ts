import type { FocusArea, NavItem, PageCopy, ProfileLink, SitePath } from '#lib/types/site.js';

/** Public origin used for canonical URLs and the sitemap. */
export const origin = 'https://www.guenton.com';

/** Local storage key for the visitor's color mode. */
export const modeStorageKey = 'guenton-mode';

/** Roles shown on the home page. */
export const roles = ['Web & Mobile Pro', 'UI/UX Specialist'] as const;

/**
 * Bio paragraphs from the previous about page, excluding the closing invitation.
 * The closing sentence is rendered with links in the about page.
 */
export const bioParagraphs = [
	"Hi! I'm a senior software engineer with over a decade of experience in building robust web and mobile applications. My expertise spans across modern JavaScript frameworks and libraries, with a strong focus on SvelteKit for web frontends and React Native with Expo for mobile development. I thrive in TypeScript environments and love creating clean, maintainable code.",
	"On the backend, I work extensively with Node.js and Express, leveraging TypeScript to build scalable and performant APIs. Over the years, I've worked on a wide range of projects, from dynamic web applications to complex mobile solutions, always with an eye on performance, scalability, and user experience.",
	"I'm passionate about staying current with new technologies, continuously refining my skills, and contributing to open-source projects. When I'm not coding, you can find me exploring new development trends or sharing knowledge with the tech community.",
] as const;

/** Focus areas named in the bio. These are not client case studies. */
export const focusAreas: readonly FocusArea[] = [
	{
		id: 'sveltekit',
		title: 'SvelteKit',
		summary: 'Web frontends, with a focus on clean and maintainable code.',
	},
	{
		id: 'react-native',
		title: 'React Native and Expo',
		summary: 'Mobile applications built with React Native and Expo.',
	},
	{
		id: 'typescript',
		title: 'TypeScript',
		summary: 'Typed code across web, mobile, and API work.',
	},
	{
		id: 'node',
		title: 'Node.js and Express',
		summary: 'APIs built with an eye on performance, scalability, and user experience.',
	},
];

/** Inbox for the site. */
export const email: ProfileLink = {
	href: 'mailto:guenton@gmail.com',
	label: 'guenton@gmail.com',
};

/** GitHub profile. Shown on the contact page. */
export const github: ProfileLink = {
	href: 'https://github.com/Guenton',
	label: 'GitHub',
};

/** LinkedIn profile. Shown on the contact page only. */
export const linkedin: ProfileLink = {
	href: 'https://www.linkedin.com/in/guenton-brooks-164b5a2a8/',
	label: 'LinkedIn',
};

/** Public pages, in sitemap order. */
export const pages: readonly PageCopy[] = [
	{
		path: '/',
		title: 'GuenTon',
		description:
			'GuenTon is a senior software engineer building web and mobile products with SvelteKit, React Native, and TypeScript.',
	},
	{
		path: '/about',
		title: 'About',
		description:
			'Senior software engineer with over a decade of experience in SvelteKit, React Native, Expo, TypeScript, Node.js, and Express.',
	},
	{
		path: '/work',
		title: 'Portofolio',
		description:
			'Focus areas: SvelteKit, React Native and Expo, TypeScript, and Node.js with Express.',
	},
	{
		path: '/contact',
		title: 'Contact',
		description: 'Email GuenTon, or visit the GitHub and LinkedIn profiles.',
	},
	{
		path: '/policy',
		title: 'Privacy',
		description: 'Privacy note for the static GuenTon website.',
	},
];

/** Header links. Home is first and must match only the `/` pathname. */
export const nav: readonly NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About Me' },
	{ href: '/work', label: 'Portofolio' },
	{ href: '/contact', label: 'Contact' },
];

/** Footer links, including the privacy page. */
export const footerNav: readonly NavItem[] = [...nav, { href: '/policy', label: 'Privacy' }];

/**
 * Returns the copy for a public path.
 * @param path - Route path, including the leading slash.
 * @returns The matching page copy.
 * @throws {Error} When the path is not a public page.
 * @example
 * getPage('/about').title
 */
export const getPage = (path: SitePath): PageCopy => {
	const page = pages.find((item) => item.path === path);
	if (!page) {
		throw new Error(`Missing page copy for ${path}`);
	}
	return page;
};

/**
 * True when a nav href is the current page. Home matches only `/`.
 * @param pathname - The current URL pathname.
 * @param href - The link target.
 * @returns Whether the link should be marked current.
 * @example
 * isCurrentPath('/about', '/about')
 */
export const isCurrentPath = (pathname: string, href: string): boolean =>
	href === '/' ? pathname === '/' : pathname === href;

/**
 * Absolute canonical URL for a site path.
 * @param path - Route path, including the leading slash.
 * @returns The canonical URL.
 * @example
 * canonicalUrl('/contact')
 */
export const canonicalUrl = (path: SitePath): string =>
	path === '/' ? `${origin}/` : `${origin}${path}`;
