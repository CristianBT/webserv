import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navegador from './navegador';
import PrivateRoute from '../../auth';
import Header from '../../components/Header';
import ListaEstudiantes from './lista_estudiantes';
import BusquedaEstudiantes from './busqueda_estudiantes';
import AutorizacionCuentas from './autorizacion_cuenta';
import IngresarDatosConductor from './ingresar_datos_conductor';
import Horarios from './ingresar_horario';
import Afluencia from './afluencia';



export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            user: {},
        }
    }

  /*   componentDidMount() {
         const token = localStorage.getItem("token");
        fetch('https://app-bucetas.herokuapp.com/api/admin', 
        { headers: new Headers({ 'Authorization': `Bearer ${ token } `}) })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Token no encontrado');
            })
            .then(user => this.setState({ user }))
            .catch(e => console.log(e)) 

    } */
    render() {
        return (

            <div>
                 <Header title="Dashboard" />
                <Link to="/logout" className="btn btn-outline-primary  "block>
                    Cerrar Sesion
            </Link>
            <hr className="my-3" />
                <Router>
                <Navegador />
                    <Switch>
                    <PrivateRoute path="/admin/lista" component={ListaEstudiantes} />
                    <PrivateRoute path="/admin/busqueda" component={BusquedaEstudiantes} />
                    <PrivateRoute path="/admin/autorizacion" component={AutorizacionCuentas} />
                    <PrivateRoute path="/admin/ingresar" component={IngresarDatosConductor} />
                    <PrivateRoute path="/admin/horarios" component={Horarios} />
                    <PrivateRoute path="/admin/afluencia" component={Afluencia} />
                    </Switch>
                </Router>

       

            </div>

        );
    }

}
