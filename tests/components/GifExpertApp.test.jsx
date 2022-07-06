import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"

describe('Pruebas en componente <GifExpertApp/>', () => { 

    test('Debe hacer match con el snapshot', () => {
      
        const { container } = render( <GifExpertApp/> );
        expect( container ).toMatchSnapshot();
    });
    test('Debe modificar el input y ser valido (mas de un caracter)', () => {
        
        render( <GifExpertApp/> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input ,{ target: {value: 'House of the Dragon'} } );

        expect( input.value ).toBe('House of the Dragon')
        screen.debug()
    })
    
    
 })