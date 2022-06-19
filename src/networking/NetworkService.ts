import { base_url } from '@/constants/api';
import axios from 'axios';
import { headers } from './config';

export default axios.create({
    headers,
    baseURL: base_url
})