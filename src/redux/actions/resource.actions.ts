import axios, { AxiosError } from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import AddResourceModel from '../../models/add-resource.model';
import ResourceModel from '../../models/resource.model';
import AppState from '../state/app-state';

export const LOAD_RESOURCES_SUCCESS = 'LOAD_RESOURCES_SUCCESS';
export const ADD_RESOURCE_SUCCESS = 'ADD_RESOURCE_SUCCESS';

interface AddResourceSuccessAction extends Action {
  type: typeof ADD_RESOURCE_SUCCESS;
  resource: ResourceModel;
}

interface LoadResourcesSuccessAction extends Action {
  type: typeof LOAD_RESOURCES_SUCCESS;
  resources: ResourceModel[];
}

export type ResourceAction = LoadResourcesSuccessAction | AddResourceSuccessAction;

function loadResourcesSuccess(resources: ResourceModel[]): LoadResourcesSuccessAction {
  return {
    type: LOAD_RESOURCES_SUCCESS,
    resources
  };
}

function addResourceSuccess(resource: ResourceModel): AddResourceSuccessAction {
  return {
    type: ADD_RESOURCE_SUCCESS,
    resource
  };
}

const resourcesEndpoint = '/api/resources';
const unwrapErrorMessage = (error: AxiosError) => Promise.reject(error.message);

export function loadResources(): ThunkAction<Promise<void>, AppState, {}, LoadResourcesSuccessAction> {
  return dispatch =>
    axios.get<ResourceModel[]>(resourcesEndpoint)
      .then(x => {
        dispatch(loadResourcesSuccess(x.data));
      })
      .catch(unwrapErrorMessage);
}

export function addResource(addResourceModel: AddResourceModel): ThunkAction<Promise<void>, AppState, {}, AddResourceSuccessAction> {
  return dispatch =>
    axios.post<ResourceModel>(resourcesEndpoint, addResourceModel)
      .then(x => {
        dispatch(addResourceSuccess(x.data));
      })
      .catch(unwrapErrorMessage);
}
