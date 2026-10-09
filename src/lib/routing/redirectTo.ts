import { redirect } from '@sveltejs/kit';

/**
 * Permanently redirects the request to another path on this site.
 * @param location - In-app path, including the leading slash.
 * @throws Always, via SvelteKit's redirect.
 * @example
 * redirectTo('/about')
 */
export const redirectTo = (location: string): never => redirect(308, location);
