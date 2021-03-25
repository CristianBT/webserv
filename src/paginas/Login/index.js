
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import Header from '../../components/Header';
import '../../App.css';

export default class Login extends Component {
   

        constructor(props){
            super(props)
            this.state={
                message: this.props.location.state?this.props.location.state.message: '',
            };
        }
        singIn=()=>{
            const data={ email: this.email, password: this.password};
             const requestInfo ={
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer  ` 
                }),
               
            };
        
            fetch("https://app-bucetas.herokuapp.com/api/admin",requestInfo)
            .then(response=>{
                if(response.ok){
                    return response.json()
                }
                throw new Error("Login Invalido");
            })
            .then(token => {
                localStorage.setItem('token',token.token);
                this.props.history.push("/admin");
                return;
            })
            .catch(e => {
                this.setState({message: e.message});
            }); 
        }
        
        
            render(){
                return (
                    <div className="App">
                    <div className="col-md-6">
                         <Header title="Bienvenido Administrador" />
                       <hr className="my-3" />
                       {
                           this.state.message !== ''?(
                                <Alert color="danger" className="text-center">{this.state.message}</Alert>
                           ): ''
                       }
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" id="email" onChange={e=> this.email =e.target.value} placeholder="Ingrese su email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" id="password" onChange={e=> this.password =e.target.value} placeholder="Ingrese su password"/>
                            </FormGroup>
                            <Button color="primary" block  onClick={this.singIn}>Iniciar Sesion</Button>
                        </Form>
                    </div>
                    </div>
                );
            }
        
        }
        
        