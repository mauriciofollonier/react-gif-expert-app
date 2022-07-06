import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('Debe retornar el estado inicial', () => { 

    // El objetivo es evaluar los estados iniciales de { images & isLoading } antes de que se ejecute el hook
    // y modifique estos estados.

    // renderHook permite ejecutar el hook atraves de un callback, del cual vamos a obtener "result",
    // un objeto con es estado actual del hook { current: { 
    //                                                      images: [], 
    //                                                      isLoading: true 
    //                                                     }
    //                                           }
    const { result } = renderHook( () => useFetchGifs( 'Game of Thrones' ) );

    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook( () => useFetchGifs( 'Game of Thrones' ) );

        await waitFor(  // Espera a que se cumpla la condicion para luego seguir leyendo los expect,
                        // una vez que el hook se ejecuto y cambio los estados

            // Condicion (debe devolver un boolean)
            () => expect( result.current.images.length ).toBeGreaterThan(0)

            // Opcional
            , { timeout: 20000 }
        );
        const { images, isLoading } = result.current;
        // Los estados aca se van a evaluar ya modificados
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
     })
 });