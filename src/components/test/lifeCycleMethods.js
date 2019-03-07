import React, { Component } from 'react'

class Test extends Component {
    state = {
        test: 'test'
    }
    componentDidMount() {
        console.log('componentDidMount...');
    }

    componentWillMount() {
        console.log('componentWillMount...');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate...');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate...');
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps...');
    }

    render() {
        return (
            <div>
                <h1><span className="text-primary">Test</span> Component</h1>
            </div>
        )
    }
}

export default Test;