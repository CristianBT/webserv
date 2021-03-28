import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Printer, { print } from 'react-pdf-print'


const ids = ['1']


class ListaEstudiantes extends Component {

    state = {
        lista: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios.get("https://app-bucetas.herokuapp.com/api/estudiante", {
            headers: {
                'token': token
            }
        })
            .then(response => {
                this.setState({ lista: response.data.estudianteAll});
                console.log(response.data.estudianteAll)
            })
    }
    render() {
        return (
            <div >
                <input type='button' style={{ position: 'relative', float: 'right' }}
                    onClick={() => print(ids)} value='Imprimir PDF' />  
                <Printer>
                    <div id={ids[0]} style={{ width: '210mm', height: '297mm' }}>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th >Cedula</th>
                                    <th >Apellido</th>
                                    <th >Nombre</th>
                                    <th >Semestre</th>
                                    <th >Facultad</th>
                                    <th >Ciudad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.lista.map(lista => {
                                    return (
                                        <tr>
                                            <td>{lista.cedula_estudiante}</td>
                                            <td>{lista.apellido_estudiante}</td>
                                            <td>{lista.nombre_estudiante}</td>
                                            <td>{lista.semestre.nombre}</td>
                                            <td>{lista.facultade.nombre}</td>
                                            <td>{lista.ciudad.nombre}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </Printer>
                
            </div>
        );
    }
}
export default ListaEstudiantes;