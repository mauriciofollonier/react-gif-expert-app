import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en componente <AddCategory/>', () => {
  
    test('Debe cambiar el valor de la caja de texto (input)', () => {
        
        // onNewCategory es requerido y de tipo funcion, por eso
        // se lo pasamos como prop del componente
        render( <AddCategory onNewCategory={ () =>{} }/>);

        // Guardamos en una variable el objeto de pruebas ( elemento que recibe el evento ).
        const input = screen.getByRole('textbox');

        // Disparamos el evento apuntando a esa variable "input"
        fireEvent.input( input , { target: { value: 'Saitama' } } );

        expect ( input.value ).toBe( 'Saitama' );

        //screen.debug()
    });
    test('Debe llamar a la funcion onNewCategory() si tiene un valor mayor a un caracter', () => {

        // valor que va a tener el input despues que se dispare el evento
        const inputValue = 'Saitama';

        // Mock - simulacion de una funcion
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        // Elementos HTML a los que apunta el evento
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // Hay que agregarle un aria-lebel = 'form' a 
                                               // la etiqueta <form/> de lo contrario con la reconoce
        // Disparamos el evento para cambiarle el valor al input.
        fireEvent.input( input , { target: { value: inputValue } } );

        // Disparamos el evento submit para ejecutar la funcion onNewCategory.
        // Eso solo sucede en caso de que el valor ingresado sea mayor a un caracter.
        // Esta condicionado por un if.
        fireEvent.submit( form );

        // Si se ejecuta correctamente el onSubmit, el valor del inputValue vuelve a ser
        // un string vacio (se limpia el input para ingresar un nuevo valor)
        // Por eso se espera que el value sea '', de esa forma sabemos que se ejecuto correctamente el onSubmit
        expect( input.value ).toBe('');
         
        // Se espera que la funcion haya sido llamada.
        expect( onNewCategory ).toHaveBeenCalled();
        // Se espera que la funcion haya sido llamada n veces.
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // Se espera que la funcion haya sido llamada CON el valor esperado (inputValue).
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        //screen.debug();
    });

    test('No debe llamar a la funcion onNewCategory si el input esta vacío', () => {
        

        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/>);
    
        const form = screen.getByRole('form');
        
        fireEvent.submit( form );

        // Se espera que la funcion onNewCategory no sea llamada luego de ejecutar el submit (fireEvent.submit)
        // Ya que el value del input seria '' y esta condicionada por el if.

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //expect( onNewCategory ).not.toHaveBeenCalledTimes(); ---> Equivalente

        //screen.debug()
    })
    
});
