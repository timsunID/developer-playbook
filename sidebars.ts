import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/fresh-machine-overview'],
    },
    {
      type: 'category',
      label: 'Machine Setup',
      items: [
        'machine-setup/machine-setup',
        'machine-setup/install-git',
        'machine-setup/install-fnm',
        'machine-setup/install-node-with-fnm',
        'machine-setup/enable-corepack-and-pnpm',
        'machine-setup/install-vscode',
        'machine-setup/setup-ssh-for-github',
        'machine-setup/create-dev-folders',
        'machine-setup/verify-machine-setup',
      ],
    },
    {
      type: 'category',
      label: 'Project Setup',
      items: [
        'project-setup/project-setup',
        'project-setup/create-react-vite-typescript-app',
        'project-setup/add-tailwind-to-vite-react',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/workflows',
        'workflows/start-a-new-project',
        'workflows/clone-an-existing-project',
      ],
    },
    {
      type: 'category',
      label: 'Standards',
      items: ['standards/standards', 'standards/node-package-manager-standards'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/troubleshooting',
        'troubleshooting/corepack-not-found',
        'troubleshooting/pnpm-not-found',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: ['templates/templates', 'templates/process-template'],
    },
  ],
};

export default sidebars;
