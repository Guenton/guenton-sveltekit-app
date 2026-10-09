import { redirectTo } from '#lib/routing/redirectTo.js';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	redirectTo('/work');
};
