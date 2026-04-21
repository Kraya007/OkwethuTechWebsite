/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height:{
				'10v': '10vh',
				'90v': '90vh'
			},
			colors:{
				'footer': '#041f2e',
				'side': '#051c27',
				'left': '#0c4a6e',
				'right': '#164e63',
				'left-card': '#096262',
				'right-card': '#0891b2',
				'up': '#021217',
				
			},
			backgroundImage:{
				'hero-large': "url('/okwethuLogo.jpeg')",
				'hero-small': "url('/okwethuLogoSmall.jpg')",
			},
			animation:{
				slide: 'slide 30s linear infinite',
			},
			keyframes: {
				slide: {
				  '100%': { transform: 'translate(-50%)' },
				}
			  }
		},
		components:{
			'.btn-hover':{
				colors: 'black'
			}
		},
		screens:{
			'mg': '510px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px'
		}
	},
	plugins: [],
}
