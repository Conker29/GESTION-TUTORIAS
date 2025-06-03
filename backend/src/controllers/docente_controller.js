import sendMailToRegister from "../config/nodemailer.js"
import docentes from "../models/docentes.js"


const registro = async (req, res) => {
    const {email,password} = req.body

    if (Object.values(req.body).includes("")) return res.status(400).json
    {msg: "todos los campos son obligatorios"}

    const docenteEmailBDD = await docentes.findOne({email})

    if (docenteEmailBDD) return res.status(400).json ({msg: "El email ya esta registrado"})

    const nuevoDocente = new docentes(req.body)

    nuevoDocente.password = await nuevoDocente.encrypPassword(password)

    const token = nuevoDocente.crearToken()

    await sendMailToRegister(email,token)

    await nuevoDocente.save()

    res.status(200).json({msg: "Revisa su correo electronico"})

}

const confirmEmail =(req,res) =>{
    console.log(!req.params.token)
    
    if(!(req.params.token)) return res.status(400).json ({msg: "Lo sentimos, no se puede validar"})
    
    const docenteBDD = docentes.findOne({token:req.params.token})
    if (!docenteBDD?.token) return res.status(404).json("La cuenta ceunta ya a sido confirmada")
    docenteBDD.token = null
    docenteBDD.confirmarMail = null
    docenteBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 

}

export {
    registro,
    confirmEmail
}