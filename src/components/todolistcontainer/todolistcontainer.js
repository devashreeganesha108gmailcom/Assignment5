import React, { Component } from 'react';
import ListItem from '../listitem/listitem';

//Container object that will contain the list of to do items
class ToDoListContainer extends Component {
    render() {
        let listItems = []; // array declaration and initialization for list items
        // if then statements that check for filter criteria condition and assigns value for list items depending on it
        if (this.props.filterCriteria === "" || this.props.filterCriteria === "selectfiltercriteria") {
            //assigns values to list items array based on the to do list array 
            listItems = this.props.array.map((item, i) => {
                return <ListItem key={item.itemID} checked={item.itemChecked} data={item.itemValue} marked={(event) => { this.props.setMarked(event, item.itemID) }} remove={() => { this.props.remove(item.itemID) }} />
            })
        } //condition that checks if checked filter criteria is selected
        else if (this.props.filterCriteria === "checked") {
            //condition that checks if array of checked to do list item is empty or not
            if (this.props.markedArray.length !== 0) {
                //assigns values to the list items array based on the array of checked to do list items
                listItems = this.props.markedArray.map((item, i) => { 
                    return <ListItem key={item.itemID} checked={item.itemChecked} data={item.itemValue} marked={(event) => { this.props.setMarked(event, item.itemID) }} remove={() => { this.props.remove(item.itemID) }} />
                })
            }
        } //if condition that checks if unchecked filter criteria is selected
        else if (this.props.filterCriteria === "unchecked") {
            //condition that checks if array of unchecked to do list item is empty or not
            if (this.props.unmarkedArray.length !== 0) {
                //assigns values to the list items array based on the array of unchecked to do list items
                listItems = this.props.unmarkedArray.map((item, i) => { 
                    return <ListItem key={item.itemID} checked={item.itemChecked} data={item.itemValue} marked={(event) => { this.props.setMarked(event, item.itemID) }} remove={() => { this.props.remove(item.itemID) }} />
                })
            }
            else {
                //condition that checks if the to do list array is the same as the checked item list array
                if (JSON.stringify(this.props.array) !== JSON.stringify(this.props.markedArray)) {
                    listItems = this.props.array.map((item, i) => {
                        return <ListItem key={item.itemID} checked={item.itemChecked} data={item.itemValue} marked={(event) => { this.props.setMarked(event, item.itemID) }} remove={() => { this.props.remove(item.itemID) }} />
                    })
                }
            }
        }
        return (
            <div>
                {listItems} {/* Returns the list items to be rendered and displayed by the browser */}
            </div>
        )
    }
}

export default ToDoListContainer;