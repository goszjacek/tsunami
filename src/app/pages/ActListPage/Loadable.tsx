import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const ActList = lazyLoad(
  () => import('./index'),
  module => module.ActList,
  {
    fallback: <LoadingIndicator />,
  },
);
