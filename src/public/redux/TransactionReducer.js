import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_FAILURE, FETCH_TRANSACTIONS_SUCCESS, POST_TRANSACTION, POST_TRANSACTION_FAILURE, POST_TRANSACTION_SUCCESS } from "../action/Types";

const INITIAL_STATE = {
    loading: false,
    transactions: [],
    error: null
};

const TransactionReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {

        case FETCH_TRANSACTIONS:
            return Object.assign({}, state, {
                loading: true,
            });

        case FETCH_TRANSACTIONS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                transactions: payload.transactions
            });

        case FETCH_TRANSACTIONS_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: payload.error
            });

        case POST_TRANSACTION:
            return Object.assign({}, state, {
                loading: true,
            });

        case POST_TRANSACTION_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });

        case POST_TRANSACTION_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: payload.error
            });

        default:
            return state;
    }
}

export default TransactionReducer;