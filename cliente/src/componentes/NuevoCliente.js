import React, { Component, Fragment } from 'react';

import {NUEVO_CLIENTE} from '../mutations';
import {Mutation} from 'react-apollo';

class NuevoCliente extends Component {
    state = { 
        cliente: {
            nombre: '',
            apellido1: '',
            apellido2: '',
            edad: '',
            empresa: '',
            email: '',
            tipo: '',
            cursos: ''
        },
        error : false
     }
    render() { 
        const {error} = this.state;
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">Todos los campos son requeridos</p> : '';
        return ( 
            <Fragment>
                <h2 className="text-center">Agregar Cliente</h2>

                {respuesta}
                <div className= "row justify-content-center">
                    <Mutation mutation={NUEVO_CLIENTE}>

                        { crearCliente => (
                            <form 
                                className="col-md-8 m-3" 
                                onSubmit={e => {
                                    e.preventDefault();

                                    const {nombre, apellido1, apellido2, empresa, edad, email, tipo, cursos} = this.state.cliente;

                                    if(nombre === '' || apellido1 === '' || edad === ''){
                                        this.setState({
                                            error: true
                                        });
                                        return;
                                    }
                                    this.setState({
                                        error: false
                                    })

                                    const input = {
                                        nombre,
                                        apellido1,
                                        apellido2,
                                        empresa,
                                        edad: Number(edad),
                                        email,
                                        tipo,
                                        cursos
                                    };
                                    
                                    crearCliente({
                                        variables: {
                                            nombre: input.nombre,
                                            apellido1: input.apellido1,
                                            apellido2: input.apellido2,
                                            empresa: input.empresa,
                                            edad: input.edad,
                                            email: input.email,
                                            tipo: input.tipo,
                                            cursos: input.cursos
                                        }
                                    })
                                }}
                            >
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Nombre</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre"
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        nombre: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Empresa</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Empresa"
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        empresa: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Apellido 1</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Apellido 1"
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        apellido1: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Apellido 2</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Apellido 2"
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        apellido2: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Edad</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Edad"
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        edad: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Tipo</label>  
                                        <select 
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        tipo: e.target.value
                                                    }
                                                })
                                            }}
                                            className="form-control"
                                        >
                                            <option value="">Elegir...</option>
                                            <option value="DIRECTOR">DIRECTOR</option>
                                            <option value="COMANDANTE">COMANDANTE</option>
                                            <option value="ENCARGADO">ENCARGADO</option>
                                            <option value="OFICIAL">OFICIAL</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Email"
                                            onChange={e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        email: e.target.value
                                                    }
                                                })
                                            }} 
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success float-right">Agregar registro</button>
                            </form>
                        )}
                    </Mutation>
                </div>
            </Fragment>
         );
    }
}
 
export default NuevoCliente;