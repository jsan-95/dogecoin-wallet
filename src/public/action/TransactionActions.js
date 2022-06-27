import Connection from "../constant/Connection";
import ObjectUtils from "../util/model/ObjectUtils";
import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_FAILURE, FETCH_TRANSACTIONS_SUCCESS, POST_TRANSACTION, POST_TRANSACTION_FAILURE, POST_TRANSACTION_SUCCESS } from "./Types";


export const fetchTransactions = (email) => {
    console.log("fetching transactions");
    return (dispatch) => {
        dispatch(fetchTransactionsStart());

        const url = Connection.url + `api/transactions/${email}`;
        fetch(url).then((response) => {
            return response.status === 200 ?
                response.json() :
                response.text().then((error) => Promise.reject(error))
        }
        ).then(
            (transactions) => dispatch(fetchTransactionsSuccess(transactions))
        ).catch(
            (error) => dispatch(fetchTransactionsFailure(ObjectUtils.toString(error)))
        );
    }
};

const fetchTransactionsStart = () => ({
    type: FETCH_TRANSACTIONS
});

const fetchTransactionsSuccess = (transactions) => ({
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload: { transactions }
});

const fetchTransactionsFailure = (error) => ({
    type: FETCH_TRANSACTIONS_FAILURE,
    payload: { error }
});


export const postTransaction = (data) => {
    console.log("Post transaction");
    console.log(data);
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return (dispatch) => {
        dispatch(postTransactionStart());

        const url = Connection.url + `api/transactions`;
        fetch(url, requestOptions).then((response) => {
            console.log("response")
            console.log(response)
            return response.status === 200 ?
                response.json() :
                response.text().then((error) => Promise.reject(error))
        }
        ).then(
            (transactions) => {
                console.log("result:");
                console.log(transactions);
                dispatch(postTransactionSuccess(transactions))
            }
        ).catch(
            (error) => {
                console.log("Error");
                console.log(error);
                dispatch(postTransactionsFailure(ObjectUtils.toString(error)));
            }
        );
    }
};

const postTransactionStart = () => ({
    type: POST_TRANSACTION
});

const postTransactionSuccess = (transactions) => ({
    type: POST_TRANSACTION_SUCCESS,
    payload: { transactions }
});

const postTransactionsFailure = (error) => ({
    type: POST_TRANSACTION_FAILURE,
    payload: { error }
});