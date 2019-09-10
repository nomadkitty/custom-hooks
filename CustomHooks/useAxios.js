//This hook works together with useLocalStorage hook and axios for data fetching

import axios from 'axios';
import { useEffect } from 'react'

import useLocalStorage from './useLocalStorage';

const useAxios = (url) => {
    const [data, setData] = useLocalStorage('data', [])
    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log('Error: Axios: ', error))
    }, [url])
    return [data];
}
export default useAxios;
