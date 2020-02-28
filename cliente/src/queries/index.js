import gql from "graphql-tag";

export const CLIENTES_QUERY = gql` {
    getClientes{
      id
      nombre
      apellido1
      apellido2
    }
}`;