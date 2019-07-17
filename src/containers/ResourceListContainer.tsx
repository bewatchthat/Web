import * as React from 'react';
import { connect } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';
import ResourceList from '../components/resource-list/ResourceList';
import ResourceModel from '../models/resource.model';
import { loadResources } from '../redux/actions/resource.actions';
import AppState from '../redux/state/app-state';

interface ResourceLoaderHookData {
  isLoading: boolean;
  error?: string;
}

function useResourceLoader(getResources: () => Promise<void>): ResourceLoaderHookData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    setIsLoading(true);

    getResources()
      .then(() => setError(undefined))
      .catch(x => setError(x.message))
      .finally(() => setIsLoading(false));
  }, [getResources]);

  return { isLoading, error };
}

interface ResourceListContainerStateProps {
  resources: ResourceModel[];
}

interface ResourceListContainerDispatchProps {
  loadResources: () => Promise<void>;
}

type ResourceListContainerProps = ResourceListContainerStateProps & ResourceListContainerDispatchProps;

function ResourceListContainer({ resources, loadResources }: ResourceListContainerProps) {
  const { isLoading, error } = useResourceLoader(loadResources);

  if (error) {
    return <ErrorAlert text={ error }/>;
  }

  if (isLoading && !resources.length) {
    return <p>Loading...</p>;
  }

  const onResourceWorthClick = () => {

  };

  const onResourceNotWorthClick = () => {

  };

  return <ResourceList resources={ resources } onResourceWorthClick={ onResourceWorthClick } onResourceNotWorthClick={ onResourceNotWorthClick }/>;
}

export default connect<ResourceListContainerStateProps, ResourceListContainerDispatchProps, {}, AppState>(
  ({ resources }) => ({ resources }),
  // @ts-ignore
  { loadResources }
)(React.memo(ResourceListContainer));
