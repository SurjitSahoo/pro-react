import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function NotFoundContent({ className }: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className='row'>
        <div className='col col--6 col--offset-3'>
          <Heading as='h1' className='hero__title'>
            <Translate id='theme.NotFound.title' description='The title of the 404 page'>
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate id='theme.NotFound.p1' description='The first paragraph of the 404 page'>
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate id='theme.NotFound.p2' description='The 2nd paragraph of the 404 page'>
              Please check the URL for typos or use the search bar to find what you are looking for.
            </Translate>
          </p>
          <p>
            <Translate id='theme.NotFound.p3' description='The 3rd paragraph of the 404 page'>
              If you think this is a mistake, please create an
            </Translate>
            <Link to={`https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}/issues`}> issue here</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
