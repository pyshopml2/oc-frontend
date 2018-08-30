/**
 *
 * Asynchronously loads the component for UserProfilePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
