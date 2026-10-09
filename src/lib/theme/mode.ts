import { modeStorageKey } from '#lib/content/site.js';

/** Supported color modes. Light is the default first paint. */
export type ColorMode = 'light' | 'dark';

/**
 * True when a stored value is a supported color mode.
 * @param value - Raw storage or attribute value.
 * @returns Whether the value is `light` or `dark`.
 * @example
 * isColorMode('dark')
 */
export const isColorMode = (value: string | null): value is ColorMode =>
	value === 'light' || value === 'dark';

/**
 * Reads the active color mode from the document, then local storage.
 * Falls back to light when neither source is set.
 * @returns The current color mode.
 * @example
 * getColorMode()
 */
export const getColorMode = (): ColorMode => {
	const attribute = document.documentElement.getAttribute('data-mode');
	if (isColorMode(attribute)) {
		return attribute;
	}
	const stored = localStorage.getItem(modeStorageKey);
	return isColorMode(stored) ? stored : 'light';
};

/**
 * Applies a color mode to the document and stores the choice.
 * Matches Skeleton's data-attribute dark mode strategy.
 * @param mode - The mode to apply.
 * @returns The mode now applied.
 * @see https://www.skeleton.dev/docs/svelte/guides/mode
 * @example
 * setColorMode('dark')
 */
export const setColorMode = (mode: ColorMode): ColorMode => {
	document.documentElement.setAttribute('data-mode', mode);
	localStorage.setItem(modeStorageKey, mode);
	return mode;
};
