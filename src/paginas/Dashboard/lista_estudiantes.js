import React, { Component} from 'react';
import axios from 'axios';
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class ListaEstudiantes extends Component {

    state={
        lista: []
    };
 

 /*   post=()=>{
        const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer  `,
                'token': token
            },
            body: JSON.stringify()
        };
        fetch('https://app-bucetas.herokuapp.com/api/estudiante', requestOptions,
           )
           .then(response=>response.json())
           .then(data=>{
            this.setState({data});
               console.log(data)
           })
   } */



   componentDidMount(){
    const token = localStorage.getItem('token');
    axios.get("https://app-bucetas.herokuapp.com/api/estudiante", {
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
       <div >
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

    {this.state.lista.map(lista=>{
        return(
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
        
        


        );
 
     
}
}
export default ListaEstudiantes;