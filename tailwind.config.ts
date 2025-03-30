import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {

        'custom-grid': 'repeat(auto-fit, minmax(0, 150px))',

      },
      colors: {
        background: "var(--primary)",
        foreground: "var(--secondary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "secondary-opacity": "var(--secondary-opacity)",
        "super-light-blue": "var(--super-light-blue)",
        "normal-blue": "var(--blue)",
        "cyan-blue": "var(--cyan-blue)",
      },
      fontFamily: {
        'headings': "var(--font-bebas-neue)"
      },
      boxShadow: {
        'custom-blue': '0px 0px 5px 2px rgba(147,188,240,1)'
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.super-light-blue"),
            '--tw-prose-links': theme('colors.super-light-blue'),
            h1: {
              fontSize: '6rem',
              letterSpacing: '.07em',
            },
            h2: {
              fontSize: '4rem',
              letterSpacing: '.07em',
            },
            h3: {
              fontSize: '3rem',
              letterSpacing: '.07em',
            },
            h4: {
              fontSize: '1.5rem',
              letterSpacing: '.07em',
            }
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
