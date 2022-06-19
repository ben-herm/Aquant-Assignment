import { news_api_key } from '@/constants/api';
import netWorkService from '@/networking/NetworkService'
import { routes } from './routes';

export type Type = 'q' | 'category'

export const getNews = async (value: string, type: Type = 'q') => {
    try {
        const url = `${routes.news.topHeadlines}?${type}=${value}&apiKey=${news_api_key}`;
        const res = await netWorkService.get(url)
        return res.data.sources
    } catch (e) {
        console.log(e)
    }
}
