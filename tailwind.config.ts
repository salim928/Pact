import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#041027',
        'accent-cyan': '#00E0FF',
        'silver': '#D0D6DD',
        'primary-start': '#00C6FF',
        'primary-end': '#0072FF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00C6FF, #0072FF)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
