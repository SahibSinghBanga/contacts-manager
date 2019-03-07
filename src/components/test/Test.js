import React, { Component } from 'react'

class Test extends Component {
    state = {
        id: '',
        title: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                id: data.id,
                title: data.title
            }))
    }

    render() {
        const { id, title } = this.state;
        return (
            <div>
                <h1><span className="text-primary">Test</span> Component</h1>
                <h2>{id}</h2>
                <p>{title}</p>
            </div>
        )
    }
}

export default Test;