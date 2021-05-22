import React, {Fragment} from 'react';
import { withNamespaces } from 'react-i18next';
import Navbar from '../../components/Layout/Navbar';

const Landing =({t}: any) => {


    return <Fragment>
        <Navbar/>
        <main className="container-fluid cover  ">

            <div className="row align-items-center justify-content-center justify-content-xl-start vh-100">
                <div className="col col-sm-7 text-center text-xl-left col-xl-4 offset-xl-2">
                    <h1 className="mb-4 sh_colors-white">Chatvoice</h1>
                    <h4 className="mb-1 subtitle-mb sh_colors-white">Reconocimiento de rasgos faciales</h4>
                    {/*<div className="input-group mb-3 shadow">
                        <input type="text" className="form-control" placeholder="Enter delivery address"
                               aria-label="Search" aria-describedby="basic-addon1"/>
                            <div className="input-group-prepend">
                                <button className="btn bg-orange text-light text-uppercase p-3" type="button">Find
                                    food
                                </button>
                            </div>
                    </div>*/}
                    <p className="sh_colors-white">Contacto: ivanvladimir@gmail.com</p>
                </div>
            </div>
        </main>
    </Fragment>
}

export default withNamespaces()(Landing);
