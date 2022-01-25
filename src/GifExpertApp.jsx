import React, { useState } from "react";
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( ['Programacion'] );
    
    // const handleAdd = () => {
    //     setCategories( [...categories, 'HolaXHola'] );
    // }


    
    return (
        <>
            <h2 className="animate__animated animate__fadeInLeft"> Gif Expert App </h2>
            
            <AddCategory setCategories = { setCategories } /> 

            <hr/>
            

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}  />
                    })
                }
            </ol>
        </>
    )

}

export default GifExpertApp;