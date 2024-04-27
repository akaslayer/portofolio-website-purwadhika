import React, { createContext, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <StateContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider

export const useStateValue = () => React.useContext(StateContext)
