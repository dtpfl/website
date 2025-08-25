// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://soulsspeedruns.com',
  output: 'static',

  integrations: [
      starlight({
          customCss: [
              './src/styles/custom.css',
          ],
          favicon: '/favicon.ico',
          title: 'SoulsSpeedruns Wiki',
          editLink: {
            baseUrl: 'https://github.com/soulsspeedruns/website/edit/main/src/content/docs/',
          },
          logo: {
              src: '/src/images/SoulsSpeedrunsLogo.png',
              alt: 'SoulsSpeedruns Logo',
          },
          social: [
            { icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/soulsspeedruns.bsky.social' },
            { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/SoulsSpeedruns' },
            { icon: 'discord', label: 'Discord', href: 'https://discord.soulsspeedruns.com/' },
            { icon: 'github', label: 'GitHub', href: 'https://github.com/soulsspeedruns/website' },
            { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@SoulsSpeedruns' },
            { icon: 'twitch', label: 'Twitch', href: 'https://www.twitch.tv/SoulsSpeedruns' },
              
          ],
          sidebar: [
            {slug: 'bloodborne'}, 
            {slug: 'darksouls'},
            {slug: 'darksouls2'},
            {slug: 'darksouls3'},
            {slug: 'demonssouls'},
            {slug: 'desremake'},
            {slug: 'ds1remaster'},
            {slug: 'ds2sotfs'},
            {slug: 'eldenring'},
          ],
      }),
    ],

  adapter: vercel(),
});