/**
 *
 * Asynchronously loads the component for OrganisationProfilePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
