import React, { createContext, ReactNode, useCallback, useState } from 'react';
import api from '../services/api';

interface SingInCredentials {
    email: string;
    password: string;
}

interface AuthContextDTO {
    user: object;
    singIn(credentials: SingInCredentials): Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthSate {
    token: string;
    user: object;
}


export const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [data, setData] = useState<AuthSate>(() => {
       const token = localStorage.getItem('@Gobaber:token');
        const user = localStorage.getItem('@Gobaber:user');

        if (token && user) {
            return { token, user: JSON.parse(user) }
        }

        return {} as AuthSate;
    }); 

    const singIn = useCallback(async ({ email, password }: SingInCredentials) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@Gobaber:token', token);
        localStorage.setItem('@Gobaber:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    return (
        <AuthContext.Provider value={{user: data.user, singIn}}>a
            {children}
        </AuthContext.Provider>

    )
}