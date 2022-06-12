import { news_api_key } from '@/constants/api';
import netWorkService from '@/networking/NetworkService'
import { routes } from './routes';

export const getNews = async (value: string) => {
    try {
        const url = `${routes.news.topHeadlines}?category=${value}&apiKey=${news_api_key}`;
        const res = await netWorkService.get(url)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
