import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import AppState from './state/app-state';

export default function useAsyncDispatch() {
  return useDispatch<ThunkDispatch<AppState, any, Action>>();
}
