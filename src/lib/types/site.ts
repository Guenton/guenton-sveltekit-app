/** Public routes that can be linked with SvelteKit's `resolve`. */
export type SitePath = '/' | '/about' | '/work' | '/contact' | '/policy';

/**
 * A page listed in the header or footer.
 */
export interface NavItem {
	href: SitePath;
	label: string;
}

/**
 * Copy and metadata for one public route.
 */
export interface PageCopy {
	path: SitePath;
	title: string;
	description: string;
}

/**
 * A practice area shown on the work page.
 */
export interface FocusArea {
	id: string;
	title: string;
	summary: string;
}

/**
 * An external profile or mailbox.
 */
export interface ProfileLink {
	href: string;
	label: string;
}

/**
 * Props for a link that leaves the site.
 */
export interface ExternalAnchorProps {
	href: string;
	class?: string;
}
