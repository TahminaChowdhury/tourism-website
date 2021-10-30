import { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProver';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;