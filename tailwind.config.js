/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'can-hover': { raw: '(hover: hover)' },
				'cannot-hover': { raw: '(hover: none)' }
			},
			flexBasis: {
				prose: '65ch'
			}
		}
	},
	plugins: []
};
