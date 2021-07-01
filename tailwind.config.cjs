const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

const config = {
	mode: 'aot',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			]
		},
		safelist: [/^svelte-[\d\w]+$/]
	},
	theme: {
		extend: {
			colors: {
				'blue-chill': {
					DEFAULT: '#0EA2B5',
					50: '#DAF8FC',
					100: '#BEF3FA',
					200: '#85E9F6',
					300: '#4CDEF1',
					400: '#13D4ED',
					500: '#0EA2B5',
					600: '#0B808F',
					700: '#085E69',
					800: '#053C43',
					900: '#021A1E'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};

module.exports = config;
