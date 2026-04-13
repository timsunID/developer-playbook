import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type SectionLink = {
  title: string;
  description: string;
  to: string;
};

const sectionLinks: SectionLink[] = [
  {
    title: 'Getting Started',
    description: 'Start from a fresh machine overview and follow the recommended setup path.',
    to: '/docs/getting-started/fresh-machine-overview',
  },
  {
    title: 'Machine Setup',
    description: 'Install core tools, configure SSH, and validate your environment.',
    to: '/docs/machine-setup',
  },
  {
    title: 'Project Setup',
    description: 'Bootstrap new projects with repeatable, practical setup steps.',
    to: '/docs/project-setup',
  },
  {
    title: 'Workflows',
    description: 'Follow reusable flows for starting or cloning projects.',
    to: '/docs/workflows',
  },
  {
    title: 'Standards',
    description: 'Keep conventions clear so tooling and project structure stay consistent.',
    to: '/docs/standards',
  },
  {
    title: 'Troubleshooting & Templates',
    description: 'Capture fixes and reuse templates to keep docs easy to expand.',
    to: '/docs/troubleshooting',
  },
];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          A practical, step-by-step reference for machine setup, project setup,
          standards, and repeatable development workflows.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Open Playbook
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/fresh-machine-overview">
            Fresh Machine Path
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Personal developer playbook for repeatable setup processes and workflows.">
      <HomepageHeader />
      <main>
        <section className={styles.sectionGrid}>
          <div className="container">
            <div className={styles.cardGrid}>
              {sectionLinks.map((section) => (
                <Link className={styles.card} key={section.title} to={section.to}>
                  <Heading as="h2" className={styles.cardTitle}>
                    {section.title}
                  </Heading>
                  <p className={styles.cardDescription}>{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
