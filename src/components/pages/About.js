import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 className="display-4">About Contact Manager</h1>
            <p className="lead">Simple App To Manage Contact</p>
            <p className="text-seconday">Version 1.0.0</p>
        </div>
    )
}

// {props.match.params.id} : /about:id 
