import axios from 'axios';
import { Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import AddResourceModel from '../../models/add-resource.model';
import ResourceModel from '../../models/resource.model';
import temporaryId from '../../utils/temporary-id';
import AppState from '../state/app-state';

export const ADD_RESOURCE_REQUEST = 'ADD_RESOURCE_REQUEST';
export const ADD_RESOURCE_SUCCESS = 'ADD_RESOURCE_SUCCESS';

interface AddResourceAction extends Action {
  type: typeof ADD_RESOURCE_REQUEST | typeof ADD_RESOURCE_SUCCESS;
  resource: ResourceModel;
}

interface AddResourceRequestAction extends AddResourceAction {
  type: typeof ADD_RESOURCE_REQUEST;
}

interface AddResourceSuccessAction extends AddResourceAction {
  type: typeof ADD_RESOURCE_SUCCESS;
  temporaryId: string;
}

export type ResourceAction = AddResourceRequestAction | AddResourceSuccessAction;

function addResourceRequest(addResourceModel: AddResourceModel): AddResourceRequestAction {
  return {
    type: ADD_RESOURCE_REQUEST,
    resource: {
      ...addResourceModel,
      id: temporaryId()
    }
  };
}

function addResourceSuccess(resource: ResourceModel, temporaryId: string): AddResourceSuccessAction {
  return {
    type: ADD_RESOURCE_SUCCESS,
    resource,
    temporaryId
  };
}

export function addResource(addResourceModel: AddResourceModel): ThunkAction<Promise<void>, AppState, {}, AnyAction> {
  return (dispatch) => {
    const requestAction = addResourceRequest(addResourceModel);
    dispatch(requestAction);

    return axios.post<ResourceModel>('/api/resources', addResourceModel)
      .then(x => {
        dispatch(addResourceSuccess(x.data, requestAction.resource.id));
      });
  };
}
