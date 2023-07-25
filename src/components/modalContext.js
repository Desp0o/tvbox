import { createContext, useState } from "react"

export const ModalContext = createContext()
export const ModalContextProvider = ({children}) =>{

    const [modalClass, setModalClass] = useState('channels_modal_closed')

    return(
        <>
            <ModalContext.Provider value={[modalClass, setModalClass]}>
                {children}
            </ModalContext.Provider>
        </>
    )

}

