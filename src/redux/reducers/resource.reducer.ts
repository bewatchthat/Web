import { ADD_RESOURCE_SUCCESS, ResourceAction } from '../actions/resource.actions';
import AppState, { defaultAppState } from '../state/app-state';

export default function resourceReducer(state = defaultAppState, action: ResourceAction): AppState {
  switch (action.type) {
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
