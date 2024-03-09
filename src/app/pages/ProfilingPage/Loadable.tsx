import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const ProfilingPage = lazyLoad(
  () => import('./index'),
  module => module.ProfilingPage,
  {
    fallback: <LoadingIndicator />,
  },
);
