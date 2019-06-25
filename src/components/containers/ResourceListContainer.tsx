import * as React from 'react';
import ResourceModel from '../../models/resource.model';
import ErrorAlert from '../presenters/ErrorAlert';
import ResourceList from '../presenters/ResourceList';

interface ResourceHookData {
  resources: ResourceModel[];
  isLoading: boolean;
  error?: string;
}

function useResources(): ResourceHookData {
  const [resources, setResources] = React.useState<ResourceModel[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    setIsLoading(true);

    fetch('/api/resources')
      .then(x => {
        if (x.ok) {
          return x.json();
        } else {
          return Promise.reject('Error fetching resources!');
        }
      })
      .then(x => setResources(x))
      .catch(x => setError(x.message || x))
      .finally(() => setIsLoading(false));
  }, []);

  return { resources, isLoading, error };
}

function useMockResources(): ResourceHookData {
  return {
    resources: [{
      title: 'Why Kubernetes is the silver bullet we\'ve all been waiting for',
      url: 'http://www.example.com',
      worthCount: 2,
      notWorthCount: 1
    }],
    isLoading: false
  };
}

function ResourceListContainer() {
  const { resources, isLoading, error } = useMockResources();

  if (error) {
    return <ErrorAlert text={ error }/>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ResourceList resources={ resources }/>;
}

export default React.memo(ResourceListContainer);