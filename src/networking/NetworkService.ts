import { base_url } from '@/constants/api';
import axios from 'axios';

export default axios.create({
    baseURL: base_url
})