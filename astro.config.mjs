import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '4.IT',
			sidebar: [
				{
					label: 'Reference',
					autogenerate: { directory: 'classes' },
				},
			],
		}),
	],
});
