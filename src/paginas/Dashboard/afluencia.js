import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Model, ModelBody, ModalFooter, ModalHeader } from 'reactstrap';

 const url = "https://app-bucetas.herokuapp.com/api/consultahorarios"; 

class Afluencia extends Component {
    state = {
        info:[]

    }
   post=()=>{
        const token = localStorage.getItem('token');
        const data={ dia: this.dia, entrda: this.entrada, salida: this.salida};
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer  `,
                'token': token
            },
            body: JSON.stringify(data)
        };
        fetch('https://app-bucetas.herokuapp.com/api/consultahorarios', requestOptions,
           )
            .then(res=>res.json())
            .then(info=>{
                console.log(info)
            })

   }
   componentDidMount(){
    
   }



 
    render() {
        return (
            <div>
               <h5 className="text-align center">AFLUENCIA DE ESTUDIANTES</h5> 
                <br></br>
          
                    <div className="col-md-6">
                       <Form>
                            <FormGroup>

                                <Input type="text" id="dia" onChange={e=> this.dia =e.target.value} placeholder="Dia de la Semana: Lunes"/>
                                <Input type="text" id="entrada" onChange={e=> this.entrada =e.target.value} placeholder="Hora de Entrada: 07:00:00 / 21:00:00"/>
                                <Input type="text" id="salida" onChange={e=> this.salida =e.target.value} placeholder="Hora de Salida: 07:00:00 / 21:00:00"/>
                            </FormGroup>
                            <Button color="primary" block  onClick={this.post}>Buscar</Button>
                        </Form>
                        </div>
               



               {/*  <table className="table">
                    <thead>
                        <tr>
                        <td>
                            <h6>Dias de la Semana</h6>
                            <select value={this.state.value}>
                             <option value=""   >  </option>
                             <option value="Lunes"  >Lunes</option>
                             <option value="Martes" >Martes</option>
                             <option value="Miercoles" onClick={this.post}>Miercoles</option>
                             <option value="Jueves" >Jueve</option>
                             <option value="Viernes" >Viernes</option>
                             <option value="Sabado"  >Sabado</option>
                             <option value="Domingo"  >Domingo</option>
                            </select>
                        </td>
                        </tr>

                    {/    <tr>
                        <td>
                            <h6>Hora de Entrada</h6>
                            <select name="entrada" id="entrada">
                             <option value=""  onClick={this.post}>  </option>
                             <option value="siete"  onClick={this.post}>07:00</option>
                             <option value="ocho"  onClick={this.post}>08:00</option>
                             <option value="nueve"  onClick={this.post}>09:00</option>
                             <option value="diez"  onClick={this.post}>10:00</option>
                             <option value="once"  onClick={this.post}>11:00</option>
                             <option value="doce"  onClick={this.post}>12:00</option>
                             <option value="trece"  onClick={this.post}>13:00</option>
                             <option value="catorce"  onClick={this.post}>14:00</option>
                             <option value="quince"  onClick={this.post}>15:00</option>
                             <option value="diesiseis"  onClick={this.post}>16:00</option>
                             <option value="diesisiete"  onClick={this.post}>17:00</option>
                             <option value="disiocho"  onClick={this.post}>18:00</option>
                             <option value="disienueve"  onClick={this.post}>19:00</option>
                             <option value="veinte"  onClick={this.post}>20:00</option>
                            </select>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <h6>Hora de Salida</h6>
                            <select name="salida" id="salida">
                             <option value=""  onClick={this.post}>  </option>
                             <option value="siete"  onClick={this.post}>07:00</option>
                             <option value="ocho"  onClick={this.post}>08:00</option>
                             <option value="nueve"  onClick={this.post}>09:00</option>
                             <option value="diez"  onClick={this.post}>10:00</option>
                             <option value="once"  onClick={this.post}>11:00</option>
                             <option value="doce"  onClick={this.post}>12:00</option>
                             <option value="trece"  onClick={this.post}>13:00</option>
                             <option value="catorce"  onClick={this.post}>14:00</option>
                             <option value="quince"  onClick={this.post}>15:00</option>
                             <option value="diesiseis"  onClick={this.post}>16:00</option>
                             <option value="diesisiete"  onClick={this.post}>17:00</option>
                             <option value="disiocho"  onClick={this.post}>18:00</option>
                             <option value="disienueve"  onClick={this.post}>19:00</option>
                             <option value="veinte"  onClick={this.post}>20:00</option>
                             <option value="veintiuno"  onClick={this.post}>21:00</option>
                            </select>
                        </td>
                        </tr> }
                     
                
                        

                    </thead>
                    <tbody>
 
                       {this.state.data.map(horario=>{
                           return(
                               <tr>
                                   <td>{horario.nombredia}</td>
                                   <td>{horario.horaentrata}</td>
                                   <td>{horario.horasalida}</td>
                               </tr>
                           )
                       })} }

                    </tbody>
                </table> */}


            </div>

        );
    }
}
export default Afluencia;