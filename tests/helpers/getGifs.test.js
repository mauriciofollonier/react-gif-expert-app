import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas en getGifs()', () => { 

    test('Debe retornar un arreglo de gifs', async () => { 

        const gifs = await getGifs('GOT');
        //console.log( gifs );

        // Se espera que el array contenga al menos un elemento.
        expect( gifs.length ).toBeGreaterThan( 0 );

        // Se espera que el 1er elemento del array sea un objeto con las propiedades: id, title y url.

        expect( gifs[0] ).toEqual({ // Las propiedades pueden ser cualquier dato de tipo 'String'.
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
     })
 })