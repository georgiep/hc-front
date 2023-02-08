import { createContext, useState, useEffect, useMemo } from "react";
import { window } from "browser-monads";

const BreakpointContext = createContext({});

const BreakpointProvider = ({ children, queries }) => {
  const breakpointQueries = useMemo(() => {
    const qs = {}
    Object.keys(queries).forEach(key=>{
      qs[key] = window.matchMedia(queries[key])
    })
    return qs
  });

  const [breakpoint, setBreakpoint] = useState(() => {
    const breakpoints = {};
    Object.entries(breakpointQueries).forEach(([breakpoint, query]) => {
      breakpoints[breakpoint] = query.matches;
    });
    return breakpoints;
  });

  const  handleBreakpointChange = () => {
    const breakpoints = {};

    Object.entries(breakpointQueries).forEach(([breakpoint, query]) => {
      breakpoints[breakpoint] = query.matches;
    });

    setBreakpoint(breakpoints);
  }

  useEffect(() => {
    for (let query of Object.values(breakpointQueries)) {
      query.addListener(handleBreakpointChange);
    }

    return () => {
      for (let query of Object.values(breakpointQueries)) {
        query.removeListener(handleBreakpointChange);
      }
    };
  }, []);

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointContext;
export { BreakpointProvider };
