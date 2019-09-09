import * as React from 'react';
import ErrorAlert from '../components/ErrorAlert';
import ResourceList from '../components/resource-list/ResourceList';
import { loadResources } from '../redux/actions/resource.actions';
import useAsyncDispatch from '../redux/use-async-dispatch';
import useStateSelector from '../redux/use-state-selector';

function ResourceListContainer() {
  const resources = useStateSelector(state => state.resources);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();
  const dispatch = useAsyncDispatch();

  React.useEffect(() => {
    setLoading(true);

    dispatch(loadResources())
      .then(() => setError(undefined))
      .catch(x => setError(x.message))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (error) {
    return <ErrorAlert text={ error }/>;
  }

  if (loading && !resources.length) {
    return <p>Loading...</p>;
  }

  const onResourceWorthClick = () => {

  };

  const onResourceNotWorthClick = () => {

  };

  return <ResourceList resources={ resources } onResourceWorthClick={ onResourceWorthClick } onResourceNotWorthClick={ onResourceNotWorthClick }/>;
}

export default React.memo(ResourceListContainer);
