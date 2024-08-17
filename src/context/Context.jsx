import React, { createContext, useState } from 'react'

export const AddCategoryResponseStatusContext = createContext()

function Context({ children }) {
    //create the state to share between the components
    const [AddResponse, setAddResponse] = useState({})

    return (
        //To provide the context to all component
        <AddCategoryResponseStatusContext.Provider value={{ AddResponse, setAddResponse }}>
            {children}
        </AddCategoryResponseStatusContext.Provider>
    )
}

export default Context
