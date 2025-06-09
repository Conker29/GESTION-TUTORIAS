//Importacion de la libreria
import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL_PRODUCTION)
        console.log("Conectado a la base de datos con éxito.")
    } catch (error) {
        console.log(error)
    }
}

export default connection;