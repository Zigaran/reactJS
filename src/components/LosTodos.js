import React, { Component } from 'react';

class LosTodos extends Component {
    
   
    
    
    render() {
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

        );
    }
}

export default LosTodos;