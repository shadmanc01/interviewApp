import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
	base: '/interviewApp',
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
			},
		}),
	],
});
