import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './my_theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', 'src/lib/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        custom: [
          myCustomTheme
        ]
      }
    })
  ],
}

