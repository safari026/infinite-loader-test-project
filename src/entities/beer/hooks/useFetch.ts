import {useState,useEffect} from 'react';
import { beerApi } from '../../../shared/api/base';

export type DataItem ={
    id:string;
    name:string
    tagline:string
    image_url:string
    description:string
}
function useFetch(page:number){
 const[loading,setLoading]=useState(false);
 const[error,setError]=useState(false);
 const[list,setList]=useState<DataItem[]>([])

    const sendQuery = async() => {
        setLoading(true)
    try {
        const response = await beerApi.get<DataItem[]>(`/beers?page=${page}`)
        await setList((prev) => [...new Set([...prev, ...response.data])]);
    setError(false)
    }   catch (error) {
    setError(true);
    setList([]);
    }

    setLoading(false)
    }

 useEffect(()=>{
    sendQuery()
 },[page])

return{list,error,loading}
}
export default useFetch