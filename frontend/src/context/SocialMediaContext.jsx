import React, { createContext, useContext, useReducer, useEffect } from 'react';

const SocialMediaContext = createContext();

const initialState = {
  user: null,
  posts: [],
  notifications: [],
  isLoading: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, isLoading: true };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, isLoading: false, posts: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [action.payload, ...state.notifications] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function SocialMediaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    // WebSocket connection would go here
    // For now, let's mock it
    const mockSocket = {
      onmessage: (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'NEW_POST') {
          dispatch({ type: 'ADD_POST', payload: message.data });
        } else if (message.type === 'NOTIFICATION') {
          dispatch({ type: 'ADD_NOTIFICATION', payload: message.data });
        }
      }
    };
    
    return () => {
      // Cleanup socket
    };
  }, []);

  return (
    <SocialMediaContext.Provider value={{ state, dispatch }}>
      {children}
    </SocialMediaContext.Provider>
  );
}

export const useSocialMedia = () => useContext(SocialMediaContext);
