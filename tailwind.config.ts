import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: 'var(--font-family)',
      },
      colors: {
        primary: 'var(--primary-color)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config
