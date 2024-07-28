import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
<<<<<<< HEAD
	base: '/interviewApp',
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
			},
		}),
	],
=======
  base: '/interviewApp/', 
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
      },
    }),
  ],
>>>>>>> ba992bb665ad9d6642f7b1dc7186b050a8d17932
});

