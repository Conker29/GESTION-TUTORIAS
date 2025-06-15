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
        from: 'tutorias.esfot@gmail.com',
        to: userMail,
        subject: "REGISTRO EN LA PLATAFORMA DE TUTORIAS ESFOT",
        html: `
            <p>¿Listo para comenzar? <a href="${confirmationLink}">Haz clic en el siguiente enlace</a> para confirmar tu cuenta.</p>
            <hr>
            <footer>2025 - ESFOT - Todos los derechos reservados.</footer>
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
    from: 'tutorias.esfot@gmail.com',
    to: userMail,
    subject: "RECUPERACION DE PASSWORD",
    html: `
    <h1>PLATAFORMA DE GESTION DE TUTORIAS ACADEMICAS</h1>
    <hr>
    <a href=${process.env.URL_FRONTEND}reset/${token}>Haz clic en el siguiente enlace para restablecer tu contraseña:</a>
    <hr>
    <footer>2025 - Tutorias ESFOT - Todos los derechos reservados.</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}



export {
    sendMailToRegister,
    sendMailToRecoveryPassword
}
