import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <p style={{ maxWidth: '50rem', margin: '2rem auto' }}>
          Pro React is a collection of best practices, tips, and tricks for building scalable, maintainable, and performant React applications. It
          covers everything from component design and state management to performance optimization and testing. Whether you're a beginner or an
          experienced React developer, Pro React will help you take your skills to the next level.
        </p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/intro'>
            Become Pro 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Master Advanced React Techniques'
      description='Unlock advanced React techniques, best practices, and expert tips to build scalable, high-performance applications. Level up your React skills with Pro React!'>
      <HomepageHeader />
      {/* <main>Main</main> */}
    </Layout>
  );
}
