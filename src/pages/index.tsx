import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type SectionLink = {
  title: string;
  description: string;
  cta: string;
  to: string;
};

const sectionLinks: SectionLink[] = [
  {
    title: 'Getting Started',
    description: 'Start from a fresh machine overview and follow the recommended setup path.',
    cta: 'Start here',
    to: '/docs/getting-started/fresh-machine-overview',
  },
  {
    title: 'Machine Setup',
    description: 'Install core tools, configure SSH, and validate your environment.',
    cta: 'Set up tools',
    to: '/docs/machine-setup',
  },
  {
    title: 'Project Setup',
    description: 'Bootstrap new projects with repeatable, practical setup steps.',
    cta: 'Bootstrap project',
    to: '/docs/project-setup',
  },
  {
    title: 'Workflows',
    description: 'Follow reusable flows for starting or cloning projects.',
    cta: 'Use workflows',
    to: '/docs/workflows',
  },
  {
    title: 'Standards',
    description: 'Keep conventions clear so tooling and project structure stay consistent.',
    cta: 'Review standards',
    to: '/docs/standards',
  },
  {
    title: 'Troubleshooting & Templates',
    description: 'Capture fixes and reuse templates to keep docs easy to expand.',
    cta: 'Fix and reuse',
    to: '/docs/troubleshooting',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Personal developer playbook for repeatable setup processes and workflows.">
      <main>
        <section className={styles.sectionGrid}>
          <div className="container">
            <div className={styles.sectionHeadingWrap}>
              <Heading as="h2" className={styles.sectionHeading}>
                Explore The Playbook
              </Heading>
              <p className={styles.sectionLead}>
                Jump into any stage or follow the sequence from setup to standards.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {sectionLinks.map((section) => (
                <Link className={styles.card} key={section.title} to={section.to}>
                  <Heading as="h2" className={styles.cardTitle}>
                    {section.title}
                  </Heading>
                  <p className={styles.cardDescription}>{section.description}</p>
                  <span className={styles.cardCta}>{section.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
