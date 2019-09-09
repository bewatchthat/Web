import { useSelector } from 'react-redux';
import AppState from './state/app-state';

export default function useStateSelector<T>(selector: (state: AppState) => T) {
  return useSelector<AppState, T>(selector);
}
