
import React, { Component } from 'react';
import InputForm from '../inputform/inputform';
import ToDoListContainer from '../todolistcontainer/todolistcontainer';
import Clock from '../clock/clock';

//Class for the object that will hold everythng
class MainContainer extends Component {
    render() {
        return (
            <div class="text-center">
                <div class="jumbotron m-auto bg-primary">
                    <h1 className="text-white main-title">THINGS TO DO</h1>
                    <Clock /> {/*  Clock Object */}
                    <img className="mb-2" src="http://www.dovetailrecruitment.co.uk/wp-content/uploads/2017/03/checklist-business.png" width="200px" alt="checklist icon"/>
                    {/* Where user will type the input and press the add button */}
                    <InputForm add={this.props.add}
                               update={this.props.update} //prop for the update method
                               remove={this.props.remove} //prop for the remove method
                               filterCriteriaSelector={ //prop for the filter criteria
                                this.props.filterCriteriaSelector
                               }
                               filterResults={this.props.filterResults} //prop for the filter results
                               counter={this.props.counter} /> <br /> {/* prop for the counter for every list item */}
                    
                               <h5 className="stat mt-2 m-auto text-inverse bg-warning">Checked Items : {this.props.markedToDo}</h5><br /> {/*  prop for number of marked to do list items */}
                               <h5 className="stat mt-2 m-auto text-inverse bg-warning">Un-Checked Items : {this.props.unMarkedToDo}</h5><br /> {/*  prop for number of unmarked to do list items */}               
                               <h5 className="stat mt-2 m-auto text-inverse bg-warning">Total-To Do List : {this.props.totalToDo}</h5> {/*  prop for number of total to do list items */}               
                </div>
                <div>    
                    <ToDoListContainer  array={this.props.array} //prop for toDoListArray 
                                        add={this.props.add} //prop add method 
                                        update={this.props.update} //prop for update method
                                        remove={this.props.remove} //prop for remove method
                                        filterCriteriaSelector={this.props.filterCriteriaSelector} //prop for filter criteria selector method
                                        filterResults={this.props.filterResults} //prop for filter results method
                                        setMarked={this.props.setMarked} //prop for set marked method
                                        counter={this.props.counter} //prop for counter for every list item
                                        filterCriteria={this.props.filterCriteria} //prop for fiter criteria
                                        markedArray={this.props.markedArray} //prop for marked array
                                        unmarkedArray={this.props.unmarkedArray} //prop for unmarked array 
                                                                                />
                </div>
            </div>
        )
    }
}
export default MainContainer;