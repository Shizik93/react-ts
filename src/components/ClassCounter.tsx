import React from "react";

class ClassCounter extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
    }


    increment() {
        // @ts-ignore
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        // @ts-ignore
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default ClassCounter