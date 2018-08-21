/**
 *
 * Asynchronously loads the component for BasicLayout
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
