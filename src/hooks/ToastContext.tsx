import React, { createContext, ReactNode, useContext, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';


interface ToastProviderProps {
    children: ReactNode;
};
interface ToastContextDTO {
    addToast(): void;
    removeToast(): void;
}

const ToastContext = createContext<ToastContextDTO>({} as ToastContextDTO)

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    const addToast = useCallback(() => {
        console.log('addToast')
    }, [])

    const removeToast = useCallback(() => {
        console.log('removeToast')
    }, [])


    return (
        <ToastContext.Provider value={{addToast, removeToast}} >
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
}; 

function useToast(): ToastContextDTO {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}

export {useToast, ToastProvider,}