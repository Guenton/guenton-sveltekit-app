import { canonicalUrl, pages } from '#lib/content/site.js';

export const prerender = true;

/**
 * Returns the XML sitemap for the public pages.
 * @returns A sitemap document.
 */
export const GET = () => {
	const urls = pages.map((page) => `  <url><loc>${canonicalUrl(page.path)}</loc></url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
		},
	});
};
