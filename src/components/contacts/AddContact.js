import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
// import uuid from 'uuid';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        //Check For Errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }

        const newContact = {
            //  id: uuid(),
            name,
            email,
            phone
        }

        // #3. Add Contact Request To Context API
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', newContact);
        // .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));
        dispatch({ type: 'ADD_CONTACT', payload: res.data });

        // Clear State :
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        //Redirect to /home after submit -> clear fields -> /home
        this.props.history.push('/');
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;

/*

                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                />

                                isEqualTo :

                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input form-control form-control-lg"
                                            placeholder="Add Name..."
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>



*/
