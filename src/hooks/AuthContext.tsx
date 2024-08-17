import React, { createContext, ReactNode, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SingInCredentials {
    email: string;
    password: string;
}

interface AuthContextDTO {
    user: object;
    singIn(credentials: SingInCredentials): Promise<void>;
    singOut():void
}

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthSate {
    token: string;
    user: object;
}


const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

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

    const singOut = useCallback(() => {
        localStorage.removeItem('@Gobaber:token');
        localStorage.removeItem('@Gobaber:user');

        setData({} as AuthSate);
     }, [])

    return (
        <AuthContext.Provider value={{user: data.user, singIn, singOut}}>
            {children}
        </AuthContext.Provider>

    )
};

export function useAuth(): AuthContextDTO {
    const contex = useContext(AuthContext);
    if (!contex) {
        throw new Error('useAuth msut be used within an AuthProvider');
    };

    return contex;
};