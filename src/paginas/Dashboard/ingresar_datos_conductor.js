import React, { Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



class DatosConductor extends Component {


    state = {
        lista: [],
        modalInsertar: false,
        form: {
            cedula_conductor: '',
            apellido_conductor: '',
            nombre_conductor: '',
            celular_conductor:'',
            email_conductor:'',
            vehiculo:[
                {capacidad:'',
                marca:'',
                placavehiculo:''}
            ],
             
            tipoModal: ''
        }
    }




    peticionGet = () => {
        const token = localStorage.getItem('token');
        axios.get("https://app-bucetas.herokuapp.com/api/conductor", {
            headers: {
                'token': token
            }
        })
            .then(response => {
                this.setState({ lista: response.data.conductoresAll });
                console.log(response.data.conductoresAll)
              
            })
    }

    componentDidMount(){
        this.peticionGet();
    }



render (){
 

return(
<div>

INGRESAR DATOS DEL CONDUCTOR


<table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th >Cedula</th>
                            <th >Apellido</th>
                            <th >Nombre</th>
                            <th >Celular</th>
                            <th >Email</th>
                            <th >Capacidad</th>
                            <th >Marca</th>
                            <th >Placa Vehicular </th>
                            <th >Accion</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.lista.map(lista => {
                            return (
                                <tr>
                                    <td>{lista.cedula_conductor}</td>
                                    <td>{lista.apellido_conductor}</td>
                                    <td>{lista.nombre_conductor}</td>
                                    <td>{lista.cedula_conductor}</td>
                                    <td>{lista.email_conductor}</td>
                                    <td>{lista.vehiculos.marca}</td>
                                    <td>{lista.marca}</td>
                                    <td>{lista.placavehiculo}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarEmpresa(lista); this.modalInsertar() }}>Editar</button>
                         

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

   
</div>

);
}
}
export default DatosConductor;