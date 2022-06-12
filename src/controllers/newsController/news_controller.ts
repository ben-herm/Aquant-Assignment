import { routes } from '@/controllers/newsController/routes';

import { NetworkService, networkService } from '@/networking';


export class NewsController {
    networkService: NetworkService;
    constructor() {
        this.networkService = networkService;
    }

    getNews() {
        let res = this.networkService.request({
            method: 'GET',
            url: routes.news.allNews,
        });

        console.log(res)
    }
}