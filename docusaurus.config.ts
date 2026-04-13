import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Developer Playbook',
  tagline: 'Repeatable setup processes for machines, projects, and workflows.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://timsunid.github.io',
  baseUrl: '/developer-playbook/',

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
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/timsunID/developer-playbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Playbook',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Machine Setup',
              to: '/docs/machine-setup',
            },
            {
              label: 'Project Setup',
              to: '/docs/project-setup',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Workflows',
              to: '/docs/workflows',
            },
            {
              label: 'Standards',
              to: '/docs/standards',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/troubleshooting',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/timsunID/developer-playbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Developer Playbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
