import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
// import getGifs from '../helpers/GetGifs';
import useFetchGif from '../hooks/useFetchGif';

const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGif( category ); 
   
    
    console.log(loading);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setImages( imgs ) )

    // }, [ category ] );


    return ( 
        <>
            
            <h3> { category } </h3> 

            { loading && <p> Loading... </p> }

            <div className="container-card">
                {
                    images.map( ( img ) => {
                        return <GifGridItem
                                    key={img.id}
                                    { ...img }
                                />
                    } )
                }
                
            </div>
        </>

    )

}

export default GifGrid;