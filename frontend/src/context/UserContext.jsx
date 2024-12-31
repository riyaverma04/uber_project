import React, { createContext, useState } from 'react'


export const UserDataContext = createContext()

const UserContext = ({children}) => {


    const [user, setUser] = useState({
        fullname: {
            firstName: " ",
            lastName: " "

        },
        email: " "
    })
  return (
    <div>
     <UserDataContext.Provider value={[user, setUser]}>
     {children}
     </UserDataContext.Provider>
    </div>
  )
}

export default UserContext