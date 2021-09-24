import { useEffect, useState } from "react"
import { getNews } from "../helpers/getNews";

export const useFetchNews = ( category ) => {

    const [state, setState] = useState({
        data:[],
    });

    useEffect ( () => {
        getNews( category )
            .then( news => {
                setState({
                    data: news,
                })
            })
    }, [category])

    return state;

}