import { useState, useEffect } from 'react';
import getGifs from '../helpers/GetGifs';


const useFetchGif = ( category ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false,
                })
            })            


    }, [category]); //Va a realizar el useEffect, unicamente cunado la category cambia
    
    return state; // { data: [], loading: true };
}

export default useFetchGif;