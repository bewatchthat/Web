import axios, { AxiosError } from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import AddResourceModel from '../../models/add-resource.model';
import ResourceModel from '../../models/resource.model';
import AppState from '../state/app-state';

export const ADD_RESOURCE_SUCCESS = 'ADD_RESOURCE_SUCCESS';

interface AddResourceSuccessAction extends Action {
  type: typeof ADD_RESOURCE_SUCCESS;
  resource: ResourceModel;
}

export type ResourceAction = AddResourceSuccessAction;

function addResourceSuccess(resource: ResourceModel): AddResourceSuccessAction {
  return {
    type: ADD_RESOURCE_SUCCESS,
    resource
  };
}

export function addResource(addResourceModel: AddResourceModel): ThunkAction<Promise<void>, AppState, {}, ResourceAction> {
  return (dispatch) => {
    return axios.post<ResourceModel>('/api/resources', addResourceModel)
      .then(x => {
        dispatch(addResourceSuccess(x.data));
      })
      .catch((x: AxiosError) => Promise.reject(x.message));
  };
}
