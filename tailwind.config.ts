import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Added src directory
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			},
  			sidebar: {
  				DEFAULT: 'var(--sidebar)',
  				foreground: 'var(--sidebar-foreground)',
  				primary: 'var(--sidebar-primary)',
  				'primary-foreground': 'var(--sidebar-primary-foreground)',
  				accent: 'var(--sidebar-accent)',
  				'accent-foreground': 'var(--sidebar-accent-foreground)',
  				border: 'var(--sidebar-border)',
  				ring: 'var(--sidebar-ring)'
  			},
  			// New button design system colors
  			main: 'var(--main)',
  			overlay: 'var(--overlay)',
  			bg: 'var(--bg)',
  			bw: 'var(--bw)',
  			blank: 'var(--blank)',
  			text: 'var(--text)',
  			mtext: 'var(--mtext)',
  			ringOffset: 'var(--ring-offset)',
  			secondaryBlack: '#212121',
  			// New button-1 design system colors
  			'gray-1000': 'var(--ds-gray-1000)',
  			'gray-1000-h': 'var(--ds-gray-1000-h)',
  			'gray-alpha-200': 'var(--ds-gray-alpha-200)',
  			'gray-alpha-400': 'var(--ds-gray-alpha-400)',
  			'background-100': 'var(--ds-background-100)',
  			'red-800': 'var(--ds-red-800)',
  			'red-900': 'var(--ds-red-900)',
  			'amber-800': 'var(--ds-amber-800)',
  			'amber-850': 'var(--ds-amber-850)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			base: '5px'
  		},
  		boxShadow: {
  			shadow: 'var(--shadow)',
  			'focus-ring': 'var(--ds-focus-ring)',
  			'border-small': 'var(--ds-shadow-border-small)'
  		},
  		translate: {
  			boxShadowX: '4px',
  			boxShadowY: '4px',
  			reverseBoxShadowX: '-4px',
  			reverseBoxShadowY: '-4px',
  		},
  		fontWeight: {
  			base: '500',
  			heading: '700',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-spin': 'fade-spin 1.2s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
