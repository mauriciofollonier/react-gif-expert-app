import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en componente <GifGrid/>', () => {
  
    test('Debe mostrar el loading y la categoria (estado inicial)', () => { 

        const category = 'Game of Thrones';

        // Objeto que simula ser lo que devuelve la funcion useFetchGifs() --> custom Hook.
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true      // Valores iniciales que tienen los estados antes de traer las img.
        });


        render( <GifGrid category = { category }/>)

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ));
     });
     // Testing del custom HOOK useFetchGifs
     test('Debe mostrar items cuando se cargan las imagenes', () => {

         const category = 'Game of Thrones';
         
         // Objeto ficticio que vamos a crear para que verificar que el hook funciona como con
         // los datos de la API.
        const gifs = [
            {
                id:'ABC',
                title: 'Jon',
                url: 'https://liveordiefortheclan.com/jonsnow'
            },
            {
                id:123,
                title: 'Sansa',
                url: 'https://liveordiefortheclan.com/sansastark'
            }
        ]
       
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false      // Valores que tienen los una vez que se cargan las img.
        });

        render( <GifGrid category = { category }/>)

        expect( screen.getAllByRole('img').length ).toBe( 2 );
        //screen.debug()

     })
     
});
