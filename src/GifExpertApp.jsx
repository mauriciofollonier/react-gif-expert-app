import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Game of Thrones']);

    const onAddCategory = ( newCategory ) => {
        // Validar que las categorias sean distintas
        if ( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories ]);
        //setCategories( cat => [...categories, newCategory]);
    }

  return (
    <>
        <h1>Gift Expert App</h1>

        <AddCategory 
            // setCategories = { setCategories }
            // Pasa la func setCategories al componente
            // y asi puede modificar el estado categories
            // en el otro componente (AddCategory).
            onNewCategory = { (value) => onAddCategory(value)}
            // Esta prop recibe el newValue y lo usa para
            // cambiar el estado aca, con setCategories.
            // RECIBE UN EVENTO DEL COMPONENTE HIJO.
            />
        {
        categories.map( (category) => (
            <GifGrid 
            key= { category }
            category = { category }
        /> 
        ))
        }
    </>
  )
};
