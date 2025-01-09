import React, { createContext, useState } from 'react'
export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    const [error,setError] = useState(null)
    const [isLoading, setIsLoading]= useState(false)


    const updateCaptain = (captainData) =>{
        setCaptain(captainData);
    };

    const value = {
        captain, 
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain

    }

  return (
    <CaptainDataContext.Provider value={value}>
        {children}
    </CaptainDataContext.Provider>
  )
}

export default CaptainContext