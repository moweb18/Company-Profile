/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'dm-sans': ['DM Sans', 'sans-serif'],
			},
			container: {
				center: true,
			},
			colors: {
				primary: '#2b95f6',
				orange: '#FFAB7B',
			},
			backgroundImage: {
				jumbotron: 'url(/bg-jumbotron.png)',
				'linear-jumbotron': 'linear-gradient(180deg, rgba(21, 164, 250, 0.96) 0%, rgba(3, 108, 228, 0.96) 100%)',
				trust: 'url(/bg-trust.png)',
				'linear-trust': 'linear-gradient(180deg, rgba(0, 90, 193, 0.88) 0%, rgba(9, 152, 238, 0.88) 100%);',
			},
			keyframes: {
				'waving-hand': {
					'0%, 60%, 100%': { transform: 'rotate(0deg) translateY(-4px)' },
					'10%, 30%': { transform: 'rotate(14deg) translateY(-4px)' },
					'20%': { transform: 'rotate(-8deg) translateY(-4px)' },
					'40%': { transform: 'rotate(-4.0deg) translateY(-4px)' },
					'50%': { transform: 'rotate(10deg) translateY(-4px)' },
				},
			},
			animation: {
				'waving-hand': 'waving-hand 2s infinite ',
			},
			screens: {
				xs: '576px',
			},
		},
	},
	plugins: [],
};
