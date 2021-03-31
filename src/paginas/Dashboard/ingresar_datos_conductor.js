import React, { Component } from 'react';
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
            celular_conductor: '',
            email_conductor: '',
            link_conductor: '',
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


    peticionPost = async () => {
        const token = localStorage.getItem('token');
        await axios.post("https://app-bucetas.herokuapp.com/api/conductor", this.state.form, {
            headers: {
                'token': token
            }
        })
            .then(response => {
                this.modalInsertar();
                this.peticionGet();
            }).catch(error => {
                console.log(error.message);
            })
    }


    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

 
    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }


    componentDidMount() {
        this.peticionGet();
    }



    render() {
   const { form } = this.state;

        return (
            <div>

                INGRESAR DATOS DEL CONDUCTOR
                <br />
                <button className="btn btn-primary" onClick={() => this.modalInsertar()}>Agregar</button>
                <br />
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th >Cedula</th>
                            <th >Apellido</th>
                            <th >Nombre</th>
                            <th >Celular</th>
                            <th >Email</th>
                            <th >Link</th>
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
                                    <td>{lista.linkcontrato_conductor}</td>
                            
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarEmpresa(lista); this.modalInsertar() }}>Editar</button>


                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{ display: 'block' }}>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>

                        <div className="form-group">
                            <label htmlFor="cedula_conductor">Cedula Conductor </label>
                            <input className="form-control" type="text" name="cedula_conductor" id="cedula_conductor" onChange={this.handleChange} value={form.cedula_conductor} />
                            <br />
                            <label htmlFor="apellido_conductor">Apellido Conductor</label>
                            <input className="form-control" type="text" name="apellido_conductor" id="apellido_conductor" onChange={this.handleChange} value={form.apellido_conductor} />
                            <br />
                            <label htmlFor="nombre_conductor">Nombre Conductor</label>
                            <input className="form-control" type="text" name="nombre_conductor" id="nombre_conductor" onChange={this.handleChange} value={form.nombre_conductor} />
                            <br />
                            <label htmlFor="celular_conductor">Celular Conductor</label>
                            <input className="form-control" type="text" name="celular_conductor" id="celular_conductor" onChange={this.handleChange} value={form.celular_conductor} />
                            <br />
                            <label htmlFor="email_conductor">Email Condcutor</label>
                            <input className="form-control" type="text" name="email_conductor" id="email_conductor" onChange={this.handleChange}  value={form.email_conductor}/>
                            <br />
                            <label htmlFor="link_conductor">Link Contrato</label>
                            <input className="form-control" type="text" name="link_conductor" id="link_conductor" onChange={this.handleChange}  value={form.link_conductor} />

                        </div>
                    </ModalBody>

                    <ModalFooter>

                        <button className="btn btn-success" onClick={() => this.peticionPost()}>
                            Insertar
                      </button>

                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>










            </div>

        );
    }
}
export default DatosConductor;