import React, { createContext, useState } from 'react'


export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [isLogged,setIsLogged] = useState(true);
  return (
    <UserContext.Provider value={{isLogged,setIsLogged}}>
        {children}
    </UserContext.Provider >
  )
}

export default UserProvider