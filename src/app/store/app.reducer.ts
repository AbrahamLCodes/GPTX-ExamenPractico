import { ActionReducerMap } from '@ngrx/store';
import { MainState, mainreducer } from './reducer/main.reducer';

export interface AppState {
  mainReducer: MainState;
}

export const appReducers: ActionReducerMap<AppState> = {
  mainReducer: mainreducer
};
