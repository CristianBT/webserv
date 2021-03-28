
import React, { Component } from 'react';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';


class Busqueda extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lista: [],
      form: {
        cedula_estudiante: '',
      }
    };
  }

  busqueda = () => {

    const token = localStorage.getItem("token");
    const ced = { cedula: this.cedula };
    const requestInfo = {
      method: 'GET',
      body: JSON.stringify(),
      headers: new Headers({
        'Authorization': `Bearer  `,
        'token': token
      }),
    };
    fetch(`https://app-bucetas.heroku.com/api/estudiante/ ` + this.state.form.cedula_estudiantes, requestInfo)
      .then(response => {
        console.log(response.data)
      })


  }

  ingresardato = () => {
    /*    const token = localStorage.getItem('token');
       const data={cedula: this.cedula};
       console.log(data);
         axios.get( `https://app-bucetas.heroku.com/api/estudiante/${data} `, {
      headers: {
           'token': token
      }
      
       })
        .then(response=>{
           this.setState({lista: response.data.estudianteById});
           console.log(response.data.estudianteById)
       })   */



    /*    const token = localStorage.getItem('token');
       const data=this.cedula;
       console.log(data);
       axios.get( `https://app-bucetas.heroku.com/api/estudiante/{data=cedula} `,{
         headers: {
           'token': token
      }
       })
       .then(response=>{
         this.setState({lista: response.data.estudianteById});
         console.log(response.data.estudianteById)
       }) */


    const token = localStorage.getItem('token');
    axios.get("https://app-bucetas.heroku.com/api/estudiante" + this.state.form.cedula_estudiante, {
      headers: {
        'token': token
      }
    })
      .then(response => {
        /* this.setState({lista: response.data.estudianteById}); */
        console.log(response.data)
      }).catch(error => {
        console.log(error.message);
      })
  }






     componentDidMount(){
 
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
      <div>

<div className="barraBusqueda">
            <input
              type="text"
              placeholder="Buscar"
              className="textField"
              name="busqueda"
              value={this.state.busqueda}
              onChange={this.onChange}
            />
            <button type="button" className="btnBuscar" /*onClick={onClear}*/>

            </button>
          </div>
     

        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th >Cedula</th>
              <th >Apellido</th>
              <th >Nombre</th>
              <th >Semestre</th>
              <th >Facultad</th>
              <th >Ciudad</th>
              <th >Celular</th>
              <th >Email</th>
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
                  <td>{lista.celular_estudiante}</td>
                  <td>{lista.email_estudiante}</td>
                </tr>
              )
            })}
          </tbody>
        </table>






      </div>

    );
  }
}
export default Busqueda;