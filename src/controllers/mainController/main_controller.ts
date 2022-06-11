import { routes } from '@/controllers/mainController/routes';

import { NetworkService, networkService } from '@/networking';
import { UserLogin } from './models';


export class UserController {
    networkService: NetworkService;
    constructor() {
        this.networkService = networkService;
    }

    login({ username, password }: UserLogin) {
        return this.networkService.request({
            method: 'POST',
            url: routes.authentication.login,
            data: { username, password },
        });
    }

    logout() {
        return this.networkService.request({
            method: 'DELETE',
            url: routes.authentication.logout,
        });
    }
}