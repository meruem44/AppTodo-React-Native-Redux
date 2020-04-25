import React, { useReducer } from 'react';
import { sha256 } from 'react-native-sha256';

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'CHECK':
            return state.map(item => (
                item.id === action.id
                    ? { ...item, check: !item.check }
                    : { ...item }
            ));
        case 'REMOVE':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default function store() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = async (item) => {
        // const hashId = await sha256(item);

        dispatch({
            type: 'ADD',
            item: {
                id: item,
                title: item,
                check: false
            }
        });
    };

    const checkItem = (id) => {
        dispatch({
            type: 'CHECK',
            id
        });
    };

    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE',
            id
        });
    };

    return [state, addItem, checkItem, removeItem];
}
