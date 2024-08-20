import React, { createContext, useState } from 'react'

export const AddCategoryResponseStatusContext = createContext()

export const EditCategoryContext = createContext()

function Context({ children }) {
    //create the state to share between the components
    const [AddResponse, setAddResponse] = useState({})
    const [EditResponse, setEditResponse] = useState({})

    return (
        //To provide the context to all component
        <AddCategoryResponseStatusContext.Provider value={{ AddResponse, setAddResponse }}>
            <EditCategoryContext.Provider value={{ EditResponse, setEditResponse }}>
                {children}
            </EditCategoryContext.Provider>
        </AddCategoryResponseStatusContext.Provider>
    )
}

export default Context
