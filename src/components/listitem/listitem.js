import React, { Component } from 'react';

//class for the individual to do list items
class ListItem extends Component {
    render() {
        //condition that checks to see if the to do list item has to be checked
        if (this.props.checked) {
            return (
                <div className="border p-2 m-3 bg-faded list-item">
                    <div className="float-right"> 
                        {/* button for removing the to do list item that triggers the invocation of the remove function upon being clicked */}
                        <button className="btn btn-danger btn-sm remove-btn" onClick={this.props.remove}>Remove</button>
                    </div>
                    <div className="ml-2 float-left">
                        {/* triggers marked function invocation upon being clicked and sets itself as marked */}
                        <input className="" type="checkbox" onChange={this.props.marked} checked={true} />
                    </div>
                    <div className="float-none m-auto w-75">
                        <p className="text-justify">{this.props.data}</p> {/* the actual to do list item data */}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="border p-2 m-3 bg-faded list-item">
                    <div className="float-right">
                        {/* button for removing the to do list item that triggers the invocation of the remove function upon being clicked */}
                        <button className="btn btn-danger btn-sm remove-btn" onClick={this.props.remove}>Remove</button>
                    </div>
                    <div className="ml-2 float-left">
                        {/* triggers marked function invocation upon being clicked and sets itself as unmarked */}
                        <input className="" type="checkbox" onChange={this.props.marked} checked={false} />
                    </div>
                    <div className="float-none m-auto w-75">
                        <p className="text-justify">{this.props.data}</p> {/* the actual to do list item data */}
                    </div>
                </div>
            )
        }
    }
}
export default ListItem;
