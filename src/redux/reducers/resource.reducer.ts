import { ADD_RESOURCE_SUCCESS, LOAD_RESOURCES_SUCCESS, ResourceAction } from '../actions/resource.actions';
import AppState, { defaultAppState } from '../state/app-state';

export default function resourceReducer(state = defaultAppState, action: ResourceAction): AppState {
  switch (action.type) {
    case LOAD_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: action.resources
      };
    case ADD_RESOURCE_SUCCESS:
      return {
        ...state,
        resources: [
          ...state.resources,
          action.resource
        ]
      };
    default:
      return state;
  }
}
