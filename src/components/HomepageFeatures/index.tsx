import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kubernetes-native job platform',
    description: (
      <>
        Furiko is a Kubernetes-native job platform to schedule, execute, queue
        and manage jobs. Specify job configs that can be automatically executed
        on a recurring schedule, or run on an ad-hoc basis.
      </>
    ),
  },
  {
    title: 'Cron scheduling',
    description: (
      <>
        Schedule jobs automatically based on a cron schedule up to a per-second
        granularity. Schedules can optionally be specified subject to a specific
        timezone, or additional constraints (e.g. up to a certain date).
      </>
    ),
  },
  {
    title: 'Executing jobs now or later',
    description: (
      <>
        Execute jobs immediately, or enqueue them to start after current
        executions are finished, or to only start at a later date.
      </>
    ),
  },
  {
    title: 'Job options and parameters',
    description: (
      <>
        Create job configs that are parameterizable, accepting and validating
        arguments to the job, making workloads more generic and reusable.
      </>
    ),
  },
  {
    title: 'Reliable scheduling guarantees',
    description: (
      <>
        Furiko utilizes several tricks to ensure that jobs are run in a timely
        manner. It is able to detect double runs and missed runs in many cases,
        providing reliability in the face of failure.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <h1>What is Furiko?</h1>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
