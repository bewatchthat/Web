import axios, { AxiosError } from 'axios';
import * as React from 'react';
import ErrorAlert from '../components/ErrorAlert';
import ResourceList from '../components/resource-list/ResourceList';
import ResourceModel from '../models/resource.model';

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

    axios
      .get<ResourceModel[]>('/api/resources')
      .then(x => setResources(x.data))
      .catch((x: AxiosError) => setError(x.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { resources, isLoading, error };
}

function useMockResources(): ResourceHookData {
  return {
    resources: [{
      id: 'first-id',
      title: 'Why Kubernetes is the silver bullet we\'ve all been waiting for',
      url: 'http://www.example.com'
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

  const onResourceWorthClick = () => {

  };

  const onResourceNotWorthClick = () => {

  };

  return <ResourceList resources={ resources } onResourceWorthClick={ onResourceWorthClick } onResourceNotWorthClick={ onResourceNotWorthClick }/>;
}

export default React.memo(ResourceListContainer);
