import { redirectTo } from '#lib/routing/redirectTo.js';
import type { EntryGenerator, PageLoad } from './$types';

/**
 * Old auth URLs that should still resolve after the app was removed.
 * @returns The rest-parameter values to prerender.
 */
export const entries: EntryGenerator = () => [
	{ path: 'login' },
	{ path: 'signup' },
	{ path: 'forgot' },
	{ path: 'user' },
];

export const load: PageLoad = () => {
	redirectTo('/');
};
