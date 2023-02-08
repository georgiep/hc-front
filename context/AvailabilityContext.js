import { createContext, useState, useEffect , useReducer } from "react";

const AvailabilityStateContext = createContext({});
const AvailabilityDispatchContext = createContext({});

function reducer(state, action) {
    switch (action.type) {
        case 'page':
            return {...state,page: action.payload};
        default:
            throw new Error();
    }
}

const AvailabilityProvider = ({ children, occupancy }) => {

    const [state, dispatch] = useReducer(reducer, occupancy);

    return (
        <AvailabilityStateContext.Provider value={state}>
            <AvailabilityDispatchContext.Provider value={dispatch}>
                {children}
            </AvailabilityDispatchContext.Provider>
        </AvailabilityStateContext.Provider>
    );
};

export { AvailabilityStateContext };
export { AvailabilityDispatchContext };
export { AvailabilityProvider };
