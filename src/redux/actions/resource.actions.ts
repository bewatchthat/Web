import axios, { AxiosError } from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import AddResourceModel from '../../models/add-resource.model';
import ResourceModel from '../../models/resource.model';
import history from '../../utils/history';
import AppState from '../state/app-state';

export const ADD_RESOURCE_REQUEST = 'ADD_RESOURCE_REQUEST';
export const ADD_RESOURCE_SUCCESS = 'ADD_RESOURCE_SUCCESS';
export const ADD_RESOURCE_FAILED = 'ADD_RESOURCE_FAILED';

interface AddResourceRequestAction extends Action {
  type: typeof ADD_RESOURCE_REQUEST;
}

interface AddResourceSuccessAction extends Action {
  type: typeof ADD_RESOURCE_SUCCESS;
  resource: ResourceModel;
}

interface AddResourceFailedAction extends Action {
  type: typeof ADD_RESOURCE_FAILED;
  errorMessage: string;
}

export type ResourceAction = AddResourceRequestAction | AddResourceSuccessAction | AddResourceFailedAction;

function addResourceRequest(): AddResourceRequestAction {
  return {
    type: ADD_RESOURCE_REQUEST
  };
}

function addResourceSuccess(resource: ResourceModel): AddResourceSuccessAction {
  return {
    type: ADD_RESOURCE_SUCCESS,
    resource
  };
}

function addResourceFailed(errorMessage: string): AddResourceFailedAction {
  return {
    type: ADD_RESOURCE_FAILED,
    errorMessage
  };
}

export function addResource(addResourceModel: AddResourceModel): ThunkAction<Promise<void>, AppState, {}, ResourceAction> {
  return (dispatch) => {
    dispatch(addResourceRequest());

    return axios.post<ResourceModel>('/api/resources', addResourceModel)
      .then(x => {
        dispatch(addResourceSuccess(x.data));
        history.push('/');
      })
      .catch((x: AxiosError) => {
        dispatch(addResourceFailed(x.message));
      });
  };
}
