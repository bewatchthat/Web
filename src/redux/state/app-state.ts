import ResourceModel from '../../models/resource.model';

export default interface AppState {
  resources: ResourceModel[];
  addingResource: boolean;
  addResourceError?: string;
}

export const defaultAppState: AppState = {
  resources: [],
  addingResource: false
};
