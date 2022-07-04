import { useState } from "react";
import PropTypes from "prop-types";


// props
// 1).- setCategories recibia la func desde el componente padre para poder cambiar el estado
// aca en este componente.
// 2).- onNewCategory envia un evento al componente padre con el nuevo valor (inputValue).
//                                     1)                2)
export const AddCategory = ( { /* setCategories */ onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');  

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return; // Si los datos ingresados son menor
                                               // o igual a un caracter, que no lo mande
    // 1)                                      
    // setCategories( (categories) => [ inputValue, ...categories ] );
    // 2)
    onNewCategory( inputValue.trim() );

    setInputValue(''); // Una vez agregada la categoria limpiamos el input.
  }


  return (
    <form onSubmit={ onSubmit } aria-label='form'>
        <input 
         type="text"
         placeholder="Buscar gifs" 
         value = { inputValue }
         onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
  
  onNewCategory: PropTypes.func.isRequired 
}