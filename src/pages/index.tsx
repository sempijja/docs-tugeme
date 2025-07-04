import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Tugeme"
      description="Immunization system for Uganda: docs, features, and versioning."
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
