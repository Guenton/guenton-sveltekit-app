
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Outfit`,
		"--theme-font-family-heading": `Montserrat`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "var(--color-secondary-900)",
		"--on-warning": "var(--color-error-600)",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #EC1B1E 
		"--color-primary-50": "252 221 221", // #fcdddd
		"--color-primary-100": "251 209 210", // #fbd1d2
		"--color-primary-200": "250 198 199", // #fac6c7
		"--color-primary-300": "247 164 165", // #f7a4a5
		"--color-primary-400": "242 95 98", // #f25f62
		"--color-primary-500": "236 27 30", // #EC1B1E
		"--color-primary-600": "212 24 27", // #d4181b
		"--color-primary-700": "177 20 23", // #b11417
		"--color-primary-800": "142 16 18", // #8e1012
		"--color-primary-900": "116 13 15", // #740d0f
		// secondary | #FFC857 
		"--color-secondary-50": "255 247 230", // #fff7e6
		"--color-secondary-100": "255 244 221", // #fff4dd
		"--color-secondary-200": "255 241 213", // #fff1d5
		"--color-secondary-300": "255 233 188", // #ffe9bc
		"--color-secondary-400": "255 217 137", // #ffd989
		"--color-secondary-500": "255 200 87", // #FFC857
		"--color-secondary-600": "230 180 78", // #e6b44e
		"--color-secondary-700": "191 150 65", // #bf9641
		"--color-secondary-800": "153 120 52", // #997834
		"--color-secondary-900": "125 98 43", // #7d622b
		// tertiary | #817F75 
		"--color-tertiary-50": "236 236 234", // #ececea
		"--color-tertiary-100": "230 229 227", // #e6e5e3
		"--color-tertiary-200": "224 223 221", // #e0dfdd
		"--color-tertiary-300": "205 204 200", // #cdccc8
		"--color-tertiary-400": "167 165 158", // #a7a59e
		"--color-tertiary-500": "129 127 117", // #817F75
		"--color-tertiary-600": "116 114 105", // #747269
		"--color-tertiary-700": "97 95 88", // #615f58
		"--color-tertiary-800": "77 76 70", // #4d4c46
		"--color-tertiary-900": "63 62 57", // #3f3e39
		// success | #F8F4F9 
		"--color-success-50": "254 253 254", // #fefdfe
		"--color-success-100": "254 253 254", // #fefdfe
		"--color-success-200": "253 252 254", // #fdfcfe
		"--color-success-300": "252 251 253", // #fcfbfd
		"--color-success-400": "250 247 251", // #faf7fb
		"--color-success-500": "248 244 249", // #F8F4F9
		"--color-success-600": "223 220 224", // #dfdce0
		"--color-success-700": "186 183 187", // #bab7bb
		"--color-success-800": "149 146 149", // #959295
		"--color-success-900": "122 120 122", // #7a787a
		// warning | #F8F4F9 
		"--color-warning-50": "254 253 254", // #fefdfe
		"--color-warning-100": "254 253 254", // #fefdfe
		"--color-warning-200": "253 252 254", // #fdfcfe
		"--color-warning-300": "252 251 253", // #fcfbfd
		"--color-warning-400": "250 247 251", // #faf7fb
		"--color-warning-500": "248 244 249", // #F8F4F9
		"--color-warning-600": "223 220 224", // #dfdce0
		"--color-warning-700": "186 183 187", // #bab7bb
		"--color-warning-800": "149 146 149", // #959295
		"--color-warning-900": "122 120 122", // #7a787a
		// error | #E41111 
		"--color-error-50": "251 219 219", // #fbdbdb
		"--color-error-100": "250 207 207", // #facfcf
		"--color-error-200": "248 196 196", // #f8c4c4
		"--color-error-300": "244 160 160", // #f4a0a0
		"--color-error-400": "236 88 88", // #ec5858
		"--color-error-500": "228 17 17", // #E41111
		"--color-error-600": "205 15 15", // #cd0f0f
		"--color-error-700": "171 13 13", // #ab0d0d
		"--color-error-800": "137 10 10", // #890a0a
		"--color-error-900": "112 8 8", // #700808
		// surface | #1D201F 
		"--color-surface-50": "221 222 221", // #dddedd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "199 199 199", // #c7c7c7
		"--color-surface-300": "165 166 165", // #a5a6a5
		"--color-surface-400": "97 99 98", // #616362
		"--color-surface-500": "29 32 31", // #1D201F
		"--color-surface-600": "26 29 28", // #1a1d1c
		"--color-surface-700": "22 24 23", // #161817
		"--color-surface-800": "17 19 19", // #111313
		"--color-surface-900": "14 16 15", // #0e100f
		
	}
}