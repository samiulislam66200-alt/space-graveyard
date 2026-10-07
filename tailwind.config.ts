import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          bg: '#05070d',
          card: '#0b101d',
          border: '#1b253b',
          amber: '#f59e0b',
          cyan: '#06b6d4',
          mars: '#e11d48',
          moon: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      }
    },
  },
  plugins: [],
};
export default config;
