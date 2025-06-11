import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()


let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP,
    }
});

const sendMailToRegister = (userMail, token) => {
    const confirmationLink = `${process.env.URL_FRONTEND}confirm/${token}`;

    const mailOptions = {
        from: 'emilio041114@gmail.com',
        to: userMail,
        subject: "¡Listo para comenzar!",
        html: `
            <p>Hola, haz clic <a href="${confirmationLink}">aquí</a> para confirmar tu cuenta.</p>
            <hr>
            <footer>Nosotros haremos lo posible por resolver tus dudas junto a los ingenieros.</footer>
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mensaje enviado satisfactoriamente:", info.messageId);
        }
    });
};


const sendMailToRecoveryPassword = async(userMail,token)=>{
    let info = await transporter.sendMail({
    from: 'emilio041114@gmail.com',
    to: userMail,
    subject: "Correo para restablecer tu contraseña",
    html: `
    <h1>GESTOR DE TUTORIAS - 😁😁</h1>
    <hr>
    <a href=${process.env.URL_FRONTEND}reset/${token}>Clic para reestablecer tu contraseña</a>
    <hr>
    <footer>Bienvenido</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}



export {
    sendMailToRegister,
    sendMailToRecoveryPassword
}