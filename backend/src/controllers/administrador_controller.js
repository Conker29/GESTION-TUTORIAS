import Administrador from "../models/Administradors.js"
import {sendMailToRegister, sendMailToRecoveryPassword} from "../config/nodemailer.js"

const registroAdministrador = async (req,res)=>{
    const {email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Todos los campos son obligatorios."})
    const administradorEmailBDD= await Administrador.findOne({email})
    if(administradorEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoAdministrador = new Administrador(req.body)
    nuevoAdministrador.password = await nuevoAdministrador.encrypPassword(password)
    const token = nuevoAdministrador.crearToken()
    await sendMailToRegister(email,token)
    await nuevoAdministrador.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})
}


const confirmarMailAdministrador = async (req,res)=>{
    if(!(req.params.token)) return res.status(400).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    const AdministradorBDD = await Administrador.findOne({token:req.params.token})
    if(!AdministradorBDD?.token) return res.status(404).json({msg:"La cuenta ya ha sido confirmada"})
    AdministradorBDD.token = null
    AdministradorBDD.confirmEmail=true
    await AdministradorBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 
}

//Etapa 1
const recuperarPasswordAdministrador = async(req, res) => {
    //Primera validacion: Obtener el email 
    const {email} = req.body
    //2: Verificar que el correo electronico no este en blanco
    if (Object.values(req.body).includes("")) return res.status(404).json({msg: "Todos los campos deben ser llenados obligatoriamente."})

    //Verificar que exista el correo electronico en la base de datos
    const AdministradorBDD = await Administrador.findOne({email})

    if (!AdministradorBDD) return res.status(404).json({msg: "Lo sentimos, el usuario no existe"})
    //3
    const token = AdministradorBDD.crearToken()
    AdministradorBDD.token = token

    //Enviar email
    await sendMailToRecoveryPassword(email,token)
    await AdministradorBDD.save()
    //4
    res.status(200).json({msg: "Revisa tu correo electrónico para restablecer tu contraseña."})
}

//Etapa 2
const comprobarTokenPasswordAdministrador = async (req, res) => {
    //1
    const {token} = req.params
    //2
    const AdministradorBDD = await Administrador. findOne({token})
    if (AdministradorBDD.token !== token) return res.status (404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    //3
    await AdministradorBDD.save()
    //4
    
    res.status(200).json({msg:"Token confirmado ya puedes crear tu password"})
}

//Etapa 3
const crearNuevoPasswordAdministrador = async (req, res) => {
    //1
    const {password,confirmpassword} = req.body
    //2
    if (Object.values(req.body).includes("")) return res.status(404).json({msg: "Lo sentimos debes llenar todos los campos"})
    
    if (password!== confirmpassword) return res.status(404).json({msg: "Lo sentimos, los passwords no coinciden"})
    
    const AdministradorBDD = await Administrador.findOne({token:req.params.token})

    console.log(AdministradorBDD);
    

    if (AdministradorBDD.token !== req.params.token) return res.status(404).json({msg: "Lo sentimos no se puede validar su cuenta"})

    //3
    AdministradorBDD.token = null
    AdministradorBDD.password = await AdministradorBDD.encrypPassword(password)
    await AdministradorBDD.save()


    //4


    res.status(200).json({msg:"Ya puede iniciar sesion con su nueva contraseña."})
}


export {
    registroAdministrador,
    confirmarMailAdministrador,
    recuperarPasswordAdministrador,
    comprobarTokenPasswordAdministrador,
    crearNuevoPasswordAdministrador,
}

