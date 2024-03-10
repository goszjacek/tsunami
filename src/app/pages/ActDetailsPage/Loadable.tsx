import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const ActDetails = lazyLoad(
  () => import('./index'),
  module => module.ActDetails,
  {
    fallback: <LoadingIndicator />,
  },
);
