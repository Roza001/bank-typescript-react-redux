import { ActionType } from "../action-types/actionTypes";
import { Dispatch } from 'redux';
import { Action } from "../actions/IActions";

export const depositMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}