import {Link} from 'react-router'
import useFetch from '../hooks/useFetch'
import { useForm } from 'react-hook-form';
import { ToastContainer} from 'react-toastify'

export const Forgot = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { fetchDataBackend } = useFetch()

    const sendMail = (data) => {
        let url = `${import.meta.env.VITE_BACKEND_URL}`;
        
        if (data.rol === 'docente') url += 'docente/recuperarpassword';
        if (data.rol === 'estudiante') url += 'estudiante/recuperarpassword';
        if (data.rol === 'administrador') url += 'administrador/recuperarpassword';
        
        {/* SOLO ENVIAR EL CAMPO EMAIL AL BACKEND */}
        const form = { email: data.email };
    
        fetchDataBackend(url, form, 'POST');
    }     

    return (
        <div className="flex flex-col sm:flex-row h-screen">

            <ToastContainer/>   

            <div className="w-full sm:w-1/2 h-screen bg-white flex justify-center items-center">

                <div className="md:w-4/5 sm:w-full">

                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-red-800">¿Olvidaste tu contraseña?</h1>
                    <small className="text-gray-400 block my-4 text-sm">Ingresa tu correo para restablecerla</small>


                    <form onSubmit={handleSubmit(sendMail)}>
                        {/* CORREO */}
                        <div className="mb-1">
                            <label className="mb-3 block text-sm font-semibold">Correo electrónico</label>
                            <input type="email" placeholder="Ingresa un correo electrónico válido" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                            {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <p className="text-red-800">{errors.email.message}</p>}
                        </div>

                        {/* ROL */}
                        <div className="mb-4">
                            <label htmlFor="rol" className="block text-gray-700 font-semibold mb-2">Rol</label>
                            <select
                                id="rol"
                                {...register('rol', { required: true })}
                                className="w-full border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option value="">Seleccione el rol</option>
                                <option value="docente">Docente</option>
                                <option value="estudiante">Estudiante</option>
                                <option value="administrador">Administrador</option>
                            </select>
                            {errors.rol && <p className="text-red-500 text-sm mt-1">El rol es obligatorio</p>}
                        </div>

                        <div className="mb-3">
                            <button className="bg-gray-600 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white">Enviar correo 
                            </button>
                        </div>

                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 ">
                    </div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>¿Ya posees una cuenta?</p>
                        <Link to="/login" className="py-2 px-5 bg-gray-600 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white">Iniciar sesión</Link>

                    </div>

                </div>

            </div>

            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/public/images/studentsForgot.avif')] 
            bg-no-repeat bg-cover bg-center sm:block hidden
            ">
            </div>
        </div>
    )
}
