import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class Autorizacion extends Component {

    state = {
        lista: [],
        modalInsertar: false,
        form: {
            cedula_conductor: '',
            apellido_conductor: '',
            nombre_conductor: '',
            state_conductor: '',
            numerorecorridomaximo: '',
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
        await axios.get("https://app-bucetas.herokuapp.com/api/conductor", this.state.form, {
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

    peticionPut = () => {
        /*     axios.put("https://app-bucetas.herokuapp.com/api/conductor"+this.state.form.id,
             this.state.form)
             .then(response=>{
              this.modalInsertar();
              this.peticionGet();
            })
       */

        const token = localStorage.getItem('token');
        axios.get("https://app-bucetas.herokuapp.com/api/conductor" + this.state.form.cedula_conductor,
            this.state.form, {
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

    seleccionarEmpresa = (lista) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                cedula: lista.cedula_conductor,
                apellido: lista.apellido_conductor,
                nombre: lista.nombre_conductor,
                estado: lista.state_conductor,
                recorrido: lista.numerorecorridomaximo
            }
        })
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
            <div >

                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th >Cedula</th>
                            <th >Apellido</th>
                            <th >Nombre</th>
                            <th >Estado</th>
                            <th >Numero de Recorridos</th>
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
                                    <td>{lista.state_conductor ? "true" : "false"}</td>
                                    <td>{lista.numerorecorridomaximo}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarEmpresa(lista); this.modalInsertar() }}>Editar</button>
                                        {"   "}

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
                            <input className="form-control" type="text" name="cedula_conductor" id="cedula_conductor" onChange={this.handleChange} value={form ? form.cedula : ''} />
                            <br />
                            <label htmlFor="apellido_conductor">Apellido</label>
                            <input className="form-control" type="text" name="apellido_conductor" id="apellido_conductor" onChange={this.handleChange} value={form ? form.apellido : ''} />
                            <br />
                            <label htmlFor="nombre_conductor">Nombre</label>
                            <input className="form-control" type="text" name="nombre_conductor" id="nombre_conductor" onChange={this.handleChange} value={form ? form.nombre : ''} />
                            <br />
                            <label htmlFor="state_conductor">Estado</label>
                            <input className="form-control" type="text" name="state_conductor" id="state_conductor" onChange={this.handleChange} value={form ? form.estado : ''} />
                            <label htmlFor="numerorecorridomaximo">Numero Maximo de Recorridos</label>
                            <input className="form-control" type="text" name="numerorecorridomaximo" id="numerorecorridomaximo" onChange={this.handleChange} value={form ? form.recorrido : ''} />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal == 'insertar' ?
                            <button className="btn btn-success" onClick={() => this.peticionPost()}>
                                Insertar
                      </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                                Actualizar
                      </button>
                        }
                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>



            </div>



        );
    }





























}
export default Autorizacion;