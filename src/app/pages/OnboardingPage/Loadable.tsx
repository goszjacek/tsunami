import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const OnboardingPage = lazyLoad(
  () => import('./index'),
  module => module.OnboardingPage,
  {
    fallback: <LoadingIndicator />,
  },
);
