import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyan: {
					glow: 'hsl(var(--cyan-glow))',
					subtle: 'hsl(var(--cyan-subtle))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-dark': 'var(--gradient-dark)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'subtle': 'var(--shadow-subtle)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				'orbit-planet-1': {
					'0%': {
						transform: 'rotate(0deg) translateX(120px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(120px) rotate(-360deg)'
					}
				},
				'orbit-planet-2': {
					'0%': {
						transform: 'rotate(0deg) translateX(200px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(200px) rotate(-360deg)'
					}
				},
				'orbit-planet-3': {
					'0%': {
						transform: 'rotate(0deg) translateX(300px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(300px) rotate(-360deg)'
					}
				},
				'bitcoin-journey': {
					'0%': {
						transform: 'translateX(-100px) translateY(20vh) rotate(0deg) scale(1)',
						opacity: '0'
					},
					'5%': {
						opacity: '1'
					},
					'15%': {
						transform: 'translateX(15vw) translateY(10vh) rotate(45deg) scale(1.2)'
					},
					'25%': {
						transform: 'translateX(30vw) translateY(30vh) rotate(90deg) scale(0.8)'
					},
					'35%': {
						transform: 'translateX(45vw) translateY(60vh) rotate(135deg) scale(1.1)'
					},
					'50%': {
						transform: 'translateX(60vw) translateY(40vh) rotate(180deg) scale(0.9)'
					},
					'65%': {
						transform: 'translateX(75vw) translateY(70vh) rotate(225deg) scale(1.3)'
					},
					'75%': {
						transform: 'translateX(85vw) translateY(25vh) rotate(270deg) scale(1.0)'
					},
					'85%': {
						transform: 'translateX(90vw) translateY(50vh) rotate(315deg) scale(1.1)'
					},
					'95%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 100px)) translateY(80vh) rotate(360deg) scale(0.8)',
						opacity: '0'
					}
				},
				'rocket-chase': {
					'0%': {
						transform: 'translateX(-150px) translateY(25vh) rotate(-15deg) scale(0.8)',
						opacity: '0'
					},
					'8%': {
						opacity: '1'
					},
					'18%': {
						transform: 'translateX(12vw) translateY(15vh) rotate(30deg) scale(1.0)'
					},
					'28%': {
						transform: 'translateX(27vw) translateY(35vh) rotate(75deg) scale(0.9)'
					},
					'38%': {
						transform: 'translateX(42vw) translateY(65vh) rotate(120deg) scale(1.1)'
					},
					'53%': {
						transform: 'translateX(57vw) translateY(45vh) rotate(165deg) scale(0.95)'
					},
					'68%': {
						transform: 'translateX(72vw) translateY(75vh) rotate(210deg) scale(1.2)'
					},
					'78%': {
						transform: 'translateX(82vw) translateY(30vh) rotate(255deg) scale(1.05)'
					},
					'88%': {
						transform: 'translateX(87vw) translateY(55vh) rotate(300deg) scale(1.15)'
					},
					'98%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 150px)) translateY(85vh) rotate(345deg) scale(0.9)',
						opacity: '0'
					}
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(180 100% 60% / 0.4), 0 0 40px hsl(180 100% 60% / 0.2)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(180 100% 60% / 0.8), 0 0 80px hsl(180 100% 60% / 0.4)'
					}
				},
				'levitate': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(5deg)' },
					'66%': { transform: 'translateY(-8px) rotate(-3deg)' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(180 100% 60% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(180 100% 60% / 0.6)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'orbit-planet-1': 'orbit-planet-1 15s linear infinite',
				'orbit-planet-2': 'orbit-planet-2 25s linear infinite',
				'orbit-planet-3': 'orbit-planet-3 35s linear infinite',
				'bitcoin-journey': 'bitcoin-journey 25s ease-in-out infinite',
				'rocket-chase': 'rocket-chase 25s ease-in-out infinite 2s',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'levitate': 'levitate 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.7s ease-out',
				'rotate-slow': 'rotate-slow 30s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
