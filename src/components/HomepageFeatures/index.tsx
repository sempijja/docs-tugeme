import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Hero/Intro Section
function HeroSection() {
  return (
    <section className={clsx(styles.heroSection, 'margin-bottom--xl')}>
      <div className="container text--center">
        <h1 className={styles.projectTitle}>Tugeme</h1>
        <p className={styles.projectTagline}>
          Tugeme is an immunization system (web and mobile) designed to improve vaccination rates and tracking in Uganda.
        </p>
        <p className={styles.projectPurpose}>
          <strong>Docs Purpose:</strong> Document all frontend features and serve as the single source of truth for builds and versioning. <br />
          <span className={styles.audience}>Target audience: Internal teams</span>
        </p>
      </div>
    </section>
  );
}

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Immunization Tracking',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Track vaccination schedules, patient records, and coverage analytics in real time. Tugeme ensures no one is left behind in Uganda's immunization efforts.
      </>
    ),
  },
  {
    title: 'Unified Web & Mobile Experience',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Access Tugeme from any device. Our responsive design and cross-platform support empower health workers and administrators everywhere.
      </>
    ),
  },
  {
    title: 'Reliable Documentation & Versioning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This documentation is the single source of truth for all frontend features, builds, and version history—ensuring consistency and clarity for internal teams.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <HeroSection />
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
