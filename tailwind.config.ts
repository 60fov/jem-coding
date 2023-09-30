import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      sm: '-4px 4px 0 rgb(0 0 0 / 0.5)',
      DEFAULT: '-6px 6px 0 rgb(0 0 0 / 0.5)',
      md: '-8px 8px 0 rgb(0 0 0 / 0.5)',
      lg: '-12px 12px 0 rgb(0 0 0 / 0.5)',
      xl: '-16px 16px 0 rgb(0 0 0 / 0.5)',
      // inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
  },
  plugins: [],
}
export default config
