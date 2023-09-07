import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({

			title: '4.IT',
			lastUpdated: true,
			sidebar: [
				{
					label: 'Anglický jazyk',
					autogenerate: { directory: 'AJ' },
					collapsed: true
				},
				{
					label: 'Český jazyk',
					autogenerate: { directory: 'CJ' },
					collapsed: true
				},
				{
					label: 'Matematika',
					autogenerate: { directory: 'M' },
					collapsed: true
				},
				{
					label: 'Literature',
					autogenerate: { directory: 'LU' },
					collapsed: true
				},
				{
					label: 'Mechatronika',
					autogenerate: { directory: 'MECH' },
					collapsed: true
				},
				{
					label: 'Počítačová grafika',
					autogenerate: { directory: 'PGR' },
					collapsed: true
				},
				{
					label: 'Programování Her',
					autogenerate: { directory: 'PHR' },
					collapsed: true
				},
				{
					label: 'Programování',
					autogenerate: { directory: 'PRG' },
					collapsed: true
				},
				{
					label: 'Programove vybaveni',
					autogenerate: { directory: 'PRV' },
					collapsed: true
				},
				{
					label: 'Seminář z českého jazyka',
					autogenerate: { directory: 'SEMINAR-CJ' },
					collapsed: true
				},
				{
					label: 'Seminář z matematiky',
					autogenerate: { directory: 'SEMINAR-M' },
					collapsed: true
				},
				{
					label: 'Webové aplikace',
					autogenerate: { directory: 'WAP' },
					collapsed: true
				}
			]
		}),
	],
});
