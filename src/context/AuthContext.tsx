import React, { createContext, ReactNode, useCallback } from 'react';
import api from '../services/api';

interface SingInCredentials {
    email: string;
    password: string;
}

interface AuthContextDTO {
    name: string;
    singIn(credentials: SingInCredentials): Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const singIn = useCallback(async ({ email, password }: SingInCredentials) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        console.log(response);
    }, []);

    return (
        <AuthContext.Provider value={{name: 'Adson', singIn}}>a
            {children}
        </AuthContext.Provider>

    )
}