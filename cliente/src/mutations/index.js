import gql from 'graphql-tag';

export const NUEVO_CLIENTE = gql`
mutation crearCliente($input: ClienteInput){
    crearCliente(input: $input){
      id
      nombre
      apellido1
      apellido2
      tipo
    }
  }
  `;