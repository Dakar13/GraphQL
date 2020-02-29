import mongoose from 'mongoose';

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/clientes', {
            useNewUrlParser: true
        })
       
        console.log('>>> DB is connected');
    }catch(e){
        console.log('Algo a salido mal en la conexion!!');
        console.log(e);
    }
}
const clientesSchema = new mongoose.Schema({
    nombre : String,
    apellido1 : String,
    apellido2 : String,
    empresa : String,
    emails : Array,
    edad : Number,
    tipo : String,
    cursos : Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes};
