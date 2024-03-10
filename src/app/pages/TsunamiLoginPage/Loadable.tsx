import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const TsunamiLogin = lazyLoad(
  () => import('./index'),
  module => module.TsunamiLogin,
  {
    fallback: <LoadingIndicator />,
  },
);
