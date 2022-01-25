import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = (e) => {
       setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //para prevenir el comportamiento por defecto del formulario 
        //console.log('Submit')

        if(inputValue.trim().length > 2){
            setCategories( (categories) =>  [inputValue, ...categories ]  );
            setInputValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeInLeft">
            <input 
                type="text"
                value={inputValue}
                onChange={  handleInputChange }
                name=""  
            />  
        </form>
    )
}

export default AddCategory;

//el proptypes obliga a que le pasemos por parametros o argumentos  la comunicacion por componentes si es requierido
AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired

}