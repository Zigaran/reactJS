/* En esta seccion se importan las dependencias. 
  Para que este componente (App.js) funcione correctamente se deben
  declarar las direcciones de los demas componentes*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';
import NavBar from './components/NavBar';


/* Esta seccion es el cuerpo de toda la App.js, es el 'Single Page Application' */
class App extends Component {//Se crea una clase App que hereda de 
                              //Component <-- Importado en la seccion superior.

/* Aqui se define el constructor: El constructor se utiliza solo para 2 cosas
    1- Para inicializar un estado local asignando un objeto al this.state.
    2- Para enlazar manejadores de eventos a una instancia. 
    El constructor es el único lugar donde debes asignar this.state directamente. 
    En todos los demás métodos, debes usar this.setState() en su lugar.*/                            
  constructor(){
    super();  // Siempre que se llama al constructor, debe llamarse a super()
                // super() es necesario porque trae todas las propiedades del constructor.
    this.state = { todos }  // Asigna al estado actual los objetos del array 'todos'
    this.handleAddTodo = this.handleAddTodo.bind(this);  //Esto se hace cuando se pierde el Scope
  }


  // Aqui se define una funcion que setea el estado actual (osea añade una nueva tarea)
  // Funciona de la siguiente manera: la propiedad onAddTodo del componente TodoForm.js
  // le pasa el estado (de TodoForm.js que seria una tarea nueva) como parametro a handleAddTodo
  // y esta funcion (handleAddTodo) lo concatena con los demas objetos o tareas en este caso
  handleAddTodo(todo) {
    this.setState({  //Aca setea
      todos: [...this.state.todos, todo]  //Aca lo concatena
    })
  } 

  

  // Esta funcion remueve o elimina una tarea
  removeTodo(index) {
    this.setState({  // El metodo filter, devuelve los objetos que cumplan con la condicion
        todos: this.state.todos.filter((e, i) => {  // es decir, devuelve todos los objetos que sean distinto
          return i !== index})          // del indice 'index', osea al que es igual a index lo elimina
                                        // o mejor dicho, no lo agrega al array todos.
    })
  }


  // Aqui se llama al metodo render, que renderiza la pantalla o la interfaz, es decir pinta la pantalla
  // El metodo render siempre debe ser llamado si se crea una clase que hereda de component
  render() {

  // Aqui itera el array 'todos' que se encuentra en el estado actual, almacenandolo en una constante 
  // 'todos' con un formato de tarjeta, luego esta constante 'todos' es retornado para pintar por pantalla
  // todos aquellos objetos que fueron guardados en esta constante
    const todos = this.state.todos.map((todo, i) => {
       
      return(
        
        <div className="col-md-4" key={i}>

            <div className="card mt-4">
              
                  <div className="card-header">
                   
                    <h3>{todo.title}</h3>
                    
                    <span className="badge badge-pill badge-danger ml-2">
                      {todo.priority}
                    </span>
                  
                    <h6 className="">
                    {todo.responsible}
                    </h6>

                  </div>
                  
                        <div className="card-body">
                          <p> {todo.description} </p>
                        </div>
                    
                              <div className="card-footer">
                                <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                                  Delete
                                </button>
                              </div>

              </div> 
            </div>
           
        )
    })


  // Aqui es verdaderamente donde se muestra el renderizado,  
  // Se inicia con un 'div' cuyo nombre es "App", este componente tiene su
  // propia hoja de estilos .css (App.css)
  return (
  

   <div className="App">
      <NavBar />
       <div className="container">
           <div className="row mt-5">
           <TodoForm onAddTodo={this.handleAddTodo} />
           {todos}
           </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
}
export default App;
