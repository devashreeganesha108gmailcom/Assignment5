import React, { Component } from 'react';

//class for the object that represents the clock whose code was imported from 
//https://www.npmjs.com/package/react-clock
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2 className="font-weight-bold">{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;