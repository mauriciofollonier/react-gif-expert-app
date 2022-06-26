import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {

    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }
  
  useEffect( () => {
    getImages();
  }, [ ]  )
 
  return {
    images: images, // El value images contiene el objeto del estado images(id,url,title)
    isLoading: isLoading // Se encarga de avisar cuando empieza a cargar las imagenes (true)
                         // y cuando las termina de cargar (false)
  }
}
