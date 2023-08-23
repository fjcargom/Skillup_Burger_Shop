import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare,AiFillGoogleSquare, AiFillGithub } from "react-icons/ai";

import { MDBContainer,MDBTabs,MDBTabsItem,MDBTabsLink,MDBTabsPane,MDBTabsContent, MDBBtn,MDBIcon} from 'mdb-react-ui-kit';

const Login = () => {

    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    return (
    <section className="login">
        <main>
        <MDBContainer  className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs
                pills
                justify
                className="mb-3 d-flex flex-row justify-content-between"
            >
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab1")}
                        active={justifyActive === "tab1"}
                    >
                    Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab2")}
                        active={justifyActive === "tab2"}
                    >
                    Regístrate
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <p className='text-center'>Iniciar sesión con:</p>
                    <div className='text-center mb-3'>
                        <a className="px-1 mx-5" href="#">
                            <AiFillFacebook />
                        </a>
                        <a className="px-1 mx-5"  href="#">
                            <AiFillTwitterSquare />
                        </a>
                        <a className="px-1 mx-5"  href="#">
                            <AiFillGoogleSquare />
                        </a>
                        <a className="px-1 mx-5"  href="#">
                            <AiFillGithub />
                        </a>
                    </div>
                    
                    <p className='text-center'>o con:</p>

                    <form id='formSesion'>
                        <input
                            className='form-control mb-2'
                            type="email"
                            placeholder='Dirección de correo electrónico:'
                        />
                        <input
                            className='form-control mb-2'
                            type="password"
                            placeholder='Contraseña:'
                        />
                        <div className='d-flex justify-content-between'>
                            <label className='form-check-label'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                />
                                Recuérdame
                            </label>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button className='btn btn-warning w-100 my-3'>INICIAR SESIÓN</button>
                        <div className='text-center'>
                            <p>¿No estás registrado? <a href="#">Regístrate</a></p>     
                        </div>
                    </form>
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab2"}>
                    <p>Regístrese con:</p>
                    <div className='text-center mb-3'>
                        <a className="px-1 mx-5" href="#">
                            <AiFillFacebook />
                        </a>
                        <a className="px-1 mx-5"  href="#">
                            <AiFillTwitterSquare />
                        </a>
                        <a className="px-1 mx-5"  href="#">
                            <AiFillGoogleSquare />
                        </a>
                        <a className="px-1 mx-5"  href="#">
                            <AiFillGithub />
                        </a>
                    </div>
                    <p className='text-center mt-3'>o con:</p>
                    <form id='formRegistrarse'>
                        <input
                            className='form-control mb-2' 
                            type="text"
                            placeholder="Nombre de usuario"
                        />
                        <input 
                            className='form-control mb-2'
                            type="email"
                            placeholder="Dirección de correo electrónico"
                        />
                        <input 
                            className='form-control mb-2'
                            type="password"
                            placeholder="Contraseña"
                        />
                        <label className='form-check-label'>
                            <input
                                className='form-check-input'
                                type="checkbox"
                            />
                            He leído y acepto las condiciones
                        </label>
                        <button className='btn btn-warning w-100 my-3'>REGÍSTRATE</button>
                    </form>
                </MDBTabsPane>
            </MDBTabsContent>
        
        </MDBContainer>

        {/* <MDBIcon fab icon="github" /> */}
        


            {/* <article className="p-3 my-5 d-flex flex-column w-50 mx-auto" id='iniciarSesion'>
                <div className='d-flex gap-3 justify-content-center mb-3'>
                    <a id='btnSesion' className='selected' href="">Iniciar Sesión</a>
                    <a id="btnRegistrate" href="">Registrate</a>
                </div>

                <p className='text-center'>Iniciar sesión con:</p>
                <div className='text-center mb-3'>
                    <a className="px-5" href="">
                        <AiFillFacebook />
                    </a>
                    <a className="px-5"  className="px-5"  href="">
                        <AiFillTwitterSquare />
                    </a>
                    <a className="px-5"  href="">
                        <AiFillGoogleSquare />
                    </a>
                    <a className="px-5"  href="">
                        <AiFillGithub />
                    </a>
                </div>
                
                <p className='text-center'>o con:</p>

                <form id='formSesion'>
                    <input
                        className='form-control mb-2'
                        type="email"
                        placeholder='Dirección de correo electrónico:'
                    />
                    <input
                        className='form-control mb-2'
                        type="password"
                        placeholder='Contraseña:'
                    />
                    <div className='d-flex justify-content-between'>
                        <label className='form-check-label'>
                            <input
                                className='form-check-input'
                                type="checkbox"
                            />
                            Recuérdame
                        </label>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button className='btn btn-primary w-100 my-3'>INICIAR SESIÓN</button>
                    <div className='text-center'>
                        <p>¿No estás registrado? <a href="#">Regístrate</a></p>     
                    </div>
                </form>
            </article>
            
            <article className="p-3 my-5 d-flex flex-column w-50 mx-auto d-none" id='registrarse' >
                <p>Regístrese con:</p>
                <div className='text-center mb-3'>
                    <a className="px-5" href="">
                        <AiFillFacebook />
                    </a>
                    <a className="px-5"  className="px-5"  href="">
                        <AiFillTwitterSquare />
                    </a>
                    <a className="px-5"  href="">
                        <AiFillGoogleSquare />
                    </a>
                    <a className="px-5"  href="">
                        <AiFillGithub />
                    </a>
                </div>
                <p className='text-center mt-3'>o:</p>
                <form id='formRegistrarse'>
                    <input
                        className='form-control mb-2' 
                        type="text"
                        placeholder="Nombre de usuario"
                    />
                    <input 
                        className='form-control mb-2'
                        type="email"
                        placeholder="Dirección de correo electrónico"
                    />
                    <input 
                        className='form-control mb-2'
                        type="password"
                        placeholder="Contraseña"
                    />
                    <label className='form-check-label'>
                        <input
                            className='form-check-input'
                            type="checkbox"
                        />
                        He leído y acepto las condiciones
                    </label>
                    <button className='btn btn-primary w-100 my-3'>REGÍSTRATE</button>
                </form>

            </article> */}
        </main>
    </section>
    )
}

export default Login