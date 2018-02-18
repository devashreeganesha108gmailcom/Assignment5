import React, { Component } from 'react';

//class for object that houses the input textfield box, the criteria selector and add item button
class InputForm extends Component {
    render() {
        return (
            <div class="col-xs-12 text-center">
                <div class="m-auto">
                    <div className=" mb-3 text-center">
                        <div className="mb-2">
                            {/* input text box where the task to be done is entered and the update method is triggered upon function invocation */}
                            <input className="input-task mt-2 mb-2" placeholder="Enter To Do Task" type="text" onKeyUp={this.props.update} />
                        </div>
                        <div>
                            {/* button to add the task to the to do list items that triggers the invocation of the add function upon being clicked */}
                            <button className="btn btn-success add-item-button" onClick={this.props.add}>ADD ITEM</button><br />
                        </div>
                    </div>
                    <div className="mt-3 m-auto">
                        {/* filter criteria selector that triggers the invocation of the filter criteria selector function upon state change */}
                        <select className="m-auto w-30 p-3" onChange={this.props.filterCriteriaSelector} >
                            <option className="filter-criteria-option" value="selectfiltercriteria">Display All</option>
                            <option value="checked">Checked</option>
                            <option value="unchecked">Unchecked</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
export default InputForm;