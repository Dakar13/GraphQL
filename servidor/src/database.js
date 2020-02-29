import mongoose from 'mongoose';

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/clientes', {
            useNewUrlParser: true
        })
        // await mongoose.connect('mongodb+srv://calva:1302Sasha@dakar2018-9phsc.mongodb.net/test?retryWrites=true&w=majority', {
        //     useNewUrlParser: true
        // })
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
    email : String,
    edad : Number,
    tipo : String,
    cursos : Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes};