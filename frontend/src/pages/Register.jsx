//REGISTRO
import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //Obtener el rol seleccionado dinámicamente
    const rolSeleccionado = watch("rol");

    const registro = async (data) => {
        try {
            const tipoRol = data.rol.toLowerCase();  // construir la URL con el rol
            const url = `http://localhost:3000/api/${tipoRol}/registro`;
            const respuesta = await axios.post(url, data);
            toast.success(respuesta.data.msg);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row h-screen">
            <ToastContainer />
            <div className="w-full sm:w-1/2 h-screen bg-white flex justify-center items-start py-10 overflow-auto">
                <div className="md:w-4/5 sm:w-full">
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase text-red-800">SECCIÓN DE REGISTRO</h1>
                    <small className="text-gray-400 block my-4 text-sm">Por favor ingresa tus datos</small>

                    <form onSubmit={handleSubmit(registro)}>

                        {/* Rol */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Rol * </label>
                            <select {...register("rol", { required: "El rol es obligatorio" })} className="border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                                <option value="">Selecciona tu rol</option>
                                <option value="estudiante">Estudiante</option>
                                <option value="docente">Docente</option>
                                <option value="administrador">Administrador</option>
                            </select>
                            {errors.rol && <p className="text-red-800">{errors.rol.message}</p>}
                        </div>

                      {/* Nombre */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Nombre</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre..."
                                {...register("nombre", { required: "El nombre es obligatorio" })}
                                className="w-full border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            {errors.nombre && <p className="text-red-800">{errors.nombre.message}</p>}
                        </div>

                        {/* Apellido */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Apellido</label>
                            <input type="text"
                            placeholder= "Ingresa tu apellido..." 
                            {...register("apellido", { required: "El apellido es obligatorio" })} 
                            className= "w-full border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
                            {errors.apellido && <p className="text-red-800">{errors.apellido.message}</p>}
                        </div>

                        {/* Dirección (solo aparece para el rol docente) */}
                        {rolSeleccionado === "docente" && (
                            <div className="mb-3">
                                <label className="mb-2 block text-sm font-semibold">Oficina</label>
                                <select {...register("direccion", { required: "La oficina es obligatoria" })} className= "border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                                    <option value="">Selecciona tu oficina</option>
                                    <option value="Oficina 2 ESFOT">Oficina 2 ESFOT</option>
                                    <option value="Oficina 3 ESFOT">Oficina 3 ESFOT</option>
                                    <option value="Oficina 5 ESFOT">Oficina 5 ESFOT</option>
                                    <option value="Oficina 6 ESFOT">Oficina 6 ESFOT</option> 
                                </select>
                                {errors.direccion && <p className="text-red-800">{errors.direccion.message}</p>}
                            </div>
                        )}


                        {/* Celular */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Celular</label>
                            <input type="text"
                            placeholder = "Ingresa tu número telefónico" {...register("celular", { required: "El celular es obligatorio" })} 
                            className= "w-full border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"/>
                            {errors.celular && <p className="text-red-800">{errors.celular.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Correo institucional</label>
                            <input type="email" 
                            placeholder = "Ingresa tu correo electrónico..."{...register("email", { required: "El correo es obligatorio" })} 
                            className= "w-full border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                            {errors.email && <p className="text-red-800">{errors.email.message}</p>}
                        </div>

                        {/* Contraseña */}
                        <div className="mb-3 relative">
                            <label className="mb-2 block text-sm font-semibold">Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Ingresa tu contraseña..."
                                    {...register("password", { required: "La contraseña es obligatoria" })}
                                    className="w-full border border-black rounded px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 hover:text-gray-900"
                                >
                                    {showPassword ? "Ocultar" : "Mostrar"}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-800">{errors.password.message}</p>}
                        </div>

                        {/* Botón de envío */}
                        <div className="mb-3">
                            <button className="bg-blue-900 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-red-900 hover:text-white">Registrarse</button>
                        </div>

                    </form>

                    {/* Enlace a login */}
                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link to="/login" className="py-2 px-5 bg-blue-900 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900">Iniciar sesión</Link>
                    </div>
                </div>
            </div>

            {/* Imagen lateral */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/public/images/estudiantesEPN.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>
        </div>
    );
}
