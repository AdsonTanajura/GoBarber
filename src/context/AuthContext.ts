import { createContext } from 'react';

interface AuthContextDTO {
    name: string;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export default AuthContext;