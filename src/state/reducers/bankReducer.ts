import { Action } from "../actions/IActions";
import { ActionType} from "../action-types/actionTypes"

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        default:
            return state;
    }
}

export default reducer;