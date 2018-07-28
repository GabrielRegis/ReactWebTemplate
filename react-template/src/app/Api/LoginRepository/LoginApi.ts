import { ApiResponse } from 'apisauce';
import { api } from '../api';

const LoginApi = () => {
    const login = (): Promise<ApiResponse<any>> => {
        return api.get<any>('/api/authenticate');
    };

    return {
        login
    };
};

export default LoginApi();
