import React, {ReactNode} from "react";


import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

interface AppProviderProps {
    children: ReactNode;
}


const AppProvider:React.FC<AppProviderProps> = ({children}) => {
    
    return (
        <AuthProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </AuthProvider>
    )
};

export default AppProvider