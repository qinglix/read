import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: "https://github.com/qinglix/",
    integrations: [
        starlight({
            title: 'Read Website',
            description: "A website to read",
            social: {
                github: 'https://github.com/qinglix',
            },
            sidebar: [
                {
                    label: 'Preface',
                    link: '/preface',
                },
                {
                    label: 'Books',
                    autogenerate: {directory: 'books'},
                },
            ],
        }),
    ],
});
