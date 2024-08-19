import React, { createContext, ReactNode, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';


interface ToastProviderProps {
    children: ReactNode;
};
interface ToastContextDTO {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

export interface ToastMessage {
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;
}

const ToastContext = createContext<ToastContextDTO>({} as ToastContextDTO)

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    const [messages, setMessages] = useState<ToastMessage[]>([])

    const addToast = useCallback(({ title, description, type }: Omit<ToastMessage, 'id'>) => {

        const id = uuid();

        const toast = {
            id, 
            title,
            description,
            type,
        }


        setMessages((oldMessages) => [...oldMessages, toast])
    }, [])

    const removeToast = useCallback((id: string) => {
        setMessages(oldMessages => oldMessages.filter(message => message.id !== id))
    }, [])


    return (
        <ToastContext.Provider value={{addToast, removeToast}} >
            {children}
            <ToastContainer messages={messages} />
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