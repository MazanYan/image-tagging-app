import { TOGGLE_SIDEBAR } from '../actionTypes';
import { ReduxAction } from '../actions';

const initialState = {
    sidebarOpen: false
};

export default function(state = initialState, action: ReduxAction) {
    console.log('Old state');
    console.log(state);
    switch (action.type) {
        case TOGGLE_SIDEBAR: return {
            ...state,
            sidebarOpen: !state.sidebarOpen
        };
        default: return state;
    }
}
