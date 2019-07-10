import { ADD_RESOURCE_REQUEST, ADD_RESOURCE_SUCCESS, ResourceAction } from '../actions/resource.actions';
import AppState, { defaultAppState } from '../state/app-state';

export default function resourceReducer(state = defaultAppState, action: ResourceAction): AppState {
  switch (action.type) {
    case ADD_RESOURCE_REQUEST:
      return {
        ...state,
        resources: [
          ...state.resources,
          action.resource
        ]
      };
    case ADD_RESOURCE_SUCCESS:
      const temporaryResourceIndex = state.resources.findIndex(x => x.id === action.temporaryId);
      const resources = [...state.resources];

      resources[temporaryResourceIndex] = action.resource;

      return {
        ...state,
        resources
      };
    default:
      return state;
  }
}
