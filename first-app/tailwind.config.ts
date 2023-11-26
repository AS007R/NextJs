import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '580px',
      

      'md': '920px',
      

      'lg': '1024px',
      

      'xl': '1280px',
      

      '2xl': '1536px',
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      keyframes:{
        'move-up':{
          '0%, 100%':{ transform: 'translateY(-7px)'},
          '50%':{ transform: 'translateY(0px)'}
        }
      },
      animation:{
        'move-up':'move-up 1.5s ease-in-out infinite'
      },
      
    },
  },
  plugins: [],
}
export default config
