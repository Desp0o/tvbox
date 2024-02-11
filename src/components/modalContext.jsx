import { createContext, useState } from "react"

export const ModalContext = createContext()
export const ModalContextProvider = ({children}) =>{

    const [modalClass, setModalClass] = useState('channels_modal_closed')
    const [firstScreenClass, setFirstScreenClass] = useState('firstScreen')
    const [dashboard, setDashboard] = useState('dashboard_closed')

    const [rulesBackGround, setRulesBackGround] = useState('rulesOutter')

    return(
        <>
            <ModalContext.Provider value={{
                                            modalClass, setModalClass,
                                            firstScreenClass, setFirstScreenClass,
                                            dashboard, setDashboard,
                                            rulesBackGround, setRulesBackGround
            }}>
                {children}
            </ModalContext.Provider>
        </>
    )

}
