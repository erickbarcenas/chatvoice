import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {SocketContext} from "../../context/SocketContext";
//
export const LoginScreen = () => {

    const { socket } = useContext( SocketContext );

    const handleConnectSocket = () =>{
        socket.emit( 'crear-banda', { nombre: "Erick" });
    }

    return (
        <div className="form">
            <div className="sh_form">
                <lottie-player src="/lottie/person.json" background="transparent" speed="1" style={{
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'center'
                }} loop autoplay/>
                <div className="sh_block sh__mt2">
                    <h3 className="sh_auth__title">Face L52+</h3>

                    <form>

                        <input
                            type="text"
                            placeholder="Correo"
                            name="email"
                            className=""
                            autoComplete="off"
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            className=""
                        />


                        <button
                            type="submit"
                            className="sh_btn sh_block"
                        >
                            Iniciar sesión
                        </button>


                        <div className="sh_auth__social-networks">
                            <p>Iniciar sesión con Redes Sociales</p>

                            <div className="sh_btn-white sh_google-btn">
                                <img className="sh_google-icon"
                                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                     alt="google button"/>
                            </div>
                        </div>

                        <Link
                            to="/auth/register"
                            className="sh_link"
                        >
                            Crear cuenta
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}
