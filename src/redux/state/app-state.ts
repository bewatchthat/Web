import ResourceModel from '../../models/resource.model';

export default interface AppState {
  resources: ResourceModel[];
}

export const defaultAppState: AppState = {
  resources: []
};
