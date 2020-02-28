import mongoose from 'mongoose';
import { Clientes } from '../database';
import { rejects } from 'assert';

export const resolvers = {
    Query: {
        getClientes : (_, {limite})=> {
            return Clientes.find({}).limit(limite)
        },
        getCliente : (_, {id}) => {
            return new Promise((resolve, object)=> {
                Clientes.findById(id, (error, cliente)=> {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
        },
    },
    Mutation: {
        crearCliente : (root, { input }) => {
            const nuevoCliente = new Clientes({
                nombre : input.nombre,
                apellido1 : input.apellido1,
                apellido2 : input.apellido2,
                empresa : input.empresa,
                email : input.email,
                edad : input.edad,
                tipo : input.tipo,
                cursos : input.cursos
            });
            nuevoCliente.id = nuevoCliente._id;

            return new Promise((resolve, object)=>{
                nuevoCliente.save((error)=> {
                    if(error) rejects(error)
                    else resolve(nuevoCliente)
                })
            });

        },
        actualizarCliente: (root, {input})=> {
            return new Promise((resolve, object)=> {
                Clientes.findOneAndUpdate({ _id : input.id }, input, {new: true}, (error, cliente)=> {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });

        },
        eliminarCliente: (_, {id})=> {
            return new Promise((resolve, object)=> {
                Clientes.findOneAndRemove({_id : id}, (error)=> {
                    if(error) rejects(error)
                    else resolve("Se eliminó correctamente el registro")
                })
            });
        }
    }
}