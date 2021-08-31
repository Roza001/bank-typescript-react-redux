import { ActionType} from "../action-types/actionTypes"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

export type Action = DepositAction | WithdrawAction;