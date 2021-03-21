
import React, { Component} from 'react';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';


class Busqueda extends Component {


    state={
        lista: []
    };

   ingresardato=()=>{
    const token = localStorage.getItem('token');
    const data={ cedula: this.cedula};
  
    axios.get( `https://app-bucetas.heroku.com/api/estudiante/${cedula} `, {
   headers: {
        'token': token
   } 
    })
     .then(response=>{
        this.setState({lista: response.data.estudianteAll});
        console.log(response.data.estudianteAll)
    }) 
   }



render (){
return(
<div>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="text" id="cedula"  onChange={e=> this.cedula =e.target.value}  
        placeholder="Buscar con cedula" aria-label="Buscar" />

      <button class="btn btn-outline-success" type="submit" onClick={this.ingresardato}>Buscar</button>
    </form>
  </div>
</nav>

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

    {this.state.lista.map(lista=>{
        return(
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