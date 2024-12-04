import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const[user, setUser] = useState(null);
  const[showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))
  

  const backendURL = import.meta.env.VITE_BACKEND_URL


  const value = {
    user, setUser, showLogin, setShowLogin, backendURL
  }


  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider