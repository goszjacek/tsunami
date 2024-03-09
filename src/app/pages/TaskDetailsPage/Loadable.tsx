import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const TaskDetails = lazyLoad(
  () => import('./index'),
  module => module.TaskDetails,
  {
    fallback: <LoadingIndicator />,
  },
);
