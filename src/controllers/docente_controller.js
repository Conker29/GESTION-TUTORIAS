import Docente from "../models/docentes.js"
import {sendMailToRegister, sendMailToRecoveryPassword} from "../config/nodemailer.js"

const registroDocente = async (req,res)=>{
    const {email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Todos los campos son obligatorios."})
    const docenteEmailBDD= await Docente.findOne({email})
    if(docenteEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoDocente = new Docente(req.body)
    nuevoDocente.password = await nuevoDocente.encrypPassword(password)
    const token = nuevoDocente.crearToken()
    await sendMailToRegister(email,token)
    await nuevoDocente.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})
}


const confirmarMailDocente = async (req,res)=>{
    if(!(req.params.token)) return res.status(400).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    const DocenteBDD = await Docente.findOne({token:req.params.token})
    if(!DocenteBDD?.token) return res.status(404).json({msg:"La cuenta ya ha sido confirmada"})
    DocenteBDD.token = null
    DocenteBDD.confirmEmail=true
    await DocenteBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 
}

//Etapa 1
const recuperarPasswordDocente = async(req, res) => {
    //Primera validacion: Obtener el email 
    const {email} = req.body
    //2: Verificar que el correo electronico no este en blanco
    if (Object.values(req.body).includes("")) return res.status(404).json({msg: "Todos los campos deben ser llenados obligatoriamente."})

    //Verificar que exista el correo electronico en la base de datos
    const DocenteBDD = await Docente.findOne({email})

    if (!DocenteBDD) return res.status(404).json({msg: "Lo sentimos, el usuario no existe"})
    //3
    const token = DocenteBDD.crearToken()
    DocenteBDD.token = token

    //Enviar email
    await sendMailToRecoveryPassword(email,token)
    await DocenteBDD.save()
    //4
    res.status(200).json({msg: "Revisa tu correo electrónico para restablecer tu contraseña."})
}

//Etapa 2
const comprobarTokenPasswordDocente = async (req, res) => {
    //1
    const {token} = req.params
    //2
    const DocenteBDD = await Docente. findOne({token})
    if (DocenteBDD.token !== token) return res.status (404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    //3
    await DocenteBDD.save()
    //4
    
    res.status(200).json({msg:"Token confirmado ya puedes crear tu password"})
}

//Etapa 3
const crearNuevoPasswordDocente = async (req, res) => {
    //1
    const {password,confirmpassword} = req.body
    //2
    if (Object.values(req.body).includes("")) return res.status(404).json({msg: "Lo sentimos debes llenar todos los campos"})
    
    if (password!== confirmpassword) return res.status(404).json({msg: "Lo sentimos, los passwords no coinciden"})
    
    const DocenteBDD = await Docente.findOne({token:req.params.token})

    console.log(DocenteBDD);
    

    if (DocenteBDD.token !== req.params.token) return res.status(404).json({msg: "Lo sentimos no se puede validar su cuenta"})

    //3
    DocenteBDD.token = null
    DocenteBDD.password = await DocenteBDD.encrypPassword(password)
    await DocenteBDD.save()


    //4


    res.status(200).json({msg:"Ya puede iniciar sesion con su nueva contraseña."})
}


export {
    registroDocente,
    confirmarMailDocente,
    recuperarPasswordDocente,
    comprobarTokenPasswordDocente,
    crearNuevoPasswordDocente,
}

