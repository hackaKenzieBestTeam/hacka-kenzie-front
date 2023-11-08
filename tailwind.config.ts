import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      primary:{
        'brown': '#d87d4a',
        'dark': '#101010',
        'lightGray': '#F1F1F1',
        'veryLightGray': '#FAFAFA',
        'skin': '#FBAF85',
        'coolGray': '#F1F1F1',
        'white': '#FFFFFF',
        'black': '#000000'
      }
     }
    
    },
  },
  plugins: [],
}
export default config
