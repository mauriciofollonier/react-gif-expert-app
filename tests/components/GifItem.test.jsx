import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";



describe('Pruebas en componente <GifItem/>', () => { 

    const title = 'Aegon Targaryen';
    const url = 'https://www.gameofthrones.com/jonsnow';

    test('Debe hacer match con el snapshot', () => { 

        const { container } = render(<GifItem title = {title} url = { url }/>);
        expect( container ).toMatchSnapshot(); 
     });

     test('Debe mostrar la imagen con el URL y ALT indicado', () => { 

        render(<GifItem title = {title} url = { url }/>);
        // Formas de evaluar 
        // 1).-
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        // 2).-
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
     });

     test('Debe mostrar el titulo', () => { 
        
        render(<GifItem title = {title} url = { url }/>);
        expect( screen.getByText( title )).toBeTruthy();    
      });
 })