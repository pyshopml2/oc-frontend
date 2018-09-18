/**
 *
 * Asynchronously loads the component for EditEmployeeForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
