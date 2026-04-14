import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Developer Playbook',
  tagline: 'Repeatable setup processes for machines, projects, and workflows.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://timsunid.github.io',
  baseUrl: '/developer-playbook/',
  trailingSlash: false,

  organizationName: 'timsunID',
  projectName: 'developer-playbook',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/timsunID/developer-playbook/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Developer Playbook',
      logo: {
        alt: 'Developer Playbook logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/timsunID/developer-playbook',
          'aria-label': 'GitHub repository',
          className: 'navbar-github-link',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
