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
            {label: 'Demon\'s Souls (2020)', autogenerate: {directory: 'demonssouls2020'}, badge: {text: 'New', variant: 'success'}},
            {slug: 'bloodborne', badge: 'Outdated'}, 
            {slug: 'darksouls', badge: 'Outdated'},
            {slug: 'darksouls2', badge: 'Outdated'},
            {slug: 'darksouls3', badge: 'Outdated'},
            {slug: 'demonssouls', badge: 'Outdated'},
            {slug: 'desremake', badge: 'Outdated'},
            {slug: 'ds1remaster', badge: 'Outdated'},
            {slug: 'ds2sotfs', badge: 'Outdated'},
            {slug: 'eldenring', badge: 'Outdated'},
          ],
      }),
    ],

  adapter: vercel(),
});