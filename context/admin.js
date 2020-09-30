import React, { useState } from 'react'
import Cookies from 'js-cookie'

const AdminContext = React.createContext()

function AdminProvider({children}) { 
  const [admin, setAdmin] = useState(Cookies.get('token') || null)
    
  return (
    <AdminContext.Provider value={{admin, setAdmin}}> 
      {children}
    </AdminContext.Provider>
  )
}

function useAdmin() {
  const context = React.useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

export {AdminProvider, useAdmin }
