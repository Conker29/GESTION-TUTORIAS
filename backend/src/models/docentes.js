import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const DocentesSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        trim: true,
    },
    direccion: {
        type: String,
        trim: true,
        default: null,
    },
    telefono: {
        type: String,
        trim: true,
        default: null,
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    token: {
        type: String,
        default: null,
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    rol: {
        type: String,
        default: "Docente"
    }
}, {
    timestamps: true,
})

//Metodo para cifrar el password
DocentesSchema.methods.encrypPassword = async function(password) {
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password, salt)
    return passwordEncryp
}

//Metodo para verificar si el password ingresado es el mismo en la BDD
DocentesSchema.methods.matchPassword = async function(password) {
    const response = await bcrypt.compare(password, this.password)
    return response
}   

//Metodo para crear un token
DocentesSchema.methods.crearToken = function() {
    const tokenGenerado = this.token = Math.random().toString(32).slice(2)
    return tokenGenerado
}


export default model('Docente', DocentesSchema)