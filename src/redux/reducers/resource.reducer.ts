import { ADD_RESOURCE_FAILED, ADD_RESOURCE_REQUEST, ADD_RESOURCE_SUCCESS, ResourceAction } from '../actions/resource.actions';
import AppState, { defaultAppState } from '../state/app-state';

export default function resourceReducer(state = defaultAppState, action: ResourceAction): AppState {
  switch (action.type) {
    case ADD_RESOURCE_REQUEST:
      return {
        ...state,
        addingResource: true
      };
    case ADD_RESOURCE_SUCCESS:
      return {
        ...state,
        resources: [
          ...state.resources,
          action.resource
        ],
        addingResource: false,
        addResourceError: ''
      };
    case ADD_RESOURCE_FAILED:
      return {
        ...state,
        addingResource: false,
        addResourceError: action.errorMessage
      };
    default:
      return state;
  }
}
