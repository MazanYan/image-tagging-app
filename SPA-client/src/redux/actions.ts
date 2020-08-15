import { TOGGLE_SIDEBAR } from './actionTypes';

export interface ReduxAction {
    type: string,
    payload?: object
}

export const toggleSidebar = () : ReduxAction => ({
    type: TOGGLE_SIDEBAR
});
