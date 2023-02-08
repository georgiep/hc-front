import { createContext, useState, useEffect , useReducer } from "react";

const StateContext = createContext({});
const DispatchContext = createContext({});

function reducer(state, action) {
    switch (action.type) {
        case 'page':
            return {...state,page: action.payload};
        case 'language':
            return {...state,language: action.payload};
        case 'schema':
            return {...state,schema: action.payload};
        case 'referrer':
            return {...state,referrer: action.payload};
        default:
            throw new Error();
    }
}

const DataProvider = ({ children, page, header, footer, language, schema, referrer }) => {

    const [state, dispatch] = useReducer(reducer, {
        page: page,
        header: header,
        footer: footer,
        language: language,
        schema: schema,
        referrer: referrer
    });

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export { StateContext };
export { DispatchContext };
export { DataProvider };
