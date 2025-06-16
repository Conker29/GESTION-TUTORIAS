//Cargar imagenes desde assets
import logoESFOT from '../assets/esfotLogo.png'
import logoEPN from '../assets/logoEPN.jpg'
import estudiantesEPN from '../assets/estudiantesEPN.avif'     
import logoDog from '../assets/dog-hand.webp'
import { Link } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaCommentSms } from "react-icons/fa6";
import { TbDog } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const Home = () => {
    return (
        <>
            <header className="container mx-auto h-40 text-center py-4 md:flex justify-between items-center px-4 md:h-25">
            <ul className='flex justify-center items-center gap-5 my-4'>
                    <li><img src={logoESFOT} alt="logo" width={100} height={55} />
                    </li>
                    <li><img src={logoEPN} alt="logo" width={100} height={55} />
                    </li>
                </ul>
                <ul className='flex gap-5 justify-center my-4 flex-wrap'>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline'>Inicio</a></li>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline'>Nosotros</a></li>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline'>Servicios</a></li>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline'>Contacto</a></li>
                    <li><Link to="/login" href="#" className='font-bold px-3 py-1 border border-amber-700 rounded-md hover:bg-amber-700 hover:text-white transition-colors duration-200'>Iniciar sesión</Link></li>
                </ul>
            </header>

            <main className='text-center py-6 px-8 bg-red-50  md:text-left md:flex justify-between items-center gap-10 md:py-1'>
                <div className=''>
                    <h1 className='font-lato font-extrabold text-amber-800 uppercase text-4xl my-4 md:text-6xl'>BIENVENIDO!</h1>

                    <p className='text-2xl my-6 font-sans'>Mediante esta plataforma, puedes agendar una tutoría con el docente de tu preferencia.</p>
                </div>
                <div className='hidden md:block'>
                    <img src={estudiantesEPN} alt="smart" />
                </div>
            </main>


            <section className='container mx-auto px-4'>

                <div className='container mx-auto relative mt-6'>
                    <h2 className='font-semibold text-3xl relative z-1 w-50 text-center mx-auto bg-white'>NOSOTROS</h2>
                    <div className='text-amber-900 border-2 absolute top-1/2 w-full z-0' />
                </div>

                <div className='my-10 flex flex-col gap-10 items-center sm:flex-row sm:justify-around sm:items-center'>

                    <div className='sm:w-1/2'>
                        <img src={logoDog} alt="App Store" className='w-full h-full object-cover' />
                    </div>

                    <div className='px-10 sm:w-1/2'>
                        <p className='my-4'>Mediante la plataforma puedes:
                        </p>
                        <ul className='space-y-4'>
                            <li>
                                <MdDashboard className='inline text-2xl mr-2' />Agendar una cita con tu docente de acuerdo a su disponibilidad.
                            </li>
                            <li>
                                <FaRobot className='inline text-2xl mr-2' />
                                Consultar dudas con tus docentes.
                            </li>
                            <li>
                                <BsCashCoin className='inline text-2xl mr-2' />
                                Payment gateway
                            </li>
                            <li>
                                <FaCommentSms className='inline text-2xl mr-2' />
                                Realtime chat
                            </li>
                            <li>
                                <TbDog className='inline text-2xl mr-2' />
                                Management Patients
                            </li>
                            <li>
                                <FaUserDoctor className='inline text-2xl mr-2' />
                                Management Veterinarians
                            </li>
                            <li>
                                <GiMedicines className='inline text-2xl mr-2' />
                                Management Treatments
                            </li>
                        </ul>
                        <p className='my-4'>And other features that leverage the modern technologies</p>
                    </div>

                </div>

            </section>


            <section className='container mx-auto px-4'>

                <div className='container mx-auto relative mt-6'>
                    <h2 className='font-semibold text-3xl relative z-1 w-50 text-center mx-auto bg-white'>SERVICIOS</h2>
                    <div className='text-amber-900 border-2 absolute top-1/2 w-full z-0' />
                </div>

                <div className='my-10 flex justify-between flex-wrap gap-5'>

                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 sm:flex-1">
                        <FaUserDoctor className='inline text-5xl' />
                        <h4 className="text-xl font-bold py-4 text-amber-700 hover:underline">Management Veterinarians</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-amber-900 absolute w-full" />
                    </div>


                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 bg-red-50 sm:flex-1">
                        <TbDog className='inline text-5xl' />
                        <h4 className="text-xl font-bold py-4 text-amber-700 hover:underline">Management Patients</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-amber-900 absolute w-full" />
                    </div>

                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 bg-red-50 sm:flex-1">
                        <GiMedicines className='inline text-5xl' />
                        <h4 className="text-xl font-bold py-4 text-amber-700 hover:underline">Management Treatments</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-amber-900 absolute w-full" />
                    </div>

                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 sm:flex-1">
                        <FaCommentSms className='inline text-5xl' />
                        <h4 className="text-xl font-bold py-4 text-amber-700 hover:underline">Realtime Chat</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-amber-900 absolute w-full" />
                    </div>
                </div>
            </section>


            <footer className='text-center bg-red-50 p-6 sm:px-20 sm:py-10 mt-20 rounded-tr-3xl rounded-tl-3xl space-y-8'>
    <h3 className='font-lato font-extrabold text-amber-800 uppercase text-3xl my-4 md:text-3xl'>CONTACTANOS</h3>
    {/* Contenedor principal para la imagen y el texto */}
    <div className='flex items-center justify-center flex-wrap gap-4'> 
        {/* Contenedor del logo */}
        <div>
            <li><img src={logoESFOT} alt="logo" width={170} height={75} /></li>
        </div>
        {/* Contenedor del texto */}
        <div className='text-left'>
            <p className='font-bold my-2'>Av. Ladrón de Guevara E11-253, Quito 170143</p>
            <p className='font-bold my-2'>Email: tutorias.esfot@epn.edu.ec</p>
        </div>
    </div>

    <hr className='border-1 border-amber-800' />

    <div className='text-center'>
        <div className='text-3xl font-extrabold text-amber-800 mb-4'>REDES SOCIALES</div>
        <ul className='flex gap-4 justify-center'>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100063704537871&fref=ts#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-2xl text-blue-600 hover:text-blue-800' />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/esfot_epn.uio/" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram className='text-2xl text-pink-600 hover:text-pink-800' />
                </a>
            </li>
        </ul>
        </div>
            </footer>

        </>
    )
}
