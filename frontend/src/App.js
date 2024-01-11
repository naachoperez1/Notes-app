import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://localhost:8080/notas";

class App extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    titulo: '',
    texto: '',
    active: ''
  }
}

// PETICION GET NOTAS ACTIVAS
peticionGetAllActiveNotes = () => {
  axios.get(url).then(response => {
    const activeNotes = response.data.filter(nota => nota.active === true);
    this.setState({ data: activeNotes, mostrandoArchivadas: false });
  }).catch(error => {
    console.log(error.message);
  })
}

// PETICION GET NOTAS ARCHIVADAS
peticionGetAllArchivedNotes = () => {
  axios.get(url).then(response => {
    const archivedNotes = response.data.filter(nota => nota.active === false);
    this.setState({ data: archivedNotes, mostrandoArchivadas: true });
  }).catch(error => {
    console.log(error.message);
  })
}

// PETICION POST NOTA  
peticionPost=async()=>{
  delete this.state.form.id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGetAllActiveNotes();
  }).catch(error=>{
    console.log(error.message);
  })
}

// PETICION PUT NOTA   
peticionPut=()=>{
  axios.put(url , this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGetAllActiveNotes();
  })
}

// PETICION DELETE NOTA    
peticionDelete=()=>{
  axios.delete(url + "/" + this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGetAllActiveNotes();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

archivarNota = (id) => {
  const notaToUpdate = this.state.data.find(nota => nota.id === id);

  if (notaToUpdate) {
    const updatedNota = { ...notaToUpdate, active: !notaToUpdate.active };

    axios.put(url , updatedNota)
      .then(response => {
        // Actualiza la lista de notas después de la actualización
        this.state.mostrandoArchivadas
          ? this.peticionGetAllArchivedNotes()
          : this.peticionGetAllActiveNotes();
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}

seleccionarNota=(nota)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: nota.id,
      titulo: nota.titulo,
      texto: nota.texto,
      active: nota.active
    },
    mostrandoArchivadas: false
  })
}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGetAllActiveNotes();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
      <div className='header'>
        <h1 className='titulo'>Bienvenido a la App de Notas</h1>
        <div className='btn-opciones'>
          <br /><br /><br />
          <button className="boton-agregar btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Nota</button>
          <br /><br />
          <br /><br /><br />
          <button className="btn boton-agregar btn-info" onClick={this.state.mostrandoArchivadas ? this.peticionGetAllActiveNotes : this.peticionGetAllArchivedNotes}>{this.state.mostrandoArchivadas ? 'Activas' : 'Archivadas'}</button>
          <br /><br />
        </div>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Texto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(nota=>{
            return(
              <tr key={nota.id}>
            <td key={nota.id}>{nota.id}</td>
            <td key={nota.titulo}>{nota.titulo}</td>
            <td className="texto" key={nota.texto}>{nota.texto}</td>
            <td className="botonera">
                <button className="btn btn-primary" onClick={()=>{this.seleccionarNota(nota); this.modalInsertar()}}>Editar</button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarNota(nota); this.setState({modalEliminar: true})}}>Eliminar</button>
                {"   "}
                <button className="btn btn-info" onClick={() => { this.archivarNota(nota.id) }}> {this.state.mostrandoArchivadas ? 'Desarchivar' : 'Archivar'}</button>
                </td>
            </tr>
          )
        })}
        </tbody>
      </table>



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input className="form-control" type="text" name="titulo" id="titulo" onChange={this.handleChange} value={form?form.titulo: ''}/>
                    <br />
                    <label htmlFor="texto">Texto</label>
                    <input className="form-control" type="text" name="texto" id="texto" onChange={this.handleChange} value={form?form.texto: ''}/>
                    <br />
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la nota {form && form.titulo}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default App;
