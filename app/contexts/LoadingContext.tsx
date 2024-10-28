// OLD
// "use client"
// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface LoadingContextProps {
//   isLoading: boolean;
//   setIsLoading: (loading: boolean) => void;
// }

// const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

// export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// export const useLoading = () => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error('useLoading must be used within a LoadingProvider');
//   }
//   return context;
// };


// ATTEMPT 2
// import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// type LoadingState = {
//   isLoading: boolean;
// };

// type LoadingAction = 
//   | { type: 'SET_LOADING'; payload: boolean }

// type LoadingDispatch = (action: LoadingAction) => void;

// const LoadingStateContext = createContext<LoadingState | undefined>(undefined);
// const LoadingDispatchContext = createContext<LoadingDispatch | undefined>(undefined);

// const loadingReducer = (state: LoadingState, action: LoadingAction): LoadingState => {
//   switch (action.type) {
//     case 'SET_LOADING':
//       return { isLoading: action.payload };
//     default:
//       return state;
//   }
// };

// export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(loadingReducer, { isLoading: true });

//   return (
//     <LoadingStateContext.Provider value={state}>
//       <LoadingDispatchContext.Provider value={dispatch}>
//         {children}
//       </LoadingDispatchContext.Provider>
//     </LoadingStateContext.Provider>
//   );
// };

// export const useLoadingState = () => {
//   const context = useContext(LoadingStateContext);
//   if (context === undefined) {
//     throw new Error('useLoadingState must be used within a LoadingProvider');
//   }
//   return context;
// };

// export const useLoadingDispatch = () => {
//   const context = useContext(LoadingDispatchContext);
//   if (context === undefined) {
//     throw new Error('useLoadingDispatch must be used within a LoadingProvider');
//   }
//   return context;
// };
"use client"
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type LoadingState = {
  isPinGridReady: boolean;
  colorExtractionCount: number;
  totalTopics: number;
};

export const SET_PIN_GRID_READY = 'SET_PIN_GRID_READY';
export const INCREMENT_COLOR_EXTRACTION_COUNT = 'INCREMENT_COLOR_EXTRACTION_COUNT';
export const SET_TOTAL_TOPICS = 'SET_TOTAL_TOPICS';

type LoadingAction = 
  | { type: typeof SET_PIN_GRID_READY }
  | { type: typeof INCREMENT_COLOR_EXTRACTION_COUNT }
  | { type: typeof SET_TOTAL_TOPICS; payload: number }

type LoadingDispatch = (action: LoadingAction) => void;

const LoadingStateContext = createContext<LoadingState | undefined>(undefined);
const LoadingDispatchContext = createContext<LoadingDispatch | undefined>(undefined);

const loadingReducer = (state: LoadingState, action: LoadingAction): LoadingState => {
  switch (action.type) {
    case SET_PIN_GRID_READY:
      return { ...state, isPinGridReady: true };
    case INCREMENT_COLOR_EXTRACTION_COUNT:
      return { ...state, colorExtractionCount: state.colorExtractionCount + 1 };
    case SET_TOTAL_TOPICS:
      return { ...state, totalTopics: action.payload };
    default:
      return state;
  }
};

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(loadingReducer, { 
    isPinGridReady: false, 
    colorExtractionCount: 0,
    totalTopics: 0
  });

  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={dispatch}>
        {children}
      </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
};

export const useLoadingState = () => {
  const context = useContext(LoadingStateContext);
  if (context === undefined) {
    throw new Error('useLoadingState must be used within a LoadingProvider');
  }
  return context;
};

export const useLoadingDispatch = () => {
  const context = useContext(LoadingDispatchContext);
  if (context === undefined) {
    throw new Error('useLoadingDispatch must be used within a LoadingProvider');
  }
  return context;
};
