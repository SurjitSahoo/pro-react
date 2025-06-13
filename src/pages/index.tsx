import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { AnimatedReactLogo } from '../components/reactLogo';

import styles from './index.module.css';

function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.main}>
      <header className={styles.heroBanner}>
        <Heading as='h1' className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
      </header>
      <main className={styles.flexMain}>
        <div className={styles.leftContent}>
          <div className={clsx(styles.animatedCard, styles.descContainer)}>
            <p className={styles.description}>
              Pro React is a collection of best practices, tips, and tricks for building scalable, maintainable, and performant React applications.
            </p>
            <p className={styles.description}>
              It covers everything from component design and state management to performance optimization and testing. Whether you're a beginner or an
              experienced React developer, Pro React will help you take your skills to the next level.
            </p>
          </div>
          <div className={styles.button}>
            <Link className={styles.buttonLink} to='/docs/intro'>
              Master React 🚀
            </Link>
          </div>
        </div>
        <AnimatedReactLogo className={styles.logo} />
      </main>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title='Master Advanced React Techniques'
      description='Unlock advanced React techniques, best practices, and expert tips to build scalable, high-performance applications. Level up your React skills with Pro React!'>
      <HomePage />
    </Layout>
  );
}
