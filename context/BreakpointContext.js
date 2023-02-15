import { createContext, useState, useEffect, useMemo, useContext } from "react";

const BreakpointContext = createContext({});

const useBreakpointContext = () => useContext(BreakpointContext)

const BreakpointProvider = ({ children, queries }) => {

  if (typeof window === 'undefined') {
      return children
  }

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
export { BreakpointProvider,useBreakpointContext };
