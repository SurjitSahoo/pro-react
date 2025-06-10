import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import proReact from '@site/static/img/pro-react.png';

import styles from './index.module.css';

function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.main}>
      <header className={styles.heroBanner}>
        <Heading as='h1'>{siteConfig.title}</Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
      </header>
      <main>
        <img src={proReact} className={styles.mainImage} />
        <div className={styles.bottomOverlay}>
          <p className={styles.description}>
            Pro React is a collection of best practices, tips, and tricks for building scalable, maintainable, and performant React applications. It
            covers everything from component design and state management to performance optimization and testing. Whether you're a beginner or an
            experienced React developer, Pro React will help you take your skills to the next level.
          </p>
          <div className={styles.button}>
            <Link className={styles.buttonLink} to='/docs/intro'>
              Become Pro 🚀
            </Link>
          </div>
        </div>
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
